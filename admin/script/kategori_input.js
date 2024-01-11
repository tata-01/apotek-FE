$("#kategoriInput").submit(function (e) {
  var host_fe = "http://localhost/revisi_fe/admin"; 
  var host = "http://localhost/revisi_be/";
  e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      type: "POST",
      url: host + "kategori_create.php",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      dataType: "json", 
      success: (result) => {
        alert(result.msg);
        location.href = host_fe + "/?page=kategori_data";
      },
    });
  });
  
