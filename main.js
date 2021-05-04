const setBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');
var img = {
    img1:"./img/evolution1.png",
    img2:"./img/evolution2.png",
    img3:"./img/evolution3.png",
    img4:"./img/evolution4.png",
};

console.log(img);
console.log(img.img1);

setBtn.addEventListener('click', function() {
    showImg.innerHTML = '';
    const check = Math.floor(Math.random() * 10);
    const first = document.createElement('img');
    showImg.appendChild(first);
    first.setAttribute('src', img.img1);
    
    if (check > 3) {
        const second = document.createElement('img');
        showImg.appendChild(second);
        second.setAttribute('src', img.img2);
    }; 
    if (check > 6) {
        const third = document.createElement('img');
        showImg.appendChild(third);
        third.setAttribute('src', img.img3);
    }; 
    if (check > 8) {
        const fourth = document.createElement('img');
        showImg.appendChild(fourth);
        fourth.setAttribute('src', img.img4);
    }; 
});

resetBtn.addEventListener('click', () => {
    console.log(showImg);
    showImg.innerHTML = '';
})