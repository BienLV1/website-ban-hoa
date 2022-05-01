function ketQuaTimKiem(nameSanPham){
    localStorage.setItem('ketquatimkiem', nameSanPham);
}
function timKiem(){
    var nameSanPham=localStorage.getItem('ketquatimkiem');
        var jsonDanhSachSanPham =localStorage.getItem('danhSachSanPham');
        var danhSachSanPham=JSON.parse(jsonDanhSachSanPham);
        console.log(nameSanPham);
        var danhSachKetQua=[];
        for(var i=0;i<danhSachSanPham.length;i++){
            var sanPhamHienTai=danhSachSanPham[i];           
            if(sanPhamHienTai.ten.includes(nameSanPham)){
                var ketQua=sanPhamHienTai;
                danhSachKetQua.push(ketQua);
            }
            
        }
        console.log(danhSachKetQua);
        
        var html='<h2>Kết quả tìm kiếm</h2>';
        if(danhSachKetQua.length>0){
            html =chuyenDanhSachDoiTuongSanPham(danhSachKetQua);
            
        }
        else{
            html+='<p>Không tìm thấy kết quả nào</p>'
        }
        var nodeProducts1 =document.getElementById('ketQua');
        nodeProducts1.innerHTML=html;
}