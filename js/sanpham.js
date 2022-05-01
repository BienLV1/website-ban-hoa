
function hamDropdownLoc() {
    document.querySelector(".noidung_dropdown_loc").classList.toggle("hienThi");
}
function hamDropdownSapXep() {
    document.querySelector(".noidung_dropdown_sapxep").classList.toggle("hienThi");
}
function hamDropdownLoc1() {
    document.getElementById('list-products').style.display = "none";
    document.getElementById('loc-2').style.display = "none";
    document.getElementById('loc-3').style.display = "none";
    document.getElementById('loc-1').style.display = "block";
    var danhSachSanPham=truyXuatLocalStrorage();
    console.log(danhSachSanPham);
    var arr=[];
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPham=danhSachSanPham[i];
        if(sanPham.gia<1000000){
            arr.push(sanPham);
        }
    }
    luuDanhSachSanPhamLoc1VaoLocalStorage(arr);

    var jsonDanhSachSanPham1=localStorage.getItem('danhSachSanPhamDuoi1Trieu');
    var danhSachSanPham1 = JSON.parse(jsonDanhSachSanPham1);
    var html1=chuyenDanhSachDoiTuongSanPham(danhSachSanPham1);
    var nodeProducts2 =document.getElementById('loc-1');
    nodeProducts2.innerHTML=html1;
}
function hamDropdownLoc2() {
    document.getElementById('list-products').style.display = "none";
    document.getElementById('loc-1').style.display = "none";
    document.getElementById('loc-3').style.display = "none";
    document.getElementById('loc-2').style.display = "block";
    var danhSachSanPham=truyXuatLocalStrorage();
    console.log(danhSachSanPham);
    var arr=[];
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPham=danhSachSanPham[i];
        if((sanPham.gia>=1000000) && (sanPham.gia<=1500000)){
            arr.push(sanPham);
        }
    }
    luuDanhSachSanPhamLoc2VaoLocalStorage(arr);

    var jsonDanhSachSanPham1=localStorage.getItem('danhSachSanPhamDuoi1TrieuRuoi');
    var danhSachSanPham1 = JSON.parse(jsonDanhSachSanPham1);
    var html1=chuyenDanhSachDoiTuongSanPham(danhSachSanPham1);
    var nodeProducts2 =document.getElementById('loc-2');
    nodeProducts2.innerHTML=html1;
}
function hamDropdownLoc3() {
    document.getElementById('list-products','loc-1','loc-2').style.display = "none";
    document.getElementById('loc-2').style.display = "none";
    document.getElementById('loc-1').style.display = "none";
    document.getElementById('loc-3').style.display = "block";

    var danhSachSanPham=truyXuatLocalStrorage();
    console.log(danhSachSanPham);
    var arr=[];
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPham=danhSachSanPham[i];
        if(sanPham.gia>=1500000){
            arr.push(sanPham);
        }
    }
    luuDanhSachSanPhamLoc3VaoLocalStorage(arr);

    var jsonDanhSachSanPham1=localStorage.getItem('danhSachSanPhamTren1TrieuRuoi');
    var danhSachSanPham1 = JSON.parse(jsonDanhSachSanPham1);
    var html1=chuyenDanhSachDoiTuongSanPham(danhSachSanPham1);
    var nodeProducts2 =document.getElementById('loc-3');
    nodeProducts2.innerHTML=html1;
}
function SanPham(hinhAnh, ten, gia,id){
    var sanPham = new Object();
    sanPham.hinhAnh=hinhAnh;
    sanPham.ten=ten;
    sanPham.gia=gia;
    if(id!=null){
        sanPham.id=id;
    }
    else{
        sanPham.id=taoId();
    }
    
    sanPham.toJson = function(){
        var json = JSON.stringify(this);
        return json;
    }

    sanPham.fromJSON = function(json){
        var doiTuongDayDu = new Object();
        var doiTuong=JSON.parse(json);
        var doiTuongDayDu=SanPham(doiTuong.hinhAnh,doiTuong.ten,doiTuong.gia,doiTuong.id)
        return doiTuongDayDu;
    }
    return sanPham;
}
function danhSachDoiTuongSanPham(danhSachSanPham){
    var HTMLDanhSachSanPham ='<div class="row">'
    for(var i=0;i<4;i++){
        var sanPham=danhSachSanPham[i];
        var htmlSanPham = chuyenDoiTuongSanPham(sanPham);
        HTMLDanhSachSanPham=HTMLDanhSachSanPham+htmlSanPham;
    }
    HTMLDanhSachSanPham=HTMLDanhSachSanPham+'</div>'
    return HTMLDanhSachSanPham;
}
function chuyenDanhSachDoiTuongSanPham(danhSachSanPham){
    var HTMLDanhSachSanPham ='<div class="row">'
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPham=danhSachSanPham[i];
        var htmlSanPham = chuyenDoiTuongSanPham(sanPham);
        HTMLDanhSachSanPham=HTMLDanhSachSanPham+htmlSanPham;
    }
    HTMLDanhSachSanPham=HTMLDanhSachSanPham+'</div>'
    return HTMLDanhSachSanPham;
}

function chuyenDoiTuongSanPham(sanPham){
    sanPham=SanPham(sanPham.hinhAnh,sanPham.ten,sanPham.gia,sanPham.id)
    var HTMLSanPham ="";
    HTMLSanPham+='<div class="col-6 col-xs-4 col-sm-4 col-md-3 col-lg-3">'
    HTMLSanPham+='<a href="detail.html?\''+sanPham.id+'\'" onclick="onclickChiTietSanPham(\''+sanPham.id+'\')">'
    HTMLSanPham+=    '<img class="img-fluid" src="'+sanPham.hinhAnh+'" alt="">'
    HTMLSanPham+=    '<p class="product-name">'+sanPham.ten+'</p>'
    HTMLSanPham+='</a>'
    HTMLSanPham+='<p class="product-price"><b>'+sanPham.gia+'đ/Bó</b></p>'
    HTMLSanPham+='<div class="mua">'
    HTMLSanPham+=    '<a href="giohang.html"><button id="muangay"value="\''+sanPham.id+'\'" onclick="onclickDuaVaoGioHang(\''+sanPham.id+'\')" class="btn btn-buy">Mua ngay</button></a>'
    HTMLSanPham+='</div>'
    HTMLSanPham+='</div>'
    return HTMLSanPham;
}
function truyXuatLocalStrorage(){
    var jsonDanhSachSanPham =localStorage.getItem('danhSachSanPham');
    var danhSachSanPham=JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}

function truyXuatSanPhamTheoName(name){
    truyXuatLocalStrorage();
    var data=[];
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPhamHienTai=danhSachSanPham[i];
        if(sanPhamHienTai.ten.includes(name)){
            data.push(sanPhamHienTai);
        }
    }
    
    return data;
}
function laySanPhamTheoId(idSanPham){
    var sanPham=new Object();
    var danhSachSanPham=truyXuatLocalStrorage();
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPhamHienTai=danhSachSanPham[i];
        if(sanPhamHienTai.id==idSanPham){
            sanPham=sanPhamHienTai;
        }
    }
    sanPham=SanPham(sanPham.hinhAnh,sanPham.ten,sanPham.gia,sanPham.id);
    return sanPham;
}
function sapXepGiaTangDan(){
    danhSachSanPham=truyXuatLocalStrorage();
    // Sắp xếp mảng
    danhSachSanPham.sort(function(a,b){
        return a.gia-b.gia;
    });
    luuDanhSachSanPhamVaoLocalStorage(danhSachSanPham);
    location.reload();
}
function sapXepGiaGiamDan(){
    danhSachSanPham=truyXuatLocalStrorage();
    // Sắp xếp mảng
    danhSachSanPham.sort(function(a,b){
        return b.gia-a.gia;
    });
    luuDanhSachSanPhamVaoLocalStorage(danhSachSanPham);
    location.reload();
}
function luuDanhSachSanPhamLoc1VaoLocalStorage(danhSachSanPham){
    var jsonDanhSachSanPham=JSON.stringify(danhSachSanPham)
    localStorage.setItem('danhSachSanPhamDuoi1Trieu',jsonDanhSachSanPham);
}
function luuDanhSachSanPhamLoc2VaoLocalStorage(danhSachSanPham){
    var jsonDanhSachSanPham=JSON.stringify(danhSachSanPham)
    localStorage.setItem('danhSachSanPhamDuoi1TrieuRuoi',jsonDanhSachSanPham);
}
function luuDanhSachSanPhamLoc3VaoLocalStorage(danhSachSanPham){
    var jsonDanhSachSanPham=JSON.stringify(danhSachSanPham)
    localStorage.setItem('danhSachSanPhamTren1TrieuRuoi',jsonDanhSachSanPham);
}
// function danhSachSanPhamDuoi1Trieu(){
//     var danhSachSanPham=truyXuatLocalStrorage();
//     console.log(danhSachSanPham);
//     var arr=[];
//     for(var i=0;i<danhSachSanPham.length;i++){
//         var sanPham=danhSachSanPham[i];
//         if(sanPham.gia>1500000){
//             arr.push(sanPham);
//         }
//     }
//     luuDanhSachSanPhamLoc1VaoLocalStorage(arr);
// }
