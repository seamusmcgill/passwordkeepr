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

  // Generate edit password form when edit button in passwords table is clicked
  $(document).on("click", "[id^='edit-password-']", (event) => {
    event.preventDefault();
    let elementID = ($(event.target).attr("id"));
    let passwordID = elementID.slice('edit-password-'.length);
    getPassword(passwordID);
  });


});
