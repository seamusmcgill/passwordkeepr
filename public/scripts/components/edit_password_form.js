$(document).ready(function() {

  // Template for the edit password form
  const generateEditPasswordForm = (password) => {
    return `
      <form id="editPasswordForm">
      <p>Edit Password for ${password.service_name}</p>
          <input id="login_username" name="login_username" placeholder="${password.login_username}">
          <label for="login_password">Password:</label>
          <input id="login_password" type="password" name="login_password" placeholder="${password.login_password}">
          <label for="description">Description:</label>
          <input id="description" name="description" placeholder="What does the service do?">
          <button type="submit">Create</button>
      </form>
    `;
  };

  // Render the password form and append it to the section
  const renderEditPasswordForm = password => {
    $('section').empty();
    $('section').append(generateEditPasswordForm(password));
  };

  // Make a get request to retrieve password information then render password form
  const getPassword = (passwordID) => {
    $.ajax({
      method: 'GET',
      url: `/api/passwords/${passwordID}`,
    }).then((response) => {
      renderEditPasswordForm(response.passwords[0]);
    });
  };

  // On form submit send form data in an AJAX post request then render updated passwords table
  $(document).on('submit', "[id^='edit-form-password-']", (event) => {
    event.preventDefault();

    let elementID = ($(event.target).attr("id"));
    let passwordID = elementID.slice('edit-form-password-'.length);
    let password = {
      id: passwordID,
      login_username: $(`#password-${passwordID}-login_username`).val(),
      login_password: $(`#password-${passwordID}-login_password`).val(),
      description: $(`#password-${passwordID}-description`).val(),
    };

    editPassword(password)
      .then((res) => {
        getPasswords()
          .then((response) => {
            $('section').empty().append(passwordsTable.tableHTML);
            passwordsTable.renderPasswords(response);
          });
      });
  });


});
