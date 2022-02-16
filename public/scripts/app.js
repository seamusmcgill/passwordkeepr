// // Client facing scripts here
// function myFunction() {   /* Get the text field */
//   var copyText = document.getElementById("myInput");    /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */    /* Copy the text inside the text field */
//   navigator.clipboard.writeText(copyText.value);      /* Alert the copied text */
//   return  copyText.value;
// }


$(document).ready(function() {

  const copyToClipboard = (elementID) => {
    navigator.clipboard.writeText($(elementID).val());
    return $(elementID).val();
  };

  $('body').on('click', '#copyTextButton', (event => {
    copyToClipboard('#myInput');
  }));

});
