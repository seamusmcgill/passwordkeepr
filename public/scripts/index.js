$(() => {
  getCurrentUser()
    .then((json) => {
      if (json.user) {
        const data = {
          organizationID: json.user.organizationID,
        };
        getPasswords(data)
          .then((response) => {
            passwords.renderPasswords(response);
            viewsManager.show('passwords');
          });
      } else {
        viewsManager.show('login');
      }
    });
});
