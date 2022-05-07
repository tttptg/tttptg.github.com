function myFunction1(){
    document.getElementById("p1").style.color="red";
}

function myFunction2(){
    var Dates = new Date();
    var Y = Dates.getFullYear();
    var M = Dates.getMonth() + 1;
    var D = Dates.getDate();
    var times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
    document.querySelector("h1").innerHTML=times;
}

function myFunction3(){
    document.getElementById("p3").classList.add("fn-active");
}

function myFunction4(){
    var parents = document.getElementById("ul1");
    var child = document.getElementById("p8");
    parents.removeChild(child);
}

function myFunction5(){
    window.open("http://www.taobao.com");
}

function myFunction6(){
    var parents = document.getElementById("ul1");
    var para = document.createElement("li");
    var t = document.createTextNode("p9");
    para.appendChild(t);
    parents.appendChild(para);
}

function myFunction7(){
    document.getElementsByTagName("div")[0].style.width="100%";
}

function control(i){
    alert(i+1);
}