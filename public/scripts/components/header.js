$(document).ready(function() {

  $('#secureMode').on('click', (event => {
    event.preventDefault();
    // toggle isSecureMode on window object
    window.isSecureMode ? window.isSecureMode = false : window.isSecureMode = true;

    const header = $('#secureMode').html();
    if (header.includes('OFF')) $('#secureMode').html(`Secure Mode ON`);
    else $('#secureMode').html(`Secure Mode OFF`);
    // render passwords table page
    // eslint-disable-next-line no-undef
    getPasswords()
      .then((response) => {
        passwords.renderPasswords(response);
        viewsManager.show('passwords');
      });
  }));

});
