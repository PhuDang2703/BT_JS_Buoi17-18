// Bài tập buổi 7+8 JS
var listNum = [];
function addNum() {
  var numBer = document.getElementById("txtNum").value*1;

  listNum.push(numBer);

  document.getElementById("interfaceListNumber").innerHTML = listNum;
}
// 1. Tổng số dương
function tongSoDuong(){
  var sumPlus = 0;
  for (var i = 0; i < listNum.length; i++){
    if(listNum[i] > 0){
      sumPlus += listNum[i];
    }
  }
  var ketQua1 = "Tổng các số dương là: " + sumPlus;
  document.getElementById("infoTongSoDuong").innerHTML = ketQua1;
}
// 2. Đếm số Dương
function demSoDuong(){
  var demSo = 0;
  for (var i = 0; i< listNum.length; i++){
    if(listNum[i]>0){
      demSo++;
    }
  }
  ketQua2 = "Số dương xuất hiện là: " + demSo;
  document.getElementById("infoDemSoDuong").innerHTML = ketQua2;
}
// 3. Tìm số nhỏ nhất
function soMin(){
  var min = listNum[0];
  for (i = 0; i < listNum.length; i++){
    if(min>listNum[i]){
      min = listNum[i];
    }
  }
  ketQua3 = "Số nhỏ nhất là: " + min;
  document.getElementById("infoSoNhoNhat").innerHTML = ketQua3;
}
//4. Tìm số dương nhỏ nhất
function soDuongNhoNhat (){
  var minDuong = listNum[0];
  for (i=0; i<listNum.length; i++){
    if(minDuong>listNum[i] && listNum[i]>0){
      minDuong = listNum[i]; 
    }
  }
  ketQua3 = "Số dương nhỏ nhất là: " + minDuong;
  document.getElementById("info4").innerHTML = ketQua3;
}
//5. Tìm số chẵn cuối cùng trong mảng
function soChanCuoi(){
  for (i=0; i<listNum.length; i++){
    var chanCuoi = listNum[i] % 2;
    if(chanCuoi == 0){
      rS = listNum[i];
    }
  }
  ketQua4 = "Số chẵn cuối trong dãy là: " + rS;
  document.getElementById("info5").innerHTML = ketQua4
}
//6. Đổi chỗ 2 giá trị trong mảng theo vị trí
function doiCho2So(){
    var vitri1 = document.getElementById("viTri1").value * 1;
    var vitri2 = document.getElementById("viTri2").value * 1;
    var result;
    vitri1 = vitri1 - 1;
    vitri2 = vitri2 - 1;
    for (var i = 0; i < listNum.length; i++) {
      if (i == vitri1) {
          var swap = listNum[i];
          listNum[i] = listNum[vitri2]
          listNum[vitri2] = swap;
          result = "Mảng sau khi đổi là: " + listNum;
          document.getElementById("info6").innerHTML = result;
      };
  };
}
//7. Sắp xếp mảng theo thứ tự tăng dần
function xepTangDan() {
  var result;
  for (var i = 0; i < listNum.length; i++) {
      for (var j = i + 1; j < listNum.length; j++) {
          if (listNum[i] > listNum[j]) {
              var swap = listNum[i];
              listNum[i] = listNum[j];
              listNum[j] = swap;
          };
      };
  };
  result = "Sắp xếp tăng đần: " + listNum;
  document.getElementById("info7").innerHTML = result;
};
//9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?

var lisNumber1 = [];
function themso1() {
    var numBer=document.getElementById("numBer1").value*1;
    lisNumber1.push(numBer);
    document.getElementById("interfaceListNumber").innerHTML=lisNumber1;
};
function demSoNguyen() {
    var result=0;
    for(var i=0;i<lisNumber1.length;i++){
       var soNguyen = Number.isInteger(lisNumber1[i]);
      if (soNguyen===true){
        result++;
      } ;
    };
    document.getElementById("info9").innerHTML=result;
};
//10. So sánh số lượng số dương và số lượng số âm
function soSanh() {
  var soduong = 0;
  var soam = 0;

  for (var i = 0; i < listNum.length; i++) {
      var item = listNum[i];
      if (item > 0) {
          soduong++;
      } else if (item < 0) {
          soam++;
      };
  };
  if (soduong == soam) {
      result = "Số Dương = Số Âm";
  } else if (soduong < soam) {
      result = "Số Dương < Số Âm";
  } else if (soduong > soam) { 
      result = "Số Dương > Số Âm"; 
  }
  document.getElementById("info10").innerHTML = result;
};