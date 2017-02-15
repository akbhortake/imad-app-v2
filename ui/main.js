//console.log('Loaded!');

var element=document.getElementById("main_containt");
element.innerHTML="jal an dhur sangatach";

var myvar;
var pxmo=0;
var img =document.getElementById('madi');
img.onclick=function(){
   myvar= setInterval(myfun,1000);
    };
function myfun()
{
    pxmo=pxmo+10;
    img.style.marginLeft = pxmo.toString()+"px";
}    