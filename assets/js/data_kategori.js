$(document).ready(function () {
    // api read
    $.ajax({
        type: "GET",
        url: host + "read_kategori.php",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            console.log(data);
            var dataKategori = data.body.data;
            for (var i = 0; i < dataKategori.length; i++) {
                $("#dataKategori").append(
                    `
                    <tr>
                        <td>` +
                        (i + 1) +
                        `</td>
                        <td>` +
                        dataKategori[i].kode +
                        `</td>
                        <td>` +
                        dataKategori[i].nama +
                        `</td>
                        <td>
                        <button id="hapus" class="btn btn-danger" value="` +
                        dataKategori[i].kode +
                        `">Hapus
                        </button>
                        <button id="edit" class="btn btn-primary">
                            <a class="text-light" href="../kategori_edit/update_kategori.php?kode=` +
                        dataKategori[i].kode +
                        `">Edit</a>
                            </button>
                        </td>
                    </tr>
                    `
                );
            }
        },
    });

    // api hapus
    $(document).on("click", "#hapus", function () {
        var kode = $(this).val();

        if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
            $.ajax({
                type: "POST",
                url: host + "delete_kategori.php",
                data: { kode: kode },
                dataType: "json",
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    alert(response.msg);
                },
            });
        }
    });
});
