function chuyenTieuDeBangSanPhamSangHTML(){
    var tongSanPham=tongSanPhamTrongGioHang();
    var html='<ul>\n'+
    '                            <li class="chuxanh">Sản Phẩm</li>\n'+
    '                            <li style="float: right;"class="chucam">'+tongSanPham+' Sp <i class="fa-solid fa-angle-down"></i></li>\n'+
    '                        </ul>';
    var nodeTongSanPham=document.getElementById('tieude')
    return nodeTongSanPham.innerHTML=html;
}
function chuyenDanhSachItemGioHangSangHTML(){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    var htmlTong="";
    for(var i=0;i<danhSachItemGioHang.length;i++){
        htmlTong=htmlTong+chuyenDoiTuongBangSanPhamSangHTML(danhSachItemGioHang[i]);
    }
    var nodeGioHang=document.getElementById('noidung')
    return nodeGioHang.innerHTML=htmlTong;
}
function chuyenDoiTuongBangSanPhamSangHTML(itemGioHang){
    var sanPham=laySanPhamTheoId(itemGioHang.idSanPham);
    var tongTien=itemGioHang.soLuong*sanPham.gia;
    var html='<ul>\n'+
    '                            <li>\n'+
    '                                <img src="'+sanPham.hinhAnh+'" alt="" width="80px"><br>\n'+
    '                                <a href="detail.html" onclick="onclickChiTietSanPham(\''+sanPham.id+'\')">'+sanPham.ten+'</a> x '+itemGioHang.soLuong+'\n'+
    '                            </li>\n'+
    '                            <li style="float: right;margin: -35px auto;"><b>'+tongTien+'đ</b></li>\n'+
    '                        </ul>';
    return html;
}
function chuyenBangTomTatDonHangSangHTML(){
    var tongTien=thanhTien();
    var tienShip=15000;
    var thanhToan=tongTien+tienShip;
    var html='<ul style="margin-top: 10px;">\n'+
    '                            <li>Tạm tính</li>\n'+
    '                            <li style="float: right;"><b>'+tongTien+' đ</b></li>\n'+
    '                        </ul>\n'+
    '                        <ul>\n'+
    '                            <li>Ship</li>\n'+
    '                            <li style="float: right;"><b>'+tienShip+' đ</b></li>\n'+
    '                        </ul>\n'+
    '                        <hr style="width: 90%; margin: 10px auto 10px;">\n'+
    '                        <ul>\n'+
    '                            <li><b>Tổng cộng</b></li>\n'+
    '                            <li style="float: right; font-size: 20px;" class="chucam">'+thanhToan+' đ</li>\n'+
    '                        </ul>';
    var nodeTamTinh=document.getElementById('noidung1');
    return nodeTamTinh.innerHTML=html;
}
