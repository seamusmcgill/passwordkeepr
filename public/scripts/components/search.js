$(document).ready(function() {

  $('#passwords-table-search').on('input', function() {
    const value = $(this).val();
    if (value === "") return $('.table-row').show();
    $('.table-row').hide();
    $('.table-row').has("td:contains(" + value + ")").show();
  });

});
