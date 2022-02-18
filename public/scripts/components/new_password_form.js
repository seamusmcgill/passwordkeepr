/* eslint-disable camelcase */
$(document).ready(function() {

  // Create newPasswordForm object in window
  window.newPasswordForm = {};

  const $newPasswordHTML = $(`
  <div class="createPasswordNew">
    <h1>Create password</h1>
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
  `);

  // Create window object for form
  window.$newPasswordHTML = $newPasswordHTML;

  const $generatePasswordFields = $(`
        <form id="generatePasswordForm">
          <input id="generatePasswordLength" name="generatePasswordLength" type="number" placeholder="Length">
          <input id="generatePasswordIsUppercase" type="checkbox" name="generatePasswordIsUppercase" value="true">
          <label for="generatePasswordIsUppercase">Uppercase?</label>
          <input id="generatePasswordIsSpecialCharacter" type="checkbox" name="generatePasswordIsSpecialCharacter" value="true">
          <label for="generatePasswordIsSpecialCharacter">Special Character?</label>
          <button id="generatePasswordSubmit" type="button">Generate</button>
        </form>
      `);



  $(document).on('click', '#toggleGenerate', (event => {

    $($generatePasswordFields).insertAfter('#toggleGenerate');
    $('#toggleGenerate').hide();

  }));

  $(document).on('click', '#generatePasswordSubmit', (event => {
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



  $(document).on('submit', '#newPasswordForm', (event => {
    event.preventDefault();

    const data = {
      service_name: $('#service_name').val(),
      service_url: $('#service_url').val(),
      login_username: $('#login_username').val(),
      login_password: $('#login_password').val(),
      description: $('#description').val()
    };

    // eslint-disable-next-line no-undef
    postPassword(data)
      .then((res) => {
        // eslint-disable-next-line no-undef
        getCurrentUser()
          .then((json) => {
            const data = {
              organizationID: json.user.organizationID,
            };
            getPasswords(data)
              .then((response) => {
                passwords.renderPasswords(response);
                viewsManager.show('passwords');
                displayCategories();
              });
          });
      });

  }));

});
