function registerAccount(){
    var user=document.getElementById('dkuser').value;
    var password=document.getElementById('dkpassword').value;
    var repassword =document.getElementById('repassword').value;
    var status=0; var check=true;
    var account=Account(user,password,status);
    var danhSachAccount = layDanhSachAccount();
    if (danhSachAccount == null)
        danhSachAccount = new Array();
    for(var i=0;i<danhSachAccount.length;i++){
        if(user!=danhSachAccount[i].user && password==repassword){
            check=true;
        }
        if(user==danhSachAccount[i].user){
            var userError=document.getElementById('dkuser-error');
            userError.innerHTML='Tài khoản đã tồn tại';
            check=false;
            
        }
        if(password!=repassword){
            var repasswordError = document.getElementById('repassword-error');
            repasswordError.innerHTML='Không trùng mật khẩu';check=false;
        }
    }
    console.log(check);
    if(check==true){
        danhSachAccount.push(account);
        location.href="index.html";
    }
    console.log(danhSachAccount);
    luuDanhSachAccountVaoLocalStorage(danhSachAccount);
}
function onclickDangKy(){
    if(kiemTraFormValidationCacInputDeTrong()==false){

    }
    else{
        var check=registerAccount();
    }
}