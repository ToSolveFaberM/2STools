const { packetDecode } = require('../index.js');

describe("packetDecode function", () => {
  const invalidDataFormat = 'AARB2mZm';
  const invalidOffsetFormat = '20';
  const invalidOffsetAmount = 20;
  const invalidOffsetNegativeAmount = -1;
  const validData = '000441da6666';
  const validOffset = 0;

  it('should throw error \'Data format must be a hexadecimal string\' when no parameters be passed', () => {
    try {
      packetDecode();
    } catch (e) {
      expect(e.message).toBe('Data format must be a hexadecimal string');
    }
  });

  it('should throw error \'Data format must be a hexadecimal string\'', () => {
    try {
      packetDecode(invalidDataFormat);
    } catch (e) {
      expect(e.message).toBe('Data format must be a hexadecimal string');
    }
  });

  it('should throw error \'Offset format must be a positive integer number\'', () => {
    try {
      packetDecode(validData, invalidOffsetFormat);
    } catch (e) {
      expect(e.message).toBe('Offset format must be a positive integer number');
    }
  });

  it('should throw error \'Wrong offset value\' when invalid offset amount be passed', () => {
    try {
      packetDecode(validData, invalidOffsetAmount);
    } catch (e) {
      expect(e.message).toBe('Wrong offset value');
    }
  });

  it('should throw error \'Wrong offset value\' when negative offset value be passed', () => {
    try {
      packetDecode(validData, invalidOffsetNegativeAmount);
    } catch (e) {
      expect(e.message).toBe('Wrong offset value');
    }
  });

  it('should return decoded object from data even without offset parameter', () => {
    expect(packetDecode(validData)).toEqual({ temp: '27.3000' });
  });

  it('should return decoded object from data', () => {
    expect(packetDecode(validData, validOffset)).toEqual({ temp: '27.3000' });
  });
});