function getnumber(num){
    var number=document.getElementById("history");
    number.value+=num;
}

function getclear(){
    var a=document.getElementById("history");
    var e=document.getElementById("ans");
    a.value="";
    e.value="";
}
function operation(){
    var op=document.getElementById("ans");
    op.innerHTML=eval(history.value);
}
function backspace(){
    var back=document.getElementById("history");
    back.innerHTML=history.value.slice(0,-1);
}




