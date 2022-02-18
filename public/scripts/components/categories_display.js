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
    $categoriesDisplay.append(`<div id="newCategoryLink">+ Category</div>`);
    const categoriesArray = categories.categories;
    for (let category of categoriesArray) {
      // console.log(category);
      $categoriesDisplay.append(`<div class="category-${category.id}" id="filter-category-${category.id}">${category.name}</div>`);
    }
  };

  window.categories.renderCategories = renderCategories;

  const displayCategories = () => {
    getCategories()
      .then(res => {
        categories.renderCategories(res);

        $searchContainer.prependTo('main');
        $categoriesDisplay.prependTo('main');
      });
  };

  window.displayCategories = displayCategories;

  $(document).on('click', "[id^='filter-category-']", (event) => {
    const value = $(event.target).html();
    $('.table-row').hide();
    $('.table-row').has("td:contains(" + value + ")").show();
  });

});
