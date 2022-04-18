var keyLocalStorageGioHang='danhSachItemGioHang';
function taoDoiTuongItemGioHang(idSanPham,soLuong){
    var itemGioHang=new Object();
    itemGioHang.idSanPham=idSanPham;
    itemGioHang.soLuong=soLuong;
    return itemGioHang;
}
function layDanhSachItemGioHang(){
    var danhSachItemGioHang=new Array();
    var jsonDanhSachItemGioHang=localStorage.getItem(keyLocalStorageGioHang);
    
    if(jsonDanhSachItemGioHang!=null){
        danhSachItemGioHang=JSON.parse(jsonDanhSachItemGioHang);
    }
    
    return danhSachItemGioHang;
}
function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang){
    var jsonDanhSachItemGioHang=JSON.stringify(danhSachItemGioHang);
    localStorage.setItem(keyLocalStorageGioHang,jsonDanhSachItemGioHang);
}

function onclickDuaVaoGioHang(idSanPham){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    var coTonTaiTrongDanhSachGioHang=false;
    for(var i=0;i<danhSachItemGioHang.length;i++){
        var itemGioHangHienTai=danhSachItemGioHang[i];
        if(itemGioHangHienTai.idSanPham==idSanPham){
            danhSachItemGioHang[i].soLuong++;
            coTonTaiTrongDanhSachGioHang=true;
        }  
    }
    if(coTonTaiTrongDanhSachGioHang==false){
        var itemGioHang=taoDoiTuongItemGioHang(idSanPham,1)
        danhSachItemGioHang.push(itemGioHang);
    }
    luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
    alert("Thêm thành công");
}
function onclickDuaVaoGioHangDetail(idSanPham){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    var coTonTaiTrongDanhSachGioHang=false;
    var soLuong=parseInt(document.getElementById('soluong').value);
    for(var i=0;i<danhSachItemGioHang.length;i++){
        var itemGioHangHienTai=danhSachItemGioHang[i];
        if(itemGioHangHienTai.idSanPham==idSanPham){
            danhSachItemGioHang[i].soLuong+=soLuong;
            coTonTaiTrongDanhSachGioHang=true;
        }  
    }
    if(coTonTaiTrongDanhSachGioHang==false){
        var itemGioHang=taoDoiTuongItemGioHang(idSanPham,soLuong);
        danhSachItemGioHang.push(itemGioHang);
    }
    luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
    alert("Thêm thành công");
}
function hienThiDanhSachItemGioHang(){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    var html="";  
    console.log(danhSachItemGioHang.length) 
    if(danhSachItemGioHang.length==0){
        html='<p>Không có sản phẩm nào</p>\n'+
        '    <p><a href="sanpham.html">=>Tiếp tục mua</a></p>';
    }
    else{
        html=chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang);   
    }
    var nodeGioHang=document.getElementById('gio-hang')
    nodeGioHang.innerHTML=html;
}
function chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang){
    var htmlTong="";
    for(var i=0;i<danhSachItemGioHang.length;i++){
        htmlTong=htmlTong+chuyenDoiTuongItemGioHangSangHTML(danhSachItemGioHang[i]);
    }
    return htmlTong;
}
function chuyenDoiTuongItemGioHangSangHTML(itemGioHang){
    var sanPham=laySanPhamTheoId(itemGioHang.idSanPham);
    var tongTien=itemGioHang.soLuong*sanPham.gia;
    var html= '<tr>\n'+
    '                      <td>\n'+
    '                        <img src="'+sanPham.hinhAnh+'" alt="" width="100px"> <br>\n'+
    '                        <a href="detail.html" onclick="onclickChiTietSanPham(\''+sanPham.id+'\')">'+sanPham.ten+'</a>                      \n'+
    '                      </td>\n'+
    '                      <td>'+sanPham.gia+'</td>\n'+
    '                      <td>\n'+
    '                        <div class="soluong">\n'+
    '                            <div class="btn-group">\n'+
    '                                <input class="btn btn-outline-primary" type="number" min="1" value="'+itemGioHang.soLuong+'" id="\''+itemGioHang.idSanPham+'\'">\n'+
    '                            </div>\n'+
    '                        </div>\n'+
    '                      </td>\n'+
    '                      <td>'+tongTien+'</td>\n'+
    '                      <td><i class="fa-regular fa-trash-can" onclick="xoaItemGioHang(\''+itemGioHang.idSanPham+'\')"></i></br><i class="fa-regular fa-pen-to-square" onclick="capNhatItemGioHang(\''+itemGioHang.idSanPham+'\','+itemGioHang.soLuong+')"></i></td>\n'+
    '                    </tr>';
    return html;
}
function layDanhSachItemGioHang(){
    var jsonDanhSachSanPham =localStorage.getItem('danhSachItemGioHang');
    var danhSachItemGioHang=JSON.parse(jsonDanhSachSanPham);
    return danhSachItemGioHang;
}
function xoaItemGioHang(idSanPham){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    for(var i=0;i<danhSachItemGioHang.length;i++){
        var sanPhamHienTai=danhSachItemGioHang[i];
        if(sanPhamHienTai.idSanPham==idSanPham){
            danhSachItemGioHang.splice(i,1);
        }
    }
    luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
    location.reload();
   
}
function xoaGioHang(){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    danhSachItemGioHang.splice(0,danhSachItemGioHang.length);
    luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
    location.reload();
}
function capNhatItemGioHang(idSanPham,soLuong){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    for(var i=0;i<danhSachItemGioHang.length;i++){
        var sanPhamHienTai=danhSachItemGioHang[i];
        if(sanPhamHienTai.idSanPham==idSanPham){
            soLuong=document.getElementById('\''+idSanPham+'\'').value;
            console.log(soLuong);
            danhSachItemGioHang.splice(i,1,taoDoiTuongItemGioHang(idSanPham,soLuong));
        }
    }
    luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
    location.reload();
}
function tongSanPhamTrongGioHang(){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    var tongSanPham=0;
    for(var i=0;i<danhSachItemGioHang.length;i++){
        var sanPhamHienTai=danhSachItemGioHang[i];
        tongSanPham+=parseInt(sanPhamHienTai.soLuong);
    }
    return tongSanPham;
}
function chuyenGioHangCuaToiSangHTMl(){
    var tongSanPham=tongSanPhamTrongGioHang();
    var html='<th scope="col" class="chuxanh">Giỏ hàng của tôi</th>\n'+
    '                        <th scope="col" class="right-table-cart chucam">'+tongSanPham+' SP</th>';
    var nodeTongSanPham=document.getElementById('tongSanPham')
    return nodeTongSanPham.innerHTML=html;
}
function thanhTien(){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    var danhSachSanPham=truyXuatLocalStrorage();
    var tongTien=0;
    for(var i=0;i<danhSachSanPham.length;i++){
        for(var j=0;j<danhSachItemGioHang.length;j++){           
            if(danhSachSanPham[i].id==danhSachItemGioHang[j].idSanPham){
                tongTien+=parseInt(danhSachSanPham[i].gia*danhSachItemGioHang[j].soLuong);
            }
        }
    }
    return tongTien;
}
function chuyenThanhTienGioHangCuaToiSangHTMl(){
    var tongTien=thanhTien();
    var html='<tr>\n'+
    '                      <td>Tạm tính</td>\n'+
    '                      <td class="right-table-cart"><b>'+tongTien+' đ</b></td>\n'+
    '                    </tr>\n'+
    '                    <tr>\n'+
    '                        <td><b>Tổng cộng</b></td>\n'+
    '                        <td class="right-table-cart"><b class="chucam" style="font-size: 20px;">'+tongTien+' đ </b></br> <i style="font-size: 12px;">Giá đã bao gồm VAT</i></td>\n'+
    '                    </tr>';
    var nodeTamTinh=document.getElementById('thanh-tien');
    return nodeTamTinh.innerHTML=html;
}
function chuyenSoLoaiSanPhamSangHTMl(){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    var cartNum=danhSachItemGioHang.length;
    var html=''+cartNum+'';
    var nodeCartNum=document.getElementById('cart-num');
    return nodeCartNum.innerHTML=html;
}
function nutThanhToan(){
    var danhSachItemGioHang=layDanhSachItemGioHang();
    var html="";
    if(danhSachItemGioHang.length==0||danhSachItemGioHang==null){
        html='<a href="sanpham.html" style="color: white;">Mua hàng ngay</a>';
    }
    else{
        html='<a href="thanhtoan.html" style="color: white;">Thanh toán</a>';
    }
    var nodeThanhToan=document.getElementById('thanhToan');
    return nodeThanhToan.innerHTML=html;
}