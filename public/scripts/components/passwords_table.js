$(document).ready(function() {

  const tableHTML = `
  <table>
    <tr>
      <th>Name</th>
      <th>URL</th>
      <th>Username</th>
      <th>Password</th>
      <th>Edit</th>
    </tr>
  </table>
  `;

  $('section').append(tableHTML);

  const getPasswords = () => {
    $.ajax({
      method: 'GET',
      url: '/api/passwords',
    }).then((response) => {
      renderPasswords(response);
    });
  };

  const renderPasswords = passwords => {
    const passwordsArray = passwords.passwords;
    for (let password of passwordsArray) {
      $('table').append(createPasswordElement(password));
    }
  };

  const createPasswordElement = password => {
    const passwordHTML = `
    <tr>
      <td>${password.service_name}</td>
      <td>${password.service_url} </td>
      <td>${password.login_username}</td>
      <td>${password.login_password}</td>
      <td>
        <a id="edit-password-${password.id}" href="#" role="button">Edit</a>
      <td>
    </tr>
    `;
    return passwordHTML;
  };

  getPasswords();



});
