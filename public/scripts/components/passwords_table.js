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
      <td>
        <a href="${password.service_url}">${password.service_name}</a>
      </td>
      <td><a class="category-${password.category_id}" href="#">${password.category_name || ""}</a></td>
      <td>${password.login_username}</td>
      <td>${password.login_password}</td>
      <td>
        <a id="edit-password-${password.id}" href="#">Edit</a>
      </td>
      <td><i class="fa-solid fa-clone"></i></td>
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
    if (window.isSecureMode && $(`#password-entry-${passwordID}`).html().includes('●')) return;
    // eslint-disable-next-line no-undef
    copyToClipboard(`#password-entry-${passwordID}`);
  }));

  // SECURE MODE
  $('body').on('click', "[id^='strong-password-']", (event => {
    $('.container').remove();
    const elementID = $(event.target).attr("id");
    const passwordID = elementID.slice('strong-password-'.length);

    const authentication = `
    <div class="container">
    <p class="close-window">x</p>
    <input id="secure-mode-auth-input" name="secure-mode-auth-input" type="password" placeholder="Enter your password">
    <button id="secure-mode-auth-button-${passwordID}" type=button>Verify</button>
    </div>
    `;
    $('body').append(authentication);
  }));

  $('body').on('click', "[id^='secure-mode-auth-button']", (event => {
    // retrieve the user-entered password
    const password = $('#secure-mode-auth-input').val();
    // retrieve the logged in user's email
    getCurrentUser()
      .then((json) => {
        const data = {
          email: json.user.email,
          password: password
        };
        // verify the user (via users.js and network.js), including the email and password to be tested as a param object
        verifyUser(data)
          .then(res => {
            // if it's not a match according to the DB, hide the window and do not show the password
            if (!res) {
              $('.container').remove();
              return;
            }
            $('.container').remove();
            // should probably move this to a function, it's a mess
            // if it is a match, reveal the password
            const elementID = $(event.target).attr("id");
            const passwordID = elementID.slice('secure-mode-auth-button-'.length);
            getPassword(passwordID)
              .then((response) => {
                let password = response.passwords[0];
                $(`#password-entry-${passwordID}`).html(`${password.login_password}`);
              });
          });
      });
  }));

  $('body').on('click', '.close-window', (event => {
    $('.container').remove();
  }));

});
