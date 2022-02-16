$(document).ready(function() {

  const $newCategoryHTML = $(`
  <div>
  <h1>Create category</h1>
  </div>
  <div>
  <form id="newCategoryForm">
  <label for="category_name">Name:</label>
  <input id="category_name" name="category_name" placeholder="Enter name of category">
  <label for="category_description">Description:</label>
  <input id="category_description" name="category_description" placeholder="What is the category for?">
  <button type="submit">Create</button>
  </form>
  </div>
  `);

  window.$newCategoryHTML = $newCategoryHTML;

  $('#newCategoryForm').on('submit', (event => {
    event.preventDefault();

    const data = {
      category_name: $('#category_name').val(),
      category_description: $('#category_description').val(),
    };
    console.log(data);
    const postCategory = (data) => {
      $.ajax({
        method: 'POST',
        url: '/api/categories',
        data
      });
    };

    postCategory(data)
      .then((response) => {
        console.log(response);
      });


  }));


});
