const { hexToDec } = require("hex2dec");
const { readFloatBE } = require("ieee-float");

function isJson(str){
  try {
    var json = JSON.parse(str);
    return (typeof json === 'object' && typeof str === 'string');
  } catch (e) {
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
  ModMasterNode1_32_ID: [87, 4, null, "uint"],
  ModMasterNode2_32_ID: [88, 4, null, "uint"],
  ModMasterNode3_32_ID: [89, 4, null, "uint"],
  ModMasterNode4_32_ID: [90, 4, null, "uint"],
  ModMasterNode5_32_ID: [91, 4, null, "uint"],
  ModMasterNode6_32_ID: [92, 4, null, "uint"],
  ModMasterNode7_32_ID: [93, 4, null, "uint"],
  ModMasterNode8_32_ID: [94, 4, null, "uint"],
  ModMasterNode9_32_ID: [95, 4, null, "uint"],
  ModMasterNode10_32_ID: [96, 4, null, "uint"],
  PulseInp: [97, 8, null, "uint"],
  PulseInp1: [98, 8, null, "uint"],
  DI1_DM: [0x8000, 1, null, "uint"],
  DI2_DM: [0x8001, 1, null, "uint"],
  DI3_DM: [0x8002, 1, null, "uint"],
  DO1_DM: [0x8003, 1, null, "uint"],
  DO2_DM: [0x8004, 1, null, "uint"],
  DO3_DM: [0x8005, 1, null, "uint"],
  DO4_DM: [0x8006, 1, null, "uint"],
  DO5_DM: [0x8007, 1, null, "uint"],
  DO6_DM: [0x8008, 1, null, "uint"],
  DO7_DM: [0x8009, 1, null, "uint"],
  DO8_DM: [0x8010, 1, null, "uint"],
  DO9_DM: [0x8011, 1, null, "uint"],
  DO10_DM: [0x8012, 1, null, "uint"],
  DO11_DM: [0x8013, 1, null, "uint"],
  DO12_DM: [0x8014, 1, null, "uint"],
  DO13_DM: [0x8015, 1, null, "uint"],
  DO14_DM: [0x8016, 1, null, "uint"],
  AI1_DM: [0x8017, 4, "float"],
  AI2_DM: [0x8018, 4, "float"],
  AI3_DM: [0x8019, 4, "float"],
  AI4_DM: [0x8020, 4, "float"],
  AI5_DM: [0x8021, 4, "float"],
  AI6_DM: [0x8022, 4, "float"],
  Temp_DM: [0x8023, 4, "float"],
  Rate_DM: [0x8024, 4, "float"],
  Freq_DM: [0x8025, 4, "float"],
  TP_DM: [0x8026, 8, null, "uint"],
  Hist_DM: [0x8027, 8, null, "uint"],
  Total_DM: [0x8028, 8, null, "uint"]
};

exports.mappingKeys = Object.getOwnPropertyNames(this.mapping);

exports.packetDecode = (rawdata, offset = 0) => {

  let obj;
  let json = isJson(rawdata);

  var payload = "";

  if(json){

    obj = JSON.parse(rawdata);

    try {
          var aux = obj.data.uplink_message.frm_payload + ""
    }
    catch (err) {
      try {
        var aux = obj.params.payload + ""
      }
      catch (err) {
        try {
          var aux = obj.data + ""
        }
        catch (err) {
          console.error("Error: ", err)
        }
      }
    }


    let buff = new Buffer(aux, 'base64');
    
    for (var j = 0; j < buff.length; j++) {
          if (buff[j] <= 0x0F) payload += '0';

          payload += buff[j].toString(16);
        }
  }
  else{
      payload = rawdata;
  }

  const data = payload + ""

  const isHex = /^[0-9a-fA-F]+$/;

  if (typeof data !== "string" || !isHex.test(data)) {
    throw new TypeError("Data format must be a hexadecimal string");
  }

  if (typeof offset !== "number" || !(offset % 1 === 0)) {
    throw new TypeError("Offset format must be a positive integer number");
  }

  if (offset < 0 || offset > data.length) {
    throw new TypeError("Wrong offset value");
  }

  let json2sense = {};
  let i = offset;

  const vetor2sense = [];

  while (i < data.length - 5) {

    let id = parseInt(hexToDec(data.substring(i, i + 4))); //id precisa estar entre 0 e 99, a substring ta vindo errada no caso dado

    if(id){ //era (id < this.mappingKeys.length)
      i += 4;
      let key = this.mappingKeys.find((key) => id === this.mapping[key][0]);

      const variavel = this.mapping[key];
  
      if (variavel[3] === "float") {
        variavel[2] = data.substring(i, i + variavel[1] * 2);
  
        const teai = [
          parseInt(hexToDec(variavel[2].substring(0, 2))),
          parseInt(hexToDec(variavel[2].substring(2, 4))),
          parseInt(hexToDec(variavel[2].substring(4, 6))),
          parseInt(hexToDec(variavel[2].substring(6, 8))),
        ];
  
        variavel[2] = readFloatBE(teai).toFixed(4);
      } else {
        variavel[2] = hexToDec(data.substring(i, i + variavel[1] * 2));
      }
  
      i += variavel[1] * 2;
      vetor2sense.push(variavel);
      json2sense[key] = variavel[2];
    }else i++;
  }


  var decodedObj = { ...obj, json2sense }

  return decodedObj;
};
