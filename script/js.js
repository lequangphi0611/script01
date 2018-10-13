function BMI(weight, height){
  return weight/(height * height);
}

function phanLoai(bmi){
  if(bmi<18.5){
    return "Thiếu cân";
  }else if(bmi > 25){
    return "Thừa cân";
  }else{
    return "Cân đối";
  }
}

function getBMI(){
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var showElement = document.getElementById('show');//show ra màn hình

  if(weight == "" || height == ""){
      showElement.innerHTML = "Vui lòng nhập đầy đủ dữ liệu";
  }else if(isNaN(weight) || isNaN(height)){
    showElement.innerHTML ="Dữ liệu nhập vào không phải số";
  }else{
    weight = parseFloat(weight);
    height = parseFloat(height);
    if(weight <= 0 || height <= 0){
      showElement.innerHTML = "Dữ liệu nhập vào phải lớn hơn 0";
    }else{
      var bmi = BMI(weight,height);
      var message = "Chỉ số BMI "+ bmi + " - " +"Người "+ phanLoai(bmi);
      showElement.innerHTML = message;
    }
  }
}
