$(document).ready(function () {
    readData();

    function readData() {
        $("#dataObat").empty();
        $.ajax({
            type: "GET",
            url: host + "obat_read.php",
            dataType: "json",
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                var obat = data.body.data;
                
                for (var i = 0; i < obat.length; i++) {
                    $("#dataObat").append(`
                        <div class="col-md-4">
                          <div class="card mb-4 shadow-sm">
                          <img src="`+ host + obat[i].gambar +`" class="card-img-top" alt="" style="object-fit:cover;height:170px"/>
                          <p style="font-size:80%; font-family:open sans; text-align: center;">`+ obat[i].nama +`</p>
                          <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                          <a href="?page=detail&kode=`+ obat[i].kode +`" class="btn btn-sm btn-dark">Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                        
                    `);
                }
            },
        });
    }
});