$(document).ready(function() {

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

  $('#newPasswordLink').on('click', (event) => {
    $('section').empty();
    $('section').append(newPasswordHTML);
  });

  const $generatePasswordFields = $(`
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
