//////////////////////////////////////////////////
/* 
   3-8. Image Background
*/
//////////////////////////////////////////////////

const body = document.querySelector("body");
const IMG_NUMBER = 3; // 이미지 개수

/* 만약 API에서 이미지 끌어왔을때, 이미지 로드 다 됐을 때 나올 함수
    function handleImageLoad(event){
        console.log("finished loading");

    }
*/

// 일치하는 번호에 맞는 이미지 끌어오는 함수
function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}    

// 이미지의 개수(3개) 내에서 랜덤 숫자 생성 -> 번호에 따라 이미지 끌어오는데 사용
function genRandom(){
    const number =  Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();