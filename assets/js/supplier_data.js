const host =
  'http://localhost' +
  window.location.pathname.replace('supplier_data.php', '');

function getOneData() {
  var kodeValue = $('#kodeInput').val();

  if (kodeValue) {
    $.ajax({
      type: 'GET',
      url: host + 'read_one_supplier.php',
      data: { kode: kodeValue },
      success: function (response) {
        updateTable(response.body.data);
      },
      error: function (error) {
        console.error(error);
      },
    });
  } else {
    alert('Please enter a Kode before fetching data.');
  }
}

function deleteData(kodeValue) {
  if (kodeValue) {
    $.ajax({
      type: 'DELETE',
      url: host + 'delete_supplier.php',
      contentType: 'application/json',
      data: JSON.stringify({ kode: kodeValue }),
      success: function (response) {
        // updateTable(response.body.data);
        console.log(response)
        alert('Data berhasil dihapus');
      },
      error: function (error) {
        console.error(error);
      },
    });
  } else {
    alert('Please enter a Kode before deleting.');
  }
}

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
      '<td><a href="#" class=""><button id="boot-icon" type="button" class="bi bi-pencil-fill" style="font-size: 1rem; color: rgb(0, 0, 0)"></button></a><button onclick="deleteData(\'' +
      row.kode +
      '\')" type="button" class="bi bi-trash-fill" data-toggle="modal" data-target="#exampleModalCenter" style="font-size: 1rem; color: rgb(255, 0, 0)"></button></td>',

    );

    tableBody.append(newRow);
  });
}

$(document).ready(function () {
  function fetchDataAndUpdateTable() {
    $.ajax({
      type: 'GET',
      url: host + 'read_supplier.php',
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
