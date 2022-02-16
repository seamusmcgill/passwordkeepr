// // Client facing scripts here
// function myFunction() {   /* Get the text field */
//   var copyText = document.getElementById("myInput");    /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */    /* Copy the text inside the text field */
//   navigator.clipboard.writeText(copyText.value);      /* Alert the copied text */
//   return  copyText.value;
// }

$(document).ready(function() {

  const copyToClipboard = (elementID) => {
    navigator.clipboard.writeText($(elementID).val());
    return $(elementID).val();
  };

  $('body').on('click', '#copyTextButton', (event => {
    copyToClipboard('#myInput');
  }));

  const generatePassword = (length, hasCapitals, hasSpecialCharacters) => {

    const specialChars = ['!', '@', '#', '$', '%', '&', '*'];
    let password = '';
    // Start with a guaranteed number - very small chance the rest of the script produces a password that is empty of numbers
    password += Math.floor(Math.random() * 10);
    // Create a random string at least 255 characters long
    for (let i = 0; i < 25; i++) {
      password += Math.random().toString(36).slice(2);
    }
    // Extract only the length the user wants
    password = password.slice(0, length);
    // If user wants capitals, toggle some non-number chars to uppercase
    if (hasCapitals) {
      let output = '';
      for (let char of password) {
        const toggle = Math.floor(Math.random() * 3);
        if (isNaN(char) && toggle === 1) {
          output += char.toUpperCase();
          continue;
        }
        output += char;
      }
      password = output;
    }
    // If user wants special characters, toggle some non-number and non-capitalized chars to special characters
    if (hasSpecialCharacters) {
      let output = '';
      for (let char of password) {
        const toggle = Math.floor(Math.random() * 2);
        if (isNaN(char) && toggle === 1 && char.toUpperCase() !== char) {
          output += specialChars[Math.floor(Math.random() * 7)];
          continue;
        }
        output += char;
      }
      password = output;
    }

    return password;

  };

});
