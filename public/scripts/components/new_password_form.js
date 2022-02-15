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
        <input id="login_password" type="password" name="login_password" placeholder="Enter login password">
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

    const postPassword = (data) => {
      $.ajax({
        method: 'POST',
        url: '/api/passwords',
        data
      });
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

});
