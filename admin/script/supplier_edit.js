$(document).ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;
  
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");
  
        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined
            ? true
            : decodeURIComponent(sParameterName[1]);
        }
      }
      return false;
    };
  
    var kode = getUrlParameter("kode");
    // Panggil API untuk membaca data
    $.ajax({
      type: "GET",
      url: host + "supplier_read_one.php?kode=" + kode,
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      dataType: "json",
      success: function (response) {
        var data = response.body.data;
        $("#kode").val(data.kode);
        $("#nama").val(data.nama);
        $("#alamat").val(data.alamat);
        $("#no_telp").val(data.no_telp);
      },
    });
  
    $("#supplierUpdate").submit(function (e) {
      e.preventDefault();
      var formData = new FormData(this);
      $.ajax({
        type: "POST",
        url: host + "supplier_update.php",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
          alert(response.msg);
          location.href = host_fe + "admin/?page=supplier_data";
        },
      });
    });
  });
  