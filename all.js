let red = Math.floor(Math.random()*(256));
let green = Math.floor(Math.random()*(256));
let blue = Math.floor(Math.random()*(256));
let color = "";

let barRed = document.getElementById('barRed');
let redValue = barRed.value;
let barGreen = document.getElementById('barGreen');
let greenValue = barGreen.value;
let barBlue = document.getElementById('barBlue');
let blueValue = barBlue.value;


function render(){

color =`rgba(${red},${green},${blue})`;

let colorDom = document.getElementById('color');
colorDom.style="background-color:"+color;
let nowDom = document.getElementById('now');
nowDom.innerHTML=`<div>${color}</div>`

barRed.value = red;
barGreen.value = green;
barBlue.value = blue;

}
render();


function changeR(){
  let newRed = prompt('請輸入0~255的數字');
  if(newRed!==""){
      if(newRed <=255 && newRed>=0){
      red = newRed;
 
      // redValue =newRed;
      // barRed.setAttribute('value',`${redValue}`);
      render();

      }else{
        alert('錯誤! 請輸入0~255的數字');
      }
  }else{
    alert('錯誤! 數字不得為空');
  }
  if(newRed===null){
    red = Math.floor(Math.random()*(256));
    alert('喔! 不玩嗎?');
    render();
  }
}
function changeG(){
  let newGreen = prompt('請輸入0~255的數字');
  if(newGreen!==""){
      if(newGreen <=255 && newGreen>=0){
      green = newGreen;
    
      render();
      }else{
        alert('錯誤! 請輸入0~255的數字');
      }
  }else{
    alert('錯誤! 數字不得為空');
  }
  if(newGreen===null){
    green = Math.floor(Math.random()*(256));
    alert('喔! 不玩嗎?');
    render();
  }
}
function changeB(){
  let newBlue = prompt('請輸入0~255的數字');
  if(newBlue!==""){
      if(newBlue <=255 && newBlue>=0){
      blue = newBlue;
   
      render();
      }else{
        alert('錯誤! 請輸入0~255的數字');
      }
  }else{
    alert('錯誤! 數字不得為空');
  }
  if(newBlue===null){
    blue = Math.floor(Math.random()*(256));
    alert('喔! 不玩嗎?');
    render();
  }
}


function count(select) {   //連續作業
  run = setInterval(function () {
    switch (select) {
      case 'add':
        if (red < 255) red++;
        if (green < 255) green++;
        if (blue < 255) blue++;
        break;
      case 'sub':
        if (red > 0) red--;
        if (green > 0) green--;
        if (blue > 0) blue--;
        break;
      case 'rand':
        red = Math.floor((Math.random() * 256));
        green = Math.floor((Math.random() * 256));
        blue = Math.floor((Math.random() * 256));
        break;
    }
    render();
  }, 30);
}


 
function sbar(col,obj){
if(col=='r'){
   red=obj.value;
   render();
}else if(col=='g'){
   green=obj.value;
   render();
}else{
  blue=obj.value;
   render();
}
}
