const { packetDecode } = require("../index.js");

describe("packetDecode function", () => {
  it("should throw error 'Data format must be a hexadecimal string' when no parameters be passed", () => {
    try {
      packetDecode();
    } catch (e) {
      expect(e.message).toBe("Data format must be a hexadecimal string");
    }
  });

  it("should throw error 'Data format must be a hexadecimal string'", () => {
    try {
      packetDecode("AARB2mZm");
    } catch (e) {
      expect(e.message).toBe("Data format must be a hexadecimal string");
    }
  });

  it("should throw error 'Offset format must be a positive integer number'", () => {
    try {
      packetDecode("000441da6666", "20");
    } catch (e) {
      expect(e.message).toBe("Offset format must be a positive integer number");
    }
  });

  it("should throw error 'Wrong offset value' when invalid offset amount be passed", () => {
    try {
      packetDecode("000441da6666", 20);
    } catch (e) {
      expect(e.message).toBe("Wrong offset value");
    }
  });

  it("should throw error 'Wrong offset value' when negative offset value be passed", () => {
    try {
      packetDecode("000441da6666", -1);
    } catch (e) {
      expect(e.message).toBe("Wrong offset value");
    }
  });

  it("should return decoded object from data even without offset parameter", () => {
    expect(packetDecode("000441da6666")).toEqual({ temp: "27.3000" });
  });

  it("should return decoded object from data", () => {
    expect(packetDecode("000441da6666", 0)).toEqual({
      temp: "27.3000",
    });

    expect(packetDecode("0033c1a237ac", 0)).toEqual({
      GPS_Lat: "-20.2772",
    });
  });
});
