let userName = document.getElementsByName("name")[0];
let tel = document.getElementsByName("tel")[0];
let list = document.getElementById("addrlist");
// 저장 버튼 클릭 시 이름, 전화번호를 저장하는 함수
function addAddr(){
    let userInfo = document.createElement("li");
    let userText = document.createTextNode(`${userName.value}, ${tel.value}`);
    userInfo.appendChild(userText);
    list.appendChild(userInfo);
}

// 리셋 버튼 클릭 시 저장된 이름, 전화번호를 삭제하고 배경을 원래대로 만들어주는 함수
function resetAddr(){
    list.innerHTML = "";
    document.body.setAttribute("style", "");
}

// 색상변경 버튼 클릭 시 바디 색상을 yellow컬러로 바꿔주는 함수
function changeBg(){
    document.body.style.backgroundColor = "yellow";
}
