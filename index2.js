//////////////////////////////////////////////////
/* 2-2. JS DOM Function ~ */
//////////////////////////////////////////////////

console.log(document);
/*
    아래 내용 실습을 위해 주석 처리

    const title = document.getElementById("title");
    console.log(title);
    title.innerHTML = "Hi! From JS";

    console.error("Fuck");
*/

//////////////////////////////////////////////////
/* 2-3. Modifying the DOM with JS */
//////////////////////////////////////////////////

/* -> 아래 수업을 위해 주석 처리

console.dir(title); // title에서 내가 할 수 있는 것들을 보여준다.
title.style.color = 'red';
title22.style.color = 'pink';
// titleClass.style.color = 'yellow';

*/

/*
    일부분 생략해도 알아서 최대한 맞춰보여주려한다.
    getElementById없이 그냥 id이름.style.color했더니 변경됨
    근데 class는 그렇게 안되나봐....
*/

/* --> 아래 수업을 위해 주석 처리

console.dir(document);
document.title = "i own you now";

const title2 = document.querySelector("#title");
title2.innerHTML = "Hi! From JS";


    querySelector: 노드의 첫번재 자식 반환
    document.querySelector("#title"): document 객체에서 id==title인 자식을 찾는다.
    (클래스 이름으로 하고 싶으면 #대신 .을 사용 --> (#title -> .title))
*/

//////////////////////////////////////////////////
/* 2-4. Events and evnet Handler */
//////////////////////////////////////////////////

/*
function handleResize(){
    console.log("I have been resized");
}

//window.addEventListener("resize", handleResize); // ... handleResize 이벤트가 발생했을 때 마다 함수 호출
window.addEventListener("resize", handleResize()); // ... handleResize() 바로 함수를 호출(이벤트 상관없이) --> 정작 이벤트 발생할 때 제대로 안나옴
*/

function handleResize(event){
    console.log(event); // --> 이벤트 객체에 대한 정보 출력 가능
}

window.addEventListener("resize", handleResize); 

/*
    const title = document.getElementById("title");

    20라인(console.dir(title))에서 이미 자체적으로 title 가져다 쓰고 있는데,
    밑에서 같은 이름 변수 만들어버리면 이거는 찐이고 위에건 지들이 알아서 만든거라
    위에거 읽을 때 에러가 발생한다.


function handleClick(event){
    title.style.color= "blue"; 
    console.log("click");
}

*/

/*
    클릭 이벤트가 한 번 발생한 거 같지만 그냥 이미 색이 바뀐 상태라 계속 그린으로 변경해도 티가 안나는 것
    console.log. 찍어보면 계속 click이벤트 발생하고 이를 처리하고 있는 것을 확인할 수 있다.

title.addEventListener("click", handleClick);
*/



//////////////////////////////////////////////////
/* 2-5. 첫번째 조건문. if, else, and, or */
//////////////////////////////////////////////////

if("nicolas" === "necoloas"){
    console.log("hi");
} else if("10" === "10"){
    console.log("ho");
} else {
    console.log("lalala");
}

/*
    1. = 
    ex) const lalala = 'lalala'; --> lalala라는 변수는 'lalala'라는 데이터 타입이 스트링인 값을 할당
    2. ===
    ex) 10 === 5 --> 값을 할당하지 않는다. 값의 일치 여부를 체크(값, 데이터 타입 등이 완전히 일치하는지)
    ex) 10 === '10' > false
    3. ==
    ex) 10 == '10' -> true
    데이터 타입이 달라도 값이 일치하면 일치한다고 표시

    https://velog.io/@filoscoder/-%EC%99%80-%EC%9D%98-%EC%B0%A8%EC%9D%B4-oak1091tes
    
    - 자바스크립트는 엄격한 비교와 유형변환 비교를 모두 지원
    - ===: 변수 유형까지 고려하여 비교
    - ==: 변수 값을 기반으로 유형을 수정하여 비교

    - boolean: false(0) true(1)
            --> 0 == false (true)
            --> 0 === false (false)
    - null(type: object) undefiend(type: undefined)
            --> null == undefined (true)
            --> null === undefiend (false)
            ... null은 명시적으로 값이 비어있는 객체임을 나타낼 때 사용.
            ... undefiend는 값이 할당되지 않은 변수로 타입또한 undefined
    
*/

if(20 > 25 || "nicolas!" === "nicolas"){
    console.log('yes');
} else {
    console.log('no');
}

/*
    A && B
    -> A,B 모두 참이어야 참으로 출력

    A || B
    -> 둘 중 하나만 참이어도 참으로 출력

    true && true = true;
    false && true = false;
    true && false = false;
    false && false = false;

    true || true = true;
    false || true = true;
    true ||false = true;
    false || false = false;
*/

/*
--> 아래 수업을 위해 주석 처리

const age = prompt("How old are you");
console.log(age);

if(age >= 18 && age <= 21) {
    console.log('you can drink but you should not');
} else if(age > 21){
    console.log('go ahead');
} else {
    console.log('too young');
}

*/

//////////////////////////////////////////////////
/* 2-6. DOM If else Function practice */
//////////////////////////////////////////////////


// 색상 변경하기 로직

const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 83)";
const OTHER_COLOR = "#8e44ad";

function handleClick(event){
    console.log("click?");
    const currentColor = title.style.color;
    
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color= BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();

/*
    init() 함수는 즉시 동작 ... 즉, 브라우저 켜지면 바로 스탠바이
    그리고 그 안에  title.addEventListener("click", handleClick); 를 넣어둠
*/


// 인터넷 연결 끊겼을 때, 연결됐을 때 처리되는 로직

function handleOffline(){ // ... 연결X될 때 
    console.log("lalala");
}
function handleOnline(){ // ... 연결O될 때 
    console.log("와이파이 켰다");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);