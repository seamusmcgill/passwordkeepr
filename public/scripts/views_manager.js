/* eslint-disable no-undef */
$(() => {

  window.viewsManager = {};

  window.viewsManager.show = function(item) {
    $('main').empty();

    switch (item) {
    case 'passwords':
      $addPasswordButton.appendTo('main');
      $passwordsTable.appendTo('main');
      break;
    case 'newPassword':
      $newPasswordHTML.appendTo('main');
      break;
    case 'editPassword':
      $editPasswordForm.appendTo('main');
      break;
    case 'newCategory':
      $newCategoryHTML.appendTo('main');
      break;
    case 'editCategory':
      $editCategoryForm.appendTo('main');
      break;
    case 'registration':
      $registrationForm.appendTo('main');
      break;
    case 'login':
      $logInForm.appendTo('main');
      break;
    case 'error': {
      const $error = $(`<p>${arguments[1]}</p>`);
      $error.appendTo('body');
      setTimeout(() => {
        $error.remove();
        viewsManager.show('listings');
      }, 2000);

      break;
    }
    }
  };

});
