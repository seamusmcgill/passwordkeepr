/* eslint-disable no-undef */
$(document).ready(function() {

  $('body').on('click', '#secureMode', (event => {
    event.preventDefault();
    // toggle isSecureMode on window object
    window.isSecureMode ? window.isSecureMode = false : window.isSecureMode = true;

    const header = $('#secureMode').html();
    if (header.includes('OFF')) $('#secureMode').html(`Secure Mode ON`);
    else $('#secureMode').html(`Secure Mode OFF`);
    // render passwords table page
    getPasswords()
      .then((response) => {
        passwords.renderPasswords(response);
        viewsManager.show('passwords');
      });
  }));

  window.header = {};

  const $navBar = $('#navbar');
  let currentUser = null;
  const updateHeader = (user) => {
    currentUser = user;
    $navBar.empty();

    let userLinks;

    if (!user) {
      userLinks = `
      <a id="homepage" href="#">PasswordKeepR</a>
      <div>
        <a id="registerLink" href="#">Register</a>
      </div>
      `;
    } else {
      userLinks = `
      <a id="homepage" href="#">PasswordKeepR</a>
      <div id="nav-right">
        <div>
          <a id="secureMode" href="#">Secure Mode OFF</a>
          <a id="newCategoryLink" href="#">+Category</a>
          <a id="newPasswordLink" href="#">+Password</a>
          <a id="logOutButton" href="#">Logout</a>
        </div>
        <div>
          <p>Logged in as ${user.name}</p>
          <p>${user.organization}</p>
        </div>
      </div>
      `;
    }

    $navBar.append(userLinks);
  };

  window.$navBar = $navBar;
  window.header.update = updateHeader;

  getCurrentUser()
    .then((json) => {
      updateHeader(json.user);
    });

  $navBar.on('click', '#homepage', (event) => {
    event.preventDefault();

    getPasswords()
      .then((response) => {
        passwords.renderPasswords(response);
        viewsManager.show('passwords');
      });
  });

  $navBar.on('click', '#newCategoryLink', (event) => {
    event.preventDefault();
    viewsManager.show('newCategory');
  });

  $navBar.on('click', '#newPasswordLink', (event) => {
    event.preventDefault();
    viewsManager.show('newPassword');
  });

  $navBar.on("click", "#logOutButton", () => {
    logOut().then(() => {
      updateHeader(null);
      viewsManager.show('login');
    });
  });

  $navBar.on('click', '#registerLink', (event) => {
    event.preventDefault();

    getOrganizations()
      .then((res) => {
        viewsManager.show('registration');
      });
  });

});
