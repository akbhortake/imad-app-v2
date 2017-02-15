//console.log('Loaded!');

var element=document.getElementById("main_containt");
element.innerHTML="jal an dhur sangatach";

var myvar;
var pxmo=0;
var img =document.getElementById('madi');
img.onclick=function(){
   myvar= setInterval(myfun,1);
    };
function myfun()
{
    pxmo=pxmo+1;
    img.style.marginLeft = pxmo.toString()+"px";
}    