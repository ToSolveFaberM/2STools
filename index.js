const { hexToDec } = require("hex2dec");
const { readFloatBE } = require("ieee-float");

function isJson(str) {
    try {
        var obg = JSON.parse(str);
        return (typeof obg === 'object' && typeof str === 'string');
    } catch (err) {
        return false;
    }
}

// Sensors list 
exports.mapping = {
    ToSenseID: [0, 2, null, "uint"],
    counter: [1, 2, null, "uint"],
    epoch: [2, 4, null, "uint"],
    BatteryMon: [3, 4, null, "float"],
    temp: [4, 4, null, "float"],
    AI1: [5, 3, null, "uint"],
    AI2: [6, 3, null, "uint"],
    EAI3: [7, 3, null, "uint"],
    EAI4: [8, 3, null, "uint"],
    EAI5: [9, 3, null, "uint"],
    AI1_f: [10, 4, null, "float"],
    AI2_f: [11, 4, null, "float"],
    EAI3_f: [12, 4, null, "float"],
    EAI4_f: [13, 4, null, "float"],
    EAI5_f: [14, 4, null, "float"],
    HTU21DTemp: [15, 4, null, "float"],
    HTU21DHum: [16, 4, null, "float"],
    RC522_UID_size: [17, 1, null, "uint"],
    RC522_UID: [18, 10, null, "uint"],
    angleX_f: [19, 4, null, "float"],
    angleY_f: [20, 4, null, "float"],
    Dilnp0: [21, 2, null, "uint"],
    Pullnp0: [22, 8, null, "uint"],
    FreInp0: [23, 2, null, "uint"],
    Vec_en_at_di: [24, 3, null, "uint"],
    Vec_en_re_in: [25, 3, null, "uint"],
    Vec_en_re_ca: [26, 3, null, "uint"],
    ModMasterNode1: [27, 2, null, "uint"],
    ModMasterNode2: [28, 2, null, "uint"],
    ModMasterNode3: [29, 2, null, "uint"],
    ModMasterNode4: [30, 2, null, "uint"],
    ModMasterNode5: [31, 2, null, "uint"],
    ModMasterNode6: [32, 2, null, "uint"],
    ModMasterNode7: [33, 2, null, "uint"],
    ModMasterNode8: [34, 2, null, "uint"],
    ModMasterNode9: [35, 2, null, "uint"],
    ModMasterNode10: [36, 2, null, "uint"],
    PN532_UID_size: [37, 1, null, "uint"],
    PN532_UID: [38, 10, null, "uint"],
    Exttemp1: [39, 4, null, "float"],
    Exttemp2: [40, 4, null, "float"],
    Exttemp3: [41, 4, null, "float"],
    Exttemp4: [42, 4, null, "float"],
    DPS1_I2C_Temp: [43, 4, null, "float"],
    DPS1_I2C_Press: [44, 4, null, "float"],
    DPS2_I2C_Temp: [45, 4, null, "float"],
    DPS2_I2C_Press: [46, 4, null, "float"],
    DPS3_I2C_Temp: [47, 4, null, "float"],
    DPS3_I2C_Press: [48, 4, null, "float"],
    DPS4_I2C_Temp: [49, 4, null, "float"],
    DPS4_I2C_Press: [50, 4, null, "float"],
    GPS_Lat: [51, 4, null, "float"],
    GPS_Lng: [52, 4, null, "float"],
    GPS_sat: [53, 1, null, "uint"],
    GPS_alt: [54, 4, null, "float"],
    GPS_kmph: [55, 4, null, "float"],
    Dilnp1: [56, 2, null, "uint"],
    Pullnp1: [57, 8, null, "uint"],
    FreInp1: [58, 2, null, "uint"],
    IntInp0: [59, 4, null, "uint"],
    IntInp1: [60, 4, null, "uint"],
    MPM_temp: [61, 4, null, "float"],
    MPM_press: [62, 4, null, "float"],
    APDS_Red: [63, 2, null, "uint"],
    APDS_Blue: [64, 2, null, "uint"],
    APDS_Green: [65, 2, null, "uint"],
    APDS_Clear: [66, 2, null, "uint"],
    MLX_OBJTemp: [67, 4, null, "float"],
    MLX_AMBTemp: [68, 4, null, "float"],
    resetCause: [69, 1, null, "uint"],
    vibr_peak_freq: [70, 4, null, "float"],
    vibr_peak_accel: [71, 4, null, "float"],
    vibr_accel_rms: [72, 4, null, "float"],
    vibr_vel_rms: [73, 4, null, "float"],
    vibr_disp_rms: [74, 4, null, "float"],
    LIDARLiteDist: [75, 2, null, "uint"],
    kx_ax: [76, 4, null, "float"],
    kx_ay: [77, 4, null, "float"],
    kx_az: [78, 4, null, "float"],
    kx_vibr_peak_freq: [79, 4, null, "float"],
    kx_vibr_peak_accel: [80, 4, null, "float"],
    kx_vibr_accel_rms: [81, 4, null, "float"],
    kx_vibr_vel_rms: [82, 4, null, "float"],
    kx_vibr_disp_rms: [83, 4, null, "float"],
    nansenID: [84, 5, null, "uint"],
    Vec_en_at_rev: [85, 3, null, "uint"],
    dsm_concentration: [86, 4, null, "float"],
    ModMasterNode1_32: [87, 4, null, "uint"],
    ModMasterNode2_32: [88, 4, null, "uint"],
    ModMasterNode3_32: [89, 4, null, "uint"],
    ModMasterNode4_32: [90, 4, null, "uint"],
    ModMasterNode5_32: [91, 4, null, "uint"],
    ModMasterNode6_32: [92, 4, null, "uint"],
    ModMasterNode7_32: [93, 4, null, "uint"],
    ModMasterNode8_32: [94, 4, null, "uint"],
    ModMasterNode9_32: [95, 4, null, "uint"],
    ModMasterNode10_3D: [96, 4, null, "uint"],
    PulseInp: [97, 8, null, "uint"],
    PulseInp1: [98, 8, null, "uint"],
    ModMasterNode1Signed: [99, 2, null, "int16"],
    ModMasterNode2Signed: [100, 2, null, "int16"],
    ModMasterNode3Signed: [101, 2, null, "int16"],
    ModMasterNode4Signed: [102, 2, null, "int16"],
    ModMasterNode5Signed: [103, 2, null, "int16"],
    ModMasterNode6Signed: [104, 2, null, "int16"],
    ModMasterNode7Signed: [105, 2, null, "int16"],
    ModMasterNode8Signed: [106, 2, null, "int16"],
    ModMasterNode9Signed: [107, 2, null, "int16"],
    ModMasterNode10Signed: [108, 2, null, "int16"],
    ModMasterNode1Signed_32: [109, 4, null, "int32"],
    ModMasterNode2Signed_32: [110, 4, null, "int32"],
    ModMasterNode3Signed_32: [111, 4, null, "int32"],
    ModMasterNode4Signed_32: [112, 4, null, "int32"],
    ModMasterNode5Signed_32: [113, 4, null, "int32"],
    ModMasterNode6Signed_32: [114, 4, null, "int32"],
    ModMasterNode7Signed_32: [115, 4, null, "int32"],
    ModMasterNode8Signed_32: [116, 4, null, "int32"],
    ModMasterNode9Signed_32: [117, 4, null, "int32"],
    ModMasterNode10Signed_32: [118, 4, null, "int32"],
    ModMasterNode1Float_32: [119, 4, null, "int32"],
    ModMasterNode2Float_32: [120, 4, null, "int32"],
    ModMasterNode3Float_32: [121, 4, null, "int32"],
    ModMasterNode4Float_32: [122, 4, null, "int32"],
    ModMasterNode5Float_32: [123, 4, null, "int32"],
    ModMasterNode6Float_32: [124, 4, null, "int32"],
    ModMasterNode7Float_32: [125, 4, null, "int32"],
    ModMasterNode8Float_32: [126, 4, null, "int32"],
    ModMasterNode9Float_32: [127, 4, null, "int32"],
    ModMasterNode10Float_32: [128, 4, null, "int32"],
    DI1_DM: [0x8000 + 0, 1, null, "uint"],
    DI2_DM: [0x8000 + 1, 1, null, "uint"],
    DI3_DM: [0x8000 + 2, 1, null, "uint"],
    DO1_DM: [0x8000 + 3, 1, null, "uint"],
    DO2_DM: [0x8000 + 4, 1, null, "uint"],
    DO3_DM: [0x8000 + 5, 1, null, "uint"],
    DO4_DM: [0x8000 + 6, 1, null, "uint"],
    DO5_DM: [0x8000 + 7, 1, null, "uint"],
    DO6_DM: [0x8000 + 8, 1, null, "uint"],
    DO7_DM: [0x8000 + 9, 1, null, "uint"],
    DO8_DM: [0x8000 + 10, 1, null, "uint"],
    DO9_DM: [0x8000 + 11, 1, null, "uint"],
    DO10_DM: [0x8000 + 12, 1, null, "uint"],
    DO11_DM: [0x8000 + 13, 1, null, "uint"],
    DO12_DM: [0x8000 + 14, 1, null, "uint"],
    DO13_DM: [0x8000 + 15, 1, null, "uint"],
    DO14_DM: [0x8000 + 16, 1, null, "uint"],
    AI1_DM: [0x8000 + 17, 4, null, "float"],
    AI2_DM: [0x8000 + 18, 4, null, "float"],
    AI3_DM: [0x8000 + 19, 4, null, "float"],
    AI4_DM: [0x8000 + 20, 4, null, "float"],
    AI5_DM: [0x8000 + 21, 4, null, "float"],
    AI6_DM: [0x8000 + 22, 4, null, "float"],
    Temp_DM: [0x8000 + 23, 4, null, "float"],
    Rate_DM: [0x8000 + 24, 4, null, "float"],
    Freq_DM: [0x8000 + 25, 4, null, "float"],
    TP_DM: [0x8000 + 26, 8, null, "uint"],
    Hist_DM: [0x8000 + 27, 8, null, "uint"],
    Total_DM: [0x8000 + 28, 8, null, "uint"]
};

exports.mappingKeys = Object.getOwnPropertyNames(this.mapping);

exports.packetDecode = (rawdata, offset = 0) => {
    var payload = "";

    if (isJson(rawdata.toString().trim())) {
        var obj = JSON.parse(rawdata);
        if (obj.hasOwnProperty('json2sense')) {
            return obj;
        }
        var aux;
        if (obj.hasOwnProperty('data')) {
            if (obj.data.hasOwnProperty('uplink_message')) {
                if (obj.data.uplink_message.hasOwnProperty('frm_payload')) {
                    aux = obj.data.uplink_message.frm_payload + "";
                }
            } else {
                aux = obj.data + "";
            }
        } else if (obj.hasOwnProperty('params')) {
            if (obj.params.hasOwnProperty('payload')) {
                aux = obj.params.payload + "";
            }
        } else {
            throw 'Can not find rawdata into received JSON';
        }

        let buff = new Buffer(aux, 'base64');

        for (var j = 0; j < buff.length; j++) {
            if (buff[j] <= 0x0F)
                payload += '0';

            payload += buff[j].toString(16);
        }
    }
    else {
        payload = rawdata;
    }

    const data = (payload.toString()).trim()

    const isHex = /^[0-9a-fA-F]+$/;

    if (typeof data !== "string" || !isHex.test(data)) {
        throw "Data format must be a hexadecimal string";
    }

    if (typeof offset !== "number" || !(offset % 1 === 0)) {
        throw "Offset format must be a positive integer number";
    }

    if (offset < 0 || offset > data.length) {
        throw "Wrong offset value";
    }

    let json2sense = {};
    let i = offset;

    const vetor2sense = [];

    while (i < data.length - 5) {

        let id = parseInt(hexToDec(data.substring(i, i + 4))); //id precisa estar entre 0 e 99, a substring ta vindo errada no caso dado

        if (id < this.mappingKeys.length || id >= 0x8000) {
            i += 4;
            let key = this.mappingKeys.find((key) => id === this.mapping[key][0]);

            const variavel = this.mapping[key];

            switch (variavel[3]) {
                case "float":
                    variavel[2] = data.substring(i, i + variavel[1] * 2);

                    const teai = [
                        parseInt(hexToDec(variavel[2].substring(0, 2))),
                        parseInt(hexToDec(variavel[2].substring(2, 4))),
                        parseInt(hexToDec(variavel[2].substring(4, 6))),
                        parseInt(hexToDec(variavel[2].substring(6, 8))),
                    ];

                    variavel[2] = readFloatBE(teai).toFixed(4);

                    break;
                case "uint":
                    variavel[2] = hexToDec(data.substring(i, i + variavel[1] * 2));

                    break;
                case "int16":
                    variavel[2] = (hexToDec(data.substring(i, i + variavel[1] * 2)) << 16) >> 16;

                    break;
                case "int32":
                    variavel[2] = (hexToDec(data.substring(i, i + variavel[1] * 2)) << 32) >> 32;

                    break;
                default:
                    break;
            }

            i += variavel[1] * 2;
            vetor2sense.push(variavel);
            json2sense[key] = variavel[2];
        } else i++;
    }


    var decodedObj = { ...obj, json2sense }

    return decodedObj;
};
