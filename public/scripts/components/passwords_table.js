$(document).ready(function() {

  // Create window.passwords object
  window.passwords = {};

  const $passwordsTable = $(`
  <table>
  </table>
  `);

  // Make passwords table a jQuery object
  window.$passwordsTable = $passwordsTable;

  const $tableHeader = $(`
    <tr id="table-header">
      <th>Name</th>
      <th>URL</th>
      <th>Category</th>
      <th>Username</th>
      <th>Password</th>
      <th>Edit</th>
      <th>Copy</th>
    </tr>
  `);

  // Clear what was in passwords table before rendering
  const renderPasswords = passwords => {
    $passwordsTable.empty();
    $tableHeader.appendTo($passwordsTable);
    const passwordsArray = passwords.passwords;
    for (let password of passwordsArray) {
      $passwordsTable.append(createPasswordElement(password));
    }
  };

  // Make function accessible by other files through window object
  window.passwords.renderPasswords = renderPasswords;

  const createPasswordElement = password => {
    const passwordHTML = `
    <tr>
      <td>${password.service_name}</td>
      <td>
        <a href="${password.service_url}">${password.service_url}</a>
      </td>
      <td><a class="category-${password.category_id}" href="#">${password.category_name || ""}</a></td>
      <td>${password.login_username}</td>
      <td id="password-entry-${password.id}">${password.login_password}</td>
      <td>
        <a id="edit-password-${password.id}" href="#">Edit</a>
      </td>
      <td id="copy-password-${password.id}"><i class="fa-solid fa-clone"></i></td>
    </tr>
    `;
    return passwordHTML;
  };

  window.passwords.createPasswordElement = createPasswordElement;

  $('#homepage').on('click', (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-undef
    getPasswords()
      .then((response) => {
        renderPasswords(response);
        // eslint-disable-next-line no-undef
        viewsManager.show('passwords');
      });
  });

  $('body').on('click', "[id^='copy-password-']", (event => {
    let elementID;
    if (!($(event.target).attr("id"))) {
      elementID = ($(event.target).parent().attr("id"));
    } else {
      elementID = ($(event.target).attr("id"));
    }
    const passwordID = elementID.slice('copy-password-'.length);
    // eslint-disable-next-line no-undef
    copyToClipboard(`#password-entry-${passwordID}`);
  }));

});
