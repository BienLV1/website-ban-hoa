function onclickThanhToan(){
    if(kiemTraFormValidationCacInputDeTrong()==false){

    }
    else{
        alert('Thanks')
    }
}
function kiemTraFormValidationCacInputDeTrong(){
    var hopLe=true;
    var danhSachNodeInputKhongDeTrong=document.querySelectorAll('input[khongDeTrong]');
    for(var i=0;i<danhSachNodeInputKhongDeTrong.length;i++){
        var nodeInputKhongDeTrong=danhSachNodeInputKhongDeTrong[i];
        var giaTri=nodeInputKhongDeTrong.value;
        var idNodeInput=nodeInputKhongDeTrong.getAttribute('id');
        var nodeHienThiLoi=truyXuatNodeHienThiLoiTheoInputId(idNodeInput);
        if(giaTri==null||giaTri.length==0){
            var noiDungLoi=layNoiDungHienThiLoiTheoNodeInput(nodeInputKhongDeTrong);
            nodeHienThiLoi.innerHTML=noiDungLoi;
            hopLe=false
        }
        else{
            nodeHienThiLoi.innerHTML="";
            hopLe=true;
        }
    }
    console.log(hopLe);
    return hopLe;
}
function truyXuatNodeHienThiLoiTheoInputId(inputId){
    var nodeHienThiLoi =document.querySelector('label.error[for="'+inputId+'"]')
    return nodeHienThiLoi;
}
function layNoiDungHienThiLoiTheoNodeInput(nodeInput){
    var noDungLoi='Không được để trống';
    if(nodeInput.hasAttribute('noiDungLoiDeTrong')){
        noiDungLoi=nodeInput.getAttribute('noiDungLoiDeTrong')
    }
    return noiDungLoi;
}
