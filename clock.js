//////////////////////////////////////////////////
/* 3-1. Making a JS Clock Part One */
/* 3-2. Making a JS Clock Part Two */
//////////////////////////////////////////////////

/*
    const clockContainer = document.querySelector(".js-clock");
    const clockTitle = clockContainer.querySelector("h1");

    ... --> const 변수 여러개 쓰는 경우 , 쓴 다음 const 생략 가능
*/

const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    // nesting templates -> 중첩 백틱 사용 가능
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;

}   

function init(){
    getTime(); // 이걸 넣어주면 처음 화면 시작할 때 부터 시간이 등장(즉시 실행 함수니까)
    setInterval(getTime, 1000);
}

init();