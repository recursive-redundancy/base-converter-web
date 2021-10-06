import base from 'dpm-base';

const doConversion = (value, fromBase, toBase) => {
    console.log('doConversion');

    let mod = null,
      // the conversion function to perform
      conversion = null,
      // the function to perform input validation
      validator = null;

    switch (fromBase) {
      case 'bin':
        mod = base.binary;
        break;
      case 'oct':
        mod = base.octal;
        break;
      case 'dec':
        mod = base.decimal;
        break;
      case 'hex':
        mod = base.hex;
        break;
    }

    validator = mod.isValid;

    switch (toBase) {
      case 'bin':
        conversion = mod.toBin;
        break;
      case 'oct':
        conversion = mod.toOct;
        break;
      case 'dec':
        conversion = mod.toDec;
        break;
      case 'hex':
        conversion = mod.toHex;
        break;
    }

    const result = conversion(value);

    return result;
};

export {doConversion};