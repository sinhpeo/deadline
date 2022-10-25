const showDataBtn = document.querySelector('#showDataBtn');


const spanMaSV = document.querySelector('#spanMaSV');
const spanLoaiSV = document.querySelector('#spanLoaiSV');
const spanTenSV = document.querySelector('#spanTenSV');
const spanDiemTB = document.querySelector('#spanDTB');
const spanXepLoai = document.querySelector('#spanXepLoai');
const errorText = document.querySelector('.error-text');
const txtMaSvElement = document.querySelector('#txtMaSV');
const txtTenSvElement= document.querySelector('#txtTenSV');
const loaiSvElement = document.querySelector('#loaiSV');
const txtDiemToanElement = document.querySelector('#txtDiemToan');
const txtDiemVanElement = document.querySelector('#txtDiemVan');

function handleShowData(){

    const MaSvValue = txtMaSvElement.value;
    const TenSvValue = txtTenSvElement.value;
    const loaiSvValue = loaiSvElement.value;
    const DiemToanValue = txtDiemToanElement.value;
    const DiemVanValue = txtDiemVanElement.value;

    let isValid = true;
    const inputArr = [txtMaSvElement, txtTenSvElement, txtDiemToanElement, txtDiemVanElement]
    //check dien kien
    for (const input of inputArr) {

    if(!input.value){
        const inputName = input.getAttribute('data-validate'); 
        input.nextElementSibling.innerText = inputName + ' k the rong';
        input.nextElementSibling.style.display = 'block';
        isValid = false ;
    }else {
        input.nextElementSibling.style.display = 'none';
    }
    }
    if(!isValid) return ;

    spanTenSV.innerText = TenSvValue;

    spanMaSV.innerText = MaSvValue;
    
    if (loaiSvValue == 1){
        spanLoaiSV.innerText = 'Ngheo';
    }else if(loaiSvValue == 2){
        spanLoaiSV.innerText = 'Giau';
    }else{
        spanLoaiSV.innerText = "Binh Thuong";
    }

    const diemTB = (Number(DiemToanValue) + Number(DiemVanValue))/2;
    
    spanDiemTB.innerText = diemTB;

    let xeploai = '';
    if (diemTB < 4){
        xeploai = 'Yeu';
    } else if(diemTB <= 6 && diemTB >= 4){
        xeploai = 'TB'  ;
    }else if(diemTB <=9 && diemTB >6 ){
        xeploai = 'Kha';
    }else{
        xeploai = "Gioi";
    }
    
    spanXepLoai.innerText = xeploai;


}

showDataBtn.addEventListener('click', handleShowData);