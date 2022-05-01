function onclickDangNhap(){
    if(kiemTraFormValidationCacInputDeTrong()==false){

    }
    else{
        var check=kiemTraAccount();
    }
}
function layDanhSachAccount(){
    var jsonDanhSachAccount=localStorage.getItem('danhSachAccount');
    var danhSachAccount = JSON.parse(jsonDanhSachAccount);
    return danhSachAccount;
}
function kiemTraAccount(){
    var user = document.getElementById('user').value;
    var password =document.getElementById('password').value;
    var danhSachAccount = layDanhSachAccount();
    var checkUser=document.getElementById('user-error');
    var checkPass=document.getElementById('password-error');
    var check =true;
    for(var i=0;i<danhSachAccount.length; i++){ 
        if(user!=danhSachAccount[i].user){
            checkUser.innerHTML='Tài khoản không tồn tại'
        }
        else{
            
            if(password==danhSachAccount[i].password){
                alert('Đăng nhập thành công');
                if(danhSachAccount[i].status==1){
                    location.href="admin.html";
                }
                if(danhSachAccount[i].status==0){
                    location.href="index.html";
                }     
            }
            else{
                checkPass.innerHTML='Mật khẩu không đúng';
            }break;
        }
    }
}