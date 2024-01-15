$(document).ready(function () {
  readKategori();
  // API read
  function readKategori() {
    $("#kategoriData").empty();
    $.ajax({
      type: "GET",
      url: host + "kategori_read.php",
      dataType: "json",
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        var dataKategori = data.body.data;
        for (var i = 0; i < dataKategori.length; i++) {
          $("#kategoriData").append(
            "<tr>" +
              "<td>" + (i + 1) + "</td>" +
              "<td>" + dataKategori[i].kode + "</td>" +
              "<td>" + dataKategori[i].nama + "</td>" +
              "<td>" +
              "<button class='btn btn-danger hapus' value='" + dataKategori[i].kode + "'>Hapus</button>" +
              "<button class='btn btn-primary'>" + "<a class='text-light' href='?page=kategori_edit&kode=" + dataKategori[i].kode + "'>Edit</a>" + "</button>" +
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
        url: host + "kategori_delete.php",
        data: { kode: kode },
        dataType: "json",
        async: true,
        success: function (response) {
          alert(response.msg);
          location.href = host_fe + "admin/?page=kategori_data";
          
        },
      });
    }
  });
});
