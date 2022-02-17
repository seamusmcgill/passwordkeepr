/* eslint-disable no-undef */
$(document).ready(function() {

  window.header = {};

  const $navBar = $('nav');
  let currentUser = null;
  const updateHeader = (user) => {
    currentUser = user;
    $navBar.empty();

    let userLinks;

    if (!user) {
      userLinks = `
      <ul>
        <li><a id="homepage" href="#">PasswordKeepR</a></li>
      </ul>
      <ul>
        <li><a id="registerLink" href="#">Register</a></li>
      </div>
      `;
    } else {
      userLinks = `
      <ul>
        <li><a id="homepage" href="#">PasswordKeepR</a></li>
      </ul>
      <ul>
          <li><a id="secureMode" href="#">Secure Mode OFF</a></li>
          <li><a id="newCategoryLink" href="#">+Category</a></li>
          <li><a id="newPasswordLink" href="#">+Password</a></li>
          <li><a id="logOutButton" href="#">Logout</a></li>
      </ul>
      <ul>
          <li>Logged in as ${user.name}</li>
          <li><img src="${user.logo_url}"></li>
      </ul>
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
    getCurrentUser()
      .then((json) => {
        const data = {
          organizationID: json.user.organizationID,
        };
        getPasswords(data)
          .then((response) => {
            passwords.renderPasswords(response);
            viewsManager.show('passwords');
          });
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

  $('body').on('click', '#secureMode', (event => {
    event.preventDefault();
    // If secure mode is on
    if (window.isSecureMode) {
      $('.secure-mode-popup').remove();
      const authentication = `
      <div class="secure-mode-popup">
      <h4>TURN SECURE MODE OFF<h4>
      <p class="close-window">x</p>
      <input id="secure-mode-auth-input" name="secure-mode-auth-input" type="password" placeholder="Enter your password">
      <button id="secure-mode-off-auth-button" type=button>Verify</button>
      </div>
      `;
      $('body').append(authentication);
      return;
    }

    // toggle isSecureMode on window object
    window.isSecureMode ? window.isSecureMode = false : window.isSecureMode = true;

    const header = $('#secureMode').html();
    if (header.includes('OFF')) $('#secureMode').html(`Secure Mode ON`);
    else $('#secureMode').html(`Secure Mode OFF`);
    // render passwords table page
    getCurrentUser()
      .then((json) => {
        const data = {
          organizationID: json.user.organizationID,
        };
        getPasswords(data)
          .then((response) => {
            passwords.renderPasswords(response);
            viewsManager.show('passwords');
          });
      });



  }));

});
