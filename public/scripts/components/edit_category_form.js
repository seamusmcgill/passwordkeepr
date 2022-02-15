$(document).ready(function() {

  // Template for the edit category form
  const generateEditCategoryForm = (category) => {
    return `
      <form id="edit-form-category-${category.id}">
      <p>Edit ${category.name} Category</p>
          <label for="category-${category.id}-name">Name:</label>
          <input id="category-${category.id}-name" type="category" name="name" value="${category.name}">
          <label for="category-${category.id}-description">Description:</label>
          <input id="category-${category.id}-description" name="description" value="${category.description}">
          <button type="submit">Edit</button>
      </form>
    `;
  };

  // Render the category form and append it to the section
  const renderEditCategoryForm = category => {
    $('section').empty();
    $('section').append(generateEditCategoryForm(category));
  };

  // Generate edit category form when edit button in categories table is clicked
  $(document).on("click",  "[class^='category-']", (event) => {
    event.preventDefault();
    let elementClass = ($(event.target).attr("class"));
    let categoryID = elementClass.slice('category-'.length);
    // Make a get request to retrieve category information then render category form
    getCategory(categoryID)
      .then((response) => {
        renderEditCategoryForm(response.category[0]);
      });
  });

  // On form submit send form data in an AJAX post request then render updated categorys table
  $(document).on('submit', "[id^='edit-form-category-']", (event) => {
    event.preventDefault();

    let elementID = ($(event.target).attr("id"));
    let categoryID = elementID.slice('edit-form-category-'.length);
    let category = {
      id: categoryID,
      name: $(`#category-${categoryID}-name`).val(),
      description: $(`#category-${categoryID}-description`).val(),
    };

    editCategory(category)
      .then((res) => {
        getPasswords()
          .then((response) => {
            $('section').empty().append(passwordsTable.tableHTML);
            passwordsTable.renderPasswords(response);
          });
      });
  });


});
