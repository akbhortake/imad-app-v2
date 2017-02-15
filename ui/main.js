//console.log('Loaded!');

var element=document.getElementById("main_containt");
element.innerHTML="jal an dhur sangatach";


var img =document.getElementById('madi');
function myfun()
{
    img.style.marginLeft = "50px";
}
img.onclick=function(){
    setInterval(myfun(),100);
    };
    