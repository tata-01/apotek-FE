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

    // menampilkan detail obat
    $.ajax({
        type: "GET",
        url: host + "detail.php?kode=" + kode,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            var data = response.body.data;

            $('#gambar-obat').append(`
                <img src="`+ host +data.gambar+`" class="img-fluid" alt="" />
            `)

            $('#detail-obat').append(`
            <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Nama Obat</h6>
                <small class="text-muted" id="nama"> `+data.nama+`</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Harga</h6>
                <small class="text-muted" id="harga"> Rp. `+data.harga+`</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Supplier</h6>
                <small class="text-muted" id='kode_supplier'>`+data.kode_supplier+`</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Kategori</h6>
                <small class="text-muted" id='Kode_kategori'>`+data.kode_supplier+`</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Stok</h6>
                <small class="text-muted" id='stock'>`+data.stock+`</small>
              </div>
            </li>
          </ul>
            `)
        },
    });
});