<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Input Obat</h1>
</div>

<div class="row">
    <div class="col">
        <form id="obatInput">
            <div class="form-group">
                <label for="kode">Kode</label>
                <input type="text" class="form-control" name="kode" id="kode"  />
            </div>
            <div class="form-group">
                <label for="nama">Nama</label>
                <input type="text" class="form-control" name="nama" id="nama" />
            </div>
            <div class="form-group">
                <label for="gambar">supplier</label>
                <select class="form-control" id="kode_supplier" name="kode_supplier">
                </select>
            </div>
            <div class="form-group">
                <label for="gambar">Kategori</label>
                <select class="form-control" id="kode_kategori" name="kode_kategori">
                </select>
            </div>
            <div class="form-group">
                <label for="gambar">Gambar</label>
                <input type="file" class="form-control" name="gambar" id="gambar" accept="image/*" />
            </div>
            <div class="form-group">
                <label for="stock">stock</label>
                <input type="number" class="form-control" name="stock" id="stock" />
            </div>
            <div class="form-group">
                <label for="harga">Harga</label>
                <input type="number" class="form-control" name="harga" id="harga" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>