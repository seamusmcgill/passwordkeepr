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

});
