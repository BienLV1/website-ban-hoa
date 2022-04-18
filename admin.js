function luuDanhSachSanPhamVaoLocalStorage(danhSachSanPham){
    var jsonDanhSachSanPham=JSON.stringify(danhSachSanPham)
    localStorage.setItem('danhSachSanPham',jsonDanhSachSanPham);
}