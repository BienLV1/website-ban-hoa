function luuDanhSachSanPhamVaoLocalStorage(danhSachSanPham){
    var jsonDanhSachSanPham=JSON.stringify(danhSachSanPham)
    localStorage.setItem('danhSachSanPham',jsonDanhSachSanPham);
}
function luuDanhSachAccountVaoLocalStorage(danhSachAccount){
    var jsonDanhSachAccount=JSON.stringify(danhSachAccount)
    localStorage.setItem('danhSachAccount',jsonDanhSachAccount);
}
function add(){
    var img=document.getElementById('img').value;
        var name=document.getElementById('name').value;
        var price=document.getElementById('price').value;
        var sanPham=SanPham(img,name,price);
        var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
            if (danhSachSanPham == null)
                danhSachSanPham = new Array();
        danhSachSanPham.push(sanPham);
        console.log(danhSachSanPham);
        luuDanhSachSanPhamVaoLocalStorage(danhSachSanPham);
        alert('Thành công');
    
}
function Account(user, password, status,id){
    var account = new Object();
    account.user=user;
    account.password=password;
    account.status=status;
    if(id!=null){
        account.id=id;
    }
    else{
        account.id=taoId();
    }
    
    account.toJson = function(){
        var json = JSON.stringify(this);
        return json;
    }

    account.fromJSON = function(json){
        var doiTuongDayDu = new Object();
        var doiTuong=JSON.parse(json);
        var doiTuongDayDu=account(doiTuong.user,doiTuong.password,doiTuong.status,doiTuong.id)
        return doiTuongDayDu;
    }
    return account;
}
function creatAccount(){
    if(kiemTraFormValidationCacInputDeTrong()==false){

    }
    else{
        var user=document.getElementById('user').value;
        var password=document.getElementById('password').value;
        var status=document.getElementById('status').value;
        var account=Account(user,password,status);
        var danhSachAccount = JSON.parse(localStorage.getItem('danhSachAccount'));
            if (danhSachAccount == null)
                danhSachAccount = new Array();
        danhSachAccount.push(account);
        console.log(danhSachAccount);
        luuDanhSachAccountVaoLocalStorage(danhSachAccount);
        alert('Thành công');
    }
}

