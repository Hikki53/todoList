const body = document.querySelector("body");


const IMG_NUMBER = 8;



function paintImage(imgNum){
    const image = new Image();
    image.src=`images/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image)
}



function genRandom(){
    const number = Math.floor(Math.random() * 8);
    return number;
}



function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();