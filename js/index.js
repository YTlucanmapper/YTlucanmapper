const decresebtn = document.getElementById("decresebttn");
const resetbtn = document.getElementById("resetbttn");
const incresebtn = document.getElementById("incresebttn");
const countlabel = document.getElementById("countlabel");
const multbtn = document.getElementById("multbttn");
const dividbtn = document.getElementById("dividebttn");
let count = 0;

incresebtn.onclick = function(){
    count += 1;
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count -= count;
    countlabel.textContent = count;
}

decresebtn.onclick = function(){
    count -= 1;
    countlabel.textContent = count;
}

multbtn.onclick = function(){
    count *= 2;
    countlabel.textContent = count;
}

dividbtn.onclick = function(){
    count /= 2;
    countlabel.textContent = count;
}