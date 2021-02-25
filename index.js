const { hexToDec } = require('hex2dec');
const { readFloatBE } = require('ieee-float');

const mapping = {
    ToSenseID: [0, 2, null],
    counter: [1, 2, null, 7],
    epoch: [2, 4, null, 8],
    BatteryMon: [3, 4, null, 10],
    temp: [4, 4, null, 11],
    AI1: [5, 3, null],
    AI2: [6, 3, null],
    EAI3: [7, 3, null],
    EAI4: [8, 3, null],
    EAI5: [9, 3, null],
    AI1_f: [10, 4, null],
    AI2_f: [11, 4, null],
    EAI3_f: [12, 4, null, 1],
    EAI4_f: [13, 4, null, 3],
    EAI5_f: [14, 4, null, 5],
    HTU21DTemp: [15, 4, null],
    HTU21DHum: [16, 4, null],
    RC522_UID_size: [17, 1, null],
    RC522_UID: [18, 10, null],
    angleX_f: [19, 4, null],
    angleY_f: [20, 4, null],
    DiInp: [21, 2, null],
    PulInp: [22, 4, null],
    FreInp: [23, 2, null],
    Vec_en_at_di: [24, 3, null],
    Vec_en_re_in: [25, 3, null],
    Vec_en_re_ca: [26, 3, null],
    ModMasterNode1: [27, 2, null],
    ModMasterNode2: [28, 2, null],
    ModMasterNode3: [29, 2, null],
    ModMasterNode4: [30, 2, null],
    ModMasterNode5: [31, 2, null],
    ModMasterNode6: [32, 2, null],
    ModMasterNode7: [33, 2, null],
    ModMasterNode8: [34, 2, null],
    ModMasterNode9: [35, 2, null],
    ModMasterNode10: [36, 2, null],
    PN532_UID_size: [37, 1, null],
    PN532_UID: [38, 10, null],
    Exttemp1: [39, 4, null],
    Exttemp2: [40, 4, null],
    Exttemp3: [41, 4, null],
    Exttemp4: [42, 4, null],
    DPS1_I2C_Temp: [43, 4, null],
    DPS1_I2C_Press: [44, 4, null],
    DPS2_I2C_Temp: [45, 4, null],
    DPS2_I2C_Press: [46, 4, null],
    DPS3_I2C_Temp: [47, 4, null],
    DPS3_I2C_Press: [48, 4, null],
    DPS4_I2C_Temp: [49, 4, null],
    DPS4_I2C_Press: [50, 4, null],
    GPS_Lat: [51, 4, null],
    GPS_Lng: [52, 4, null],
    GPS_sat: [53, 4, null],
    GPS_alt: [54, 4, null],
    GPS_kmph: [55, 4, null],
}

const mappingKeys = Object.getOwnPropertyNames(mapping);

exports.packetDecode = (data, offset = 0) => {
    const isHex = /^[0-9a-fA-F]+$/;

    if (typeof data !== 'string' || !isHex.test(data)) {
        throw new TypeError('Data format must be a hexadecimal string');
    }

    if (typeof offset !== 'number' || !(offset % 1 === 0)) {
        throw new TypeError('Offset format must be a positive integer number');
    }
    
    if (offset < 0 || offset > data.length) {
        throw new TypeError('Wrong offset value');
    }

    let json2sense = {};
    let i = offset;

    const vetor2sense = [];

    while (i < (data.length - 5)) {
        let id = parseInt(hexToDec(data.substring(i, i + 4)));
        i += 4;

        const key = mappingKeys.find(key => id === mapping[key][0]);
        const variavel = mapping[key];

        if ([3, 4, 10, 11, 12, 13, 14, 15, 16, 19, 20].includes(variavel[0])) {
            variavel[2] = data.substring(i, i + variavel[1] * 2);

            const teai = [
                parseInt(hexToDec(variavel[2].substring(0, 2))),
                parseInt(hexToDec(variavel[2].substring(2, 4))),
                parseInt(hexToDec(variavel[2].substring(4, 6))),
                parseInt(hexToDec(variavel[2].substring(6, 8)))
            ];

            variavel[2] = readFloatBE(teai).toFixed(4);
        } else {
            variavel[2] = hexToDec(data.substring(i, i + variavel[1] * 2));
        }

        i += variavel[1] * 2;
        vetor2sense.push(variavel);
        json2sense[key] = variavel[2];
    }

    return json2sense;
}