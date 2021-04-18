//////////////////////////////////////////////////
/* 
    3-3. Saving the User Name part One
    local storage: 유저 브라우저의 저장 공간
                   URL을 기반으로 움직이기 때문에 페북의 localStorage에 저장된 값을 다른 URL로 가져올 수 없다.

    3-4. Saving the User Name part Two
    input에서 유저 정보 가져오기
*/
//////////////////////////////////////////////////

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

    /*
        querySelector(): 첫번째 자식을 객체로 가져온다.
        querySelectorAll(): 모든 자식을 객체로 가져온다.(배열타입으로)
            -> 1개의 객체를 가져올 때도 배열(array) 타입으로 가져온다.
    */

/*
    유저 이름 출력 함수
    form을 안보이게 한 후 greeting 부분으로 Hello username 출력
*/
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

/*
    askForName()
        유저 이름 요청 함수
        form을 통해 username을 받는다.
        form의 submit 이벤트를 처리하기 위해 handleSubmit 함수 사용        
    
    handleSubmit(event)
        submit 이벤트를 중지시킨 후, form을 없애고 paintGreeting을 이용해 userName을 보여준다.
        그 후 saveName 함수를 이용해 localStorage에 이름을 저장한다.
    
    saveNmae(text)
        입력받은 text를 localStorage에 저장한다.
*/

function saveName(text){
    localStorage.setItem("currentUser", text);
}

function handleSubmit(event){
    event.preventDefault(); // 이벤트의 기본값을 막는다.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        // 유저가 없는 경우
        
        askForName();
        

    } else {
        // 유저가 있는 경우

        paintGreeting(currentUser);
        
    }
}

function init(){
    loadName();
}

init();
