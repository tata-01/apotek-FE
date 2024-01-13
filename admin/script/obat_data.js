$(document).ready(function () {
    readObat();
    // api read
    function readObat() {
        $("#obatData").empty();
        $.ajax({
            type: "GET",
            url: host + "obat_read.php",
            dataType: "json",
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                var dataObat = data.body.data;
                for (var i = 0; i < dataObat.length; i++) {
                    $("#obatData").append(
                        `
                    <tr>
                        <td>` +
                            (i + 1) +
                            `</td>
                        <td>
                            <img src= "` +
                            host + 
                            dataObat[i].gambar +
                            `" width="100" />
                        </td>
                        <td>` +
                            dataObat[i].kode +
                            `</td>
                        <td>` +
                            dataObat[i].nama +
                            `</td>
                        <td>` +
                            dataObat[i].nama_supplier +
                            `</td>
                        <td>` +
                            dataObat[i].nama_kategori +
                            `</td>
                            <td>` +
                            dataObat[i].stock +
                            `</td>
                        <td>` +
                            dataObat[i].harga +
                            `</td>
                        <td>
                        <button id="hapus" class="btn btn-danger" value="` +
                            dataObat[i].kode +
                            `">Hapus
                        </button>
                        <button id="edit" class="btn btn-primary">
                                <a class="text-light" href="?page=obat_edit&kode=` +
                            dataObat[i].kode +
                            `">Edit</a>
                            </button>
                        </td>
                    </tr>
                    `
                    );
                }
            },
        });
    }

    // api hapus
    $(document).on("click", "#hapus", function () {
        var kode = $(this).val();

        if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
            $.ajax({
                type: "POST",
                url: host + "obat_delete.php",
                data: { kode: kode },
                dataType: "json",
                async: true,
                success: function (response) {
                    alert(response.msg);
                    location.href = host_fe + "/admin/?page=obat_data";
                },
            });
        }
    });
});
