$(() => {
  const $registrationForm = $(`
  <form id="registration-form" class="registration-form">
    <div class="registration-title>
      <p>Register</p>
    </div>
    <div class="registration-fields">
      <input type="text" name="full_name" id="full_name" placeholder="Full Name">
      <select name="organization" id="organization-select">
      </select>
      <input type="email" name="email" id="email" placeholder="Email">
      <input type="password" name="password" id="password" placeholder="Password">
      <button>Register</button>
    </div>
  </form>
  `);

  window.$registrationForm = $registrationForm;

  const createOrganizationsSelect = (organizations) => {
    const organizationsArray = organizations.organizations;
    for (const organization of organizationsArray) {
      let $organizationOption = $(`<option value='${organization.id}'>${organization.name}</option>`);
      $('#organization-select').append($organizationOption);
    }
  };

  $navBar.on('click', '#registerLink', (event) => {
    event.preventDefault();

    viewsManager.show('registration');

    getOrganizations()
      .then((res) => {
        createOrganizationsSelect(res);
        viewsManager.show('registration');
      });
  });

  $(document).on("submit", "#registration-form", event => {
    event.preventDefault();

    const data = {
      full_name: $('#full_name').val(),
      organization_id: $('#organization-select').val(),
      email: $('#email').val(),
      password: $('#password').val(),
    };

    createUser(data)
      .then(res => {
        header.update(res.user);
        getPasswords()
          .then((response) => {
            passwords.renderPasswords(response);
            viewsManager.show('passwords');
          });
      });
  });

});
