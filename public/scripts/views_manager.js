$(() => {

  const $body = $('body');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $passwordList.detach();

    switch (item) {
    case 'passwords':
      $passwordList.appendTo($body);
      break;
    case 'error': {
      const $error = $(`<p>${arguments[1]}</p>`);
      $error.appendTo('body');
      setTimeout(() => {
        $error.remove();
        views_manager.show('listings');
      }, 2000);

      break;
    }
    }
};

});
