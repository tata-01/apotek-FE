$(document).ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split("&"),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    var kode = getUrlParameter("kode");

    // menampilkan data by=id
    $.ajax({
        type: "GET",
        url: "http://program.test/agustiana/read_one_obat.php?kode=" + kode,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            var data = response.body.data[0];

            $("#kode").val(data.kode);
            $("#nama").val(data.nama);
            $("#kode_supplier option[value=" + data.kode_supplier + "]").attr("selected", "selected");
            $("#kode_kategori option[value=" + data.kode_kategori + "]").attr("selected", "selected");
            $("#stok").val(data.stok);
            $("#harga").val(data.harga);
            $("#desc").val(data.desc);
        },
    });

    // update data
    $("#obatTable").submit(function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type: "POST",
            url: "http://program.test/agustiana/update_obat.php",
            data: formData,
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "json",
            success: function (response) {
                console.log(response);
            },
        });
    });
});
