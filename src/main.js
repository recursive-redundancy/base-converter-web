
/*
* Main module
* The entry point for the base convert application
* contains UI/View logic
*/

// css styles
require('./css/main.scss');

const base = require('dpm-base');
const $ = require('jquery');


/*
* Keys value set when selections are made for to and from bases
* and used to decide which conversion logic to apply
*/
let selections = {
  'sel-from': 'bin',
  'sel-to': 'dec'
} 


$(document).ready(() => {
  /*
  * Detect when base to convert from selection changed
  * and store the value
  */
  $('select').change((event) => {
    selections[event.target.id] = event.target.value;
  });

  /*
  * Convert button
  * Perform conversion when button clicked
  */
 $('#btn-convert').click((event) => {
    // the module containing the conversion logic
    let mod = null,
      // the conversion function to perform
      conversion = null,
      // the function to perform input validation
      validator = null;

    switch (selections['sel-from']) {
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

    switch (selections['sel-to']) {
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

    doConversion(conversion, validator);
  });
  
}); 

/*
* Function performs whatever base conversion 
* (and respective input validation) has been selected by user
* arg1 is reference to a conversion function
* arg2 is reference to a input validation function
*/
function doConversion(conversion, validator) {
  let val = $('#txt-input').val();
  $('#txt-output').val('');

  // perform form validation
  if (!validator(val)) {
    $('#alert-message').text('Invalid Input!');
    $('#alert').stop(false, true).fadeIn(0).fadeOut(1500);
    return;
  }

  $('#alert-message').text('Converting...');
  $('#alert').stop(false, true).fadeIn(0);

    // setTimeout for conversion call
    // so DOM updates
    window.setTimeout(() => {
      $('#txt-output').val(conversion(val));
      $('#alert').stop(false, true).fadeOut(250);
    }, 150);

}