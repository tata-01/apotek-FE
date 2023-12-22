const host =
  'http://localhost' +
  window.location.pathname.replace('supplier_edit.php', '');

function updateTable(data) {
  var tableBody = $('tbody');
  tableBody.empty();

  $.each(data, function (index, row) {
    var newRow = $('<tr></tr>');
    newRow.append('<td align="center">' + row.kode + '</td>');
    newRow.append('<td align="center">' + row.nama + '</td>');
    newRow.append('<td align="center">' + row.alamat + '</td>');
    newRow.append('<td align="center">' + row.no_handphone + '</td>');
    newRow.append(
      '<td><a href="#" type="button" class=""><span id="boot-icon" class="bi bi-pencil-fill" style="font-size: 1rem; color: rgb(0, 0, 0)"></span></a><a href="#" type="button" class="bi bi-trash-fill" data-toggle="modal" data-target="#exampleModalCenter" style="font-size: 1rem; color: rgb(255, 0, 0)"></a></td>',
    );

    tableBody.append(newRow);
  });
}

$(document).ready(function () {
  $('#update_supplier').submit(function (event) {
    event.preventDefault();

    var formData = $(this).serialize(); // Use $(this) to reference the form

    $.ajax({
      type: 'POST',
      url: host + 'edit_supplier.php',
      data: formData,
      success: function (response) {
        console.log(response);
        alert('Data berhasil diperbarui');
      },
      error: function (error) {
        console.error(error);
      },
    });
  });

  function fetchDataAndUpdateTable() {
    $.ajax({
      type: 'GET',
      url: host + 'edit_supplier.php',
      success: function (response) {
        updateTable(response.body.data);
      },
      error: function (error) {
        console.error(error);
      },
    });
  }

  fetchDataAndUpdateTable();
});
