
var i = 0,txt;
txt="WELCOME TO PARADISE..🙏"
function typing(){
  if(i<txt.length){
    document.getElementById("text").innerHTML+=txt.charAt(i);
    i++;
    setTimeout(typing,100);
  }
}
typing();
/*document.getElementByClass(".section1").addEventListener("click",function(){
  var audio=new Audio("./sounds/Birds-chirping-sound-effect.mp3");
  play audio();
});*/
