;function populasiKategori() {
    $.ajax({
        type: "GET",
        url: host + "kategori_read.php", // Gantilah dengan URL API kategori
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            var categories = data.body.data;
            var select = $("#kode_kategori");

            // Kosongkan opsi pemilihan sebelum mengisi kembali
            select.empty();

            // Tambahkan opsi pemilihan untuk setiap kategori
            for (var i = 0; i < categories.length; i++) {
                select.append(`<option value="${categories[i].kode}">${categories[i].nama}</option>`);
            }
        },
    });
}
// Panggil fungsi untuk mengisi opsi pemilihan kategori saat halaman dimuat
$(document).ready(function () {
    populasiKategori();
});
function populasiSuplier() {
  $.ajax({
      type: "GET",
      url: host + "supplier_read.php", // Gantilah dengan URL API supplier
      dataType: "json",
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
          var categories = data.body.data;
          var select = $("#kode_supplier");

          // Kosongkan opsi pemilihan sebelum mengisi kembali
          select.empty();

          // Tambahkan opsi pemilihan untuk setiap kategori
          for (var i = 0; i < categories.length; i++) {
              select.append(`<option value="${categories[i].kode}">${categories[i].nama}</option>`);
          }
      },
  });
}
// Panggil fungsi untuk mengisi opsi pemilihan kategori saat halaman dimuat 
$(document).ready(function () {
  populasiSuplier();
});
$('#obatInput').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host + "obat_create.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
            location.href = host_fe + "/admin/?page=obat_data";
        },
    });
  })