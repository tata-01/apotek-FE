$("#formKategori").submit(function (e) {
    e.preventDefault(); 
    var formData = new FormData(this);
    $.ajax({
        type: "POST",
        url: host + "input_kategori.php",
        data: formData,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            alert(response.msg);
        },
    });
});
