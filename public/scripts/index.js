$(() => {
  getCurrentUser()
    .then((json) => {
      if (json.user) {
        getPasswords()
          .then((response) => {
            passwords.renderPasswords(response);
            viewsManager.show('passwords');
          });
      } else {
        viewsManager.show('login');
      }
    });
});
