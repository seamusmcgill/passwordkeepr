$(() => {
  window.categories = {};

  const $categoriesDisplay = $(`
        <div class="grid" id="categories-display">

        </div>
  `);

  window.$categoriesDisplay = $categoriesDisplay;

  // Clear what was in passwords table before rendering
  const renderCategories = categories => {
    $categoriesDisplay.empty();
    $categoriesDisplay.append(`<div id="add-category">+ Category</div>`);
    const categoriesArray = categories.categories;
    for (let category of categoriesArray) {
      // console.log(category);
      $categoriesDisplay.append(`<div id="category-${category.id}-button">${category.name}</div>`);
    }
  };

  window.categories.renderCategories = renderCategories;

  const displayCategories = () => {
    getCategories()
      .then(res => {
        categories.renderCategories(res);
        $categoriesDisplay.prependTo('main');
      });
  };

  window.displayCategories = displayCategories;

});
