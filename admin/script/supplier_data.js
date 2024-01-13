$(document).ready(function () {
  readSupplier();
  // API read
  function readSupplier() {
    $("#supplierData").empty();
    $.ajax({
      type: "GET",
      url: host + "supplier_read.php",
      dataType: "json",
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        var dataSupplier = data.body.data;
        for (var i = 0; i < dataSupplier.length; i++) {
          $("#supplierData").append(
            "<tr>" +
              "<td>" + (i + 1) + "</td>" +
              "<td>" + dataSupplier[i].kode + "</td>" +
              "<td>" + dataSupplier[i].nama + "</td>" +
              "<td>" + dataSupplier[i].alamat + "</td>" +
              "<td>" + dataSupplier[i].no_telp + "</td>" +
              "<td>" +
              "<button class='btn btn-danger hapus' value='" + dataSupplier[i].kode + "'>Hapus</button>" +
              "<button class='btn btn-primary'>" + "<a class='text-light' href='?page=supplier_edit&kode=" + dataSupplier[i].kode + "'>Edit</a>" + "</button>" +
              "</td>" +
              "</tr>"
          );
        }
      },
    });
  }

  // API hapus
  $(document).on("click", ".hapus", function () {
    var kode = $(this).val();

    if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
      $.ajax({
        type: "POST",
        url: host + "supplier_delete.php",
        data: { kode: kode },
        dataType: "json",
        async: true,
        success: function (response) {
          alert(response.msg);
          location.href = host_fe + "/admin/?page=supplier_data";
          
        },
      });
    }
  });
});
