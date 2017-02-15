//console.log('Loaded!');

var element=document.getElementById("main_containt");
element.innerHTML="jal an dhur sangatach";


var img =document.getElementById('madi');
img.onclick=function(){
    setInterval(myfun,1000);
    };
function myfun()
{
    img.style.marginLeft = "50px";
}    