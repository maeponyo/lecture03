function go(){
var a = 0;
var b = 1;
var c;
var out = document.getElementById("out");
out.innerHTML += b; 

while (b <= 1000){
var c = a + b;
  out.innerHTML += "<br>" + c;
  a = b;
  b = c;}

}