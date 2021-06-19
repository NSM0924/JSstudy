const imgBox = document.getElementsByClassName('imgBox');
let pageTxt = document.getElementById('pageText');
let activeBox = 0;

const next = () => {
    let now = activeBox;
    activeBox++;
    if(activeBox == imgBox.length) activeBox = 0;
    imgBox[activeBox].classList.add('active');
    imgBox[now].classList.remove('active');
    pageTxt.textContent = activeBox+1
}

const prev = () => {
    let now = activeBox;
    if(activeBox == 0) activeBox = 3;
    activeBox--;
    imgBox[now].classList.remove('active');
    imgBox[activeBox].classList.add('active');
    pageTxt.textContent = activeBox+1
}

document.getElementById("nextBtn").addEventListener("click", next)
document.getElementById("prevBtn").addEventListener("click", prev)