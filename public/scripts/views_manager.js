/* eslint-disable no-undef */
$(() => {

  const $body = $('body');

  window.viewsManager = {};

  window.viewsManager.show = function(item) {
    $('section').empty();

    switch (item) {
    case 'passwords':
      $passwordsTable.appendTo('section');
      break;
    case 'newPassword':
      $newPasswordHTML.appendTo('section');
      break;
    case 'editPassword':
      $editPasswordForm.appendTo('section');
      break;
    case 'newCategory':
      $newCategoryHTML.appendTo('section');
      break;
    case 'editCategory':
      $editCategoryForm.appendTo('section');
      break;
    case 'registration':
      $registrationForm.appendTo('section');
      break;
    case 'login':
      $logInForm.appendTo('section');
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
