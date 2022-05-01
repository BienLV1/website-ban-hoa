
function detailProduct(){
    var idSanPham=localStorage.getItem('chiTietSanPham');
    var jsonDanhSachSanPham =localStorage.getItem('danhSachSanPham');
    var danhSachSanPham=JSON.parse(jsonDanhSachSanPham);
    var detaiSanPham;
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPhamHienTai=danhSachSanPham[i];
        if(sanPhamHienTai.id==idSanPham){
            detaiSanPham=sanPhamHienTai;        
        }
    }
    var html =chuyenDoiChiTietSanPham(detaiSanPham);
    var nodeProducts1 =document.getElementById('detail');
    nodeProducts1.innerHTML=html;
}
function onclickChiTietSanPham(idSanPham){
    localStorage.setItem('chiTietSanPham', idSanPham);
}
function TenSanPham(){
    var idSanPham=localStorage.getItem('chiTietSanPham');
    var jsonDanhSachSanPham =localStorage.getItem('danhSachSanPham');
    var danhSachSanPham=JSON.parse(jsonDanhSachSanPham);
    var detaiSanPham;
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPhamHienTai=danhSachSanPham[i];
        if(sanPhamHienTai.id==idSanPham){
            detaiSanPham=sanPhamHienTai;        
        }
    }
    var html =chuyenDoiTenSanPhamSangHTML(detaiSanPham);
    var nodeTen =document.getElementById('product-top');
    nodeTen.innerHTML=html;
}
function chuyenDoiTenSanPhamSangHTML(sanPham){
    sanPham=SanPham(sanPham.hinhAnh,sanPham.ten,sanPham.gia,sanPham.id);
    var html='<p><a href="trangchu.html">Trang chủ</a> / <a href="sanpham.html">Hoa</a> / '+sanPham.ten+'</p>';
    return html;
}
function chuyenDoiChiTietSanPham(sanPham){
    sanPham=SanPham(sanPham.hinhAnh,sanPham.ten,sanPham.gia,sanPham.id)
    var html="";
    html+='<div class="product-content-left col-12 col-sm-12 col-md-5 col-lg-5">'
    html+='<div class="product-content-left-big-img">'
    html+=    '<img src="'+sanPham.hinhAnh+'" alt="">'
    html+='</div>'
    html+='<div class="product-content-left-small-img row">'
    html+=    '<div class="col-4">'
    html+=        '<img src="./image/hoa-cam-on.jpg" alt="">'
    html+=    '</div>'
    html+=    '<div class="col-4">'
    html+=        '<img src="./image/hoa-sinh-nhat.jpg" alt="">'
    html+=    '</div>'
    html+=    '<div class="col-4">'
    html+=        '<img src="./image/hoa-chuc-mung.jpg" alt="">'
    html+=    '</div>'
    html+='</div>'
    html+='</div>'
    html+='<div class="product-content-right col-12 col-sm-12 col-md-7 col-lg-7">'
    html+=               ' <div class="product-name1">'
    html+=                    '<h4>'+sanPham.ten+'</h4>'
    html+=                    'Sản phẩm bao gồm: </br>'
    html+=                    'Lan lớn 1 cành: 09 gốc</br>'
    html+=                    '<p>Kiểu chậu sứ có thể thay đổi nhưng vẫn giữ nguyên kích thước và giá trị.</p>'
    html+=                    '<i style="font-size: 14px;">Sản phẩm thực nhận có thể khác với hình đại diện trên website (đặc điểm thủ công và tính chất tự nhiên của hàng nông nghiệp)</i>'
    html+=                '</div>'
    html+=                '<hr>'
    html+='                <div class="quantity">'
    html+='                    <p>SKU APF02HK295</p>'
    html+='                    <div class="btn-group">'
    html+='                        <input class="btn btn-outline-primary" type="button" onclick="tru()" value="-">  '                     
    html+='                        <input class="btn btn-outline-primary" type="text" value="1" id="soluong">'
    html+='                        <input class="btn btn-outline-primary" type="button" onclick="cong()" value="+">'
    html+='                    </div>'
    html+='                </div>'
    html+='                <hr>'
    html+='                <div class="product-detail-price">'
    html+='                    <p>Giá bán tại shop Xã Đàn (Đống Đa)</p>'
    html+='                    <p style="color: #ec7a1c; font-size: 30px;"><b>'+sanPham.gia+'đ / Giỏ</b></p>'
    html+='                </div>'
    html+='                <div class="button row">'
    html+='                    <div class="col-5 col-sm-3 col-md-3 col-lg-2">'
    html+='                        <a href="giohang.html"><button class="btn" onclick="onclickDuaVaoGioHangDetail(\''+sanPham.id+'\')">Mua ngay</button></a>'
    html+='                    </div>'
    html+=                   ' <div class="col-7 col-sm-9 col-md-9 col-lg-10">'
    html+='                        <button class="btn" style="background-color: #00833b; width: 150px;" onclick="onclickDuaVaoGioHangDetail(\''+sanPham.id+'\')">Thêm giỏ hàng</button>'
    html+='                    </div>'
    html+='                </div>'
    html+='                <hr>'
    html+='                <div class="row">'
    html+='                    <div class="col-12 col-sm-4 col-md-4 col-lg-4 row">'
    html+='                        <div class="col-3"><img src="./image/delivery.png" alt=""></div>'
    html+='                        <div class="col-9">Giao hàng nhanh 2 giờ trong 5km</div> '    
    html+='                    </div>'
    html+='                    <div class="col-12 col-sm-4 col-md-4 col-lg-4 row">'
    html+='                        <div class="col-3"><img src="./image/present-box.png" alt=""></div>'
    html+='                        <div class="col-9">Miễn phí thiệp chúc mừng</div> '    
    html+='                    </div>'
    html+='                    <div class="col-12 col-sm-4 col-md-4 col-lg-4 row">'
    html+='                        <div class="col-3"><img src="./image/eco-nature.png" alt=""></div>'
    html+='                        <div class="col-9">Đảm bảo hoa tươi trong 3 ngày</div>'     
    html+='                    </div>'
    html+='                </div>'
    html+='            </div>'
    return html;
}
