$(document).ready(function() {

  $('section').empty();

  const newPasswordHTML = `
  <div>
    <h1>Create password</h1>
  </div>
  <div>
    <form id="newPasswordForm">
        <label for="service_name">Name:</label>
        <input id="service_name" name="service_name" placeholder="Enter name of service">
        <label for="service_url">URL:</label>
        <input id="service_url" name="service_url" placeholder="Enter URL of service">
        <label for="login_username">Username:</label>
        <input id="login_username" name="login_username" placeholder="Enter login username">
        <label for="login_password">Password:</label>
        <input id="login_password" name="login_password" placeholder="Enter login password">
        <button id="toggleGenerate" type="button">Generate</button>
        <label for="description">Description:</label>
        <input id="description" name="description" placeholder="What does the service do?">
        <button type="submit">Create</button>
    </form>
  </div>
  `;

  $('section').append(newPasswordHTML);

  $('#newPasswordForm').on('submit', (event => {
    event.preventDefault();

    const data = {
      service_name: $('#service_name').val(),
      service_url: $('#service_url').val(),
      login_username: $('#login_username').val(),
      login_password: $('#login_password').val(),
      description: $('#description').val()
    };

    postPassword(data)
      .then((response) => {
        console.log(response);
      });


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

  $('#toggleGenerate').on('click', (event => {
    const generatePasswordFields = `
      <form id="generatePasswordForm">
        <input id="generatePasswordLength" name="generatePasswordLength" type="number" placeholder="Length">
        <input id="generatePasswordIsUppercase" type="checkbox" name="generatePasswordIsUppercase" value="true">
        <label for="generatePasswordIsUppercase">Uppercase?</label>
        <input id="generatePasswordIsSpecialCharacter" type="checkbox" name="generatePasswordIsSpecialCharacter" value="true">
        <label for="generatePasswordIsSpecialCharacter">Special Character?</label>
        <button id="generatePasswordSubmit" type="button">Generate</button>
      </form>
    `;

    $(generatePasswordFields).insertAfter('#toggleGenerate');
    $('#toggleGenerate').hide();

  }));

  $('#newPasswordForm').on('click', '#generatePasswordSubmit', (event => {
    const length = Number($('#generatePasswordLength').val());
    let isUppercase;
    if ($('#generatePasswordIsUppercase').is(':checked')) {
      isUppercase = true;
    } else {
      isUppercase = false;
    }
    let isSpecial;
    if ($('#generatePasswordIsSpecialCharacter').is(':checked')) {
      isSpecial = true;
    } else {
      isSpecial = false;
    }

    $('#login_password').val(generatePassword(length, isUppercase, isSpecial));

    $('#toggleGenerate').show();
    $('#generatePasswordForm').remove();

  }));

});
