$(document).ready(function() {

  const $tableHTML = `
  <table>
    <tr>
      <th>Name</th>
      <th>URL</th>
      <th>Category</th>
      <th>Username</th>
      <th>Password</th>
      <th>Edit</th>
    </tr>
  </table>
  `;

  $('#homepage').on('click', (event) => {
    $('section').empty();
    $('section').append($tableHTML);
    window.passwordsTable = {};
    window.passwordsTable.tableHTML = $tableHTML;

    const renderPasswords = passwords => {
      const passwordsArray = passwords.passwords;
      for (let password of passwordsArray) {
        $('table').append(createPasswordElement(password));
      }
    };

    window.passwordsTable.renderPasswords = renderPasswords;

    const createPasswordElement = password => {
      const passwordHTML = `
      <tr>
        <td>${password.service_name}</td>
        <td>
          <a href="${password.service_url}">${password.service_url}</a>
        </td>
        <td><a class="category-${password.category_id}" href="#">${password.category_name}</a></td>
        <td>${password.login_username}</td>
        <td>${password.login_password}</td>
        <td>
          <a id="edit-password-${password.id}" href="#">Edit</a>
        </td>
      </tr>
      `;
      return passwordHTML;
    };

    window.passwordsTable.createPasswordElement = createPasswordElement;

    getPasswords()
      .then((response) => {
        renderPasswords(response);
      });
  });




});
