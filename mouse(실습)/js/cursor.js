let btn_yes;
let btn_no;
let cursorItem;
let circle;
let x=0, y = 0;
let mx=0, my = 0;

window.onload = function(){
    btn_yes = document.querySelector(".yes");
    btn_no = document.querySelector(".no");

    gateBox = document.querySelector(".gate-box");
    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");
    container1 = document.querySelector(".container1");
    container2 = document.querySelector(".container2");
    clickY = document.querySelector(".clickY");    
    clickN = document.querySelector(".clickN");    
    
    
    //네 버튼 이벤트

    btn_yes.addEventListener("click", function(e){
        gateBox.style.display = "none";
        container1.style.display = "block";
        clickY.style.display = "block";
    });

    btn_yes.addEventListener("mouseover", function(e){
        circle.style.transform = "scale(.3)";
        btn_yes.style.backgroundColor = "white"
        btn_yes.style.color = "#4197c9"
    });
    btn_yes.addEventListener("mouseout", function(e){
        circle.style.transform = "scale(1)";
        btn_yes.style.backgroundColor = ""
        btn_yes.style.color = ""
    });

    //아니오 버튼 이벤트
    btn_no.addEventListener("click", function(e){
        gateBox.style.display = "none";
        container2.style.display = "block";
        clickN.style.display = "block";
    });

    btn_no.addEventListener("mouseover", function(e){
        circle.style.transform = "scale(.3)";
        btn_no.style.backgroundColor = "white"
        btn_no.style.color = "#4197c9"
    });
    btn_no.addEventListener("mouseout", function(e){
        circle.style.transform = "scale(1)";
        btn_no.style.backgroundColor = ""
        btn_no.style.color = ""
    });

    window.addEventListener("mousemove", function(e){
        x = e.clientX;
        y = e.clientY;
        cursorItem.style.transform = "translate("+ (x-75) +"px, "+ (y-75) + "px )";
    });
    
    loop();
}

function loop(){
    mx += (x - mx ) * .09;
    my += (y - my ) * .09; 
    cursorItem.style.transform = "translate("+ (mx-75) +"px, "+ (my-75) + "px )";

    requestAnimationFrame(loop);
}