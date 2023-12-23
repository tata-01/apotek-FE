const host =
  'http://localhost' +
  window.location.pathname.replace('supplier_input.php', '');

$(document).ready(function () {
  $('#supplier').submit(function (event) {
    event.preventDefault();

    var formData = $('#supplier').serialize();

    $.ajax({
      type: 'POST',
      url: host + 'input_supplier.php',
      data: formData,
      success: function (response) {
        console.log(response);
        alert('Data berhasil diinsert');
      },
      error: function (error) {
        console.error(error);
      },
    });
  });
});


