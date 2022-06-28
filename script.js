var result = "";
var is_calculator = false;

// display表示
window.onload = function () {
  result = document.getElementById('result');
};

// クリア
function c_click(){
  result.value = "0";
  is_calculator = false;
}

// 数字キー処理
function num_click(val){
  if(is_calculator)  result.value = "0";
  is_calculator = false;  

  if(result.value =="0" && val == "0"){
    result.value = "0";
  }else if(result.value == "0" && val == "."){
    result.value = "0.";
  }else if(result.value == "0"){
    result.value = val;
  }else{
    result.value += val;
  }
}

// 演算子キー処理
function ope_click(val){
  if(is_calculator)  is_calculator = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
}

// 計算
function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);

  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calculator = true;
  }
}

// 演算子の確認
function is_ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}