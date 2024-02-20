const increasebtn=document.getElementById("increasecount");
const resetbtn=document.getElementById("resetcount");
const decreasebtn=document.getElementById("decreasecount");
const countlabel=document.getElementById("counterlabel");

let count=0;
increasebtn.onclick = function(){
    count++;
    countlabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
