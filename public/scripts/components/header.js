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
    console.log(user);
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
      <div>
        <a id="secureMode" href="#">Secure Mode OFF</a>
        <a id="newCategoryLink" href="#">+Category</a>
        <a id="newPasswordLink" href="#">+Password</a>
        <p>Logged in as ${user.name}, ${user.organization}</p>
        <a id="logOutButton" href="#">Logout</a>
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

  // $("header").on("click", '.my_reservations_button', function() {
  //   propertyListings.clearListings();
  //   getAllReservations()
  //     .then(function(json) {
  //       propertyListings.addProperties(json.reservations, true);
  //       views_manager.show('listings');
  //     })
  //     .catch(error => console.error(error));
  // });
  // $("header").on("click", '.my_listing_button', function() {
  //   propertyListings.clearListings();
  //   getAllListings(`owner_id=${currentUser.id}`)
  //     .then(function(json) {
  //       propertyListings.addProperties(json.properties);
  //       views_manager.show('listings');
  //   });
  // });

  // $("header").on("click", '.home', function() {
  //   propertyListings.clearListings();
  //   getAllListings()
  //     .then(function(json) {
  //       propertyListings.addProperties(json.properties);
  //       views_manager.show('listings');
  //   });
  // });

  // $('header').on('click', '.search_button', function() {
  //   views_manager.show('searchProperty');
  // });

  // $("header").on('click', '.login_button', () => {
  //   views_manager.show('logIn');
  // });
  // $("header").on('click', '.sign-up_button', () => {
  //   views_manager.show('signUp');
  // });
  // $("header").on('click', '.logout_button', () => {
  //   logOut().then(() => {
  //     header.update(null);
  //   });
  // });

  // $('header').on('click', '.create_listing_button', function() {
  //   views_manager.show('newProperty');
});
