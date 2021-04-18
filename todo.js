//////////////////////////////////////////////////
/* 
    3-5. Making a To Do List part One
    - to Do List를 local Storage 저장 없이 일단 출력
    - 새로고침하면 사라짐

    3-6. Making a To Do List part Two
    - to Do List를 local Storage에 저장
    - Array 타입

    3-7. Making a To Do List part Three
    - to do list 삭제 버튼 기능 구현
    - localStorage에서 값을 삭제한 후 저장 -> HTML에서도 삭제해야 한다.
*/
//////////////////////////////////////////////////

/*
    서로 다른 js 파일안에 있다 하더라도 같은 html에서 사용되기 때문에
    clock.js에 있는 상수 form(또는 그 다른 상수...)와 이름을 똑같이하면 안된다.
*/

const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
/*
    const인 경우 deleteToDo에서 값 교체가 안되기 때문에 let으로 변경 필요
    const toDos = [];
*/
let toDos = [];

function deleteToDo(event){

    /*
        event.target: event의 target(어떤 것에서 이벤트가 발생했는지 보여준다.)
        console.dir: 해당 객체의 전체 정보를 보여준다.
            --> 내가 객체를 사용해야 하는데 그 객체를 모르겠을 때 dir로 다 호출해서 확인해보는 것도 방법
        removeChild(없앨 자식 객체): 부모 객체로부터 자식 객체 제거할 때 사용
    
        filter()
            - array의 모든 아이템을 통해 함수를 실행하고 그 값이 true인 것만 return하여 새로운 array 만든다.
    */
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    // HTML에 없는 li를 가진 toDo를 체크하여 새로운 toDoList Array(cleanToDo) 만든다.
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); // li.id는 deleteToDo 함수에서 삭제되는 li
    });
    
    // 새로 만든 cleanToDos로 toDos를 교체해준다.
    // 이미 위에서 html은 없애줬기 때문에 localStorage에서만 삭제해주면 끝
    toDos = cleanToDos;
    saveToDos();
}

/*
    saveToDos()
    - 내가 작성한 todo를 localStorage에 저장하는 함수
    - 브라우저는 자바스크립트의 Data 타입을 반영해서 localStorage에 저장하지 않는다.(오직 String만 제대로 저장)
    - 브라우저에 String 타입으로 보내기 위해서는 JSON.stringify 필요
    - JSON.stringify: 자바스크립트의 Object 객체를 String으로 변환해준다.
    - JSON: 자바스크립트가 데이터를 다룰 수 있도록 String으로 변환하거나, object로 변환하는 기능인 셈
*/
function saveToDos(){

    // localStorage.setItem(): 동일한 key가 localStorage에 있는 경우 덮어쓴다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

let idNumber = 0;

// 내가 작성한 todo를 list에 보여주는 함수
function paintToDo(text){

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");

    const newId = idNumber;
    
   
    /*
        const newId = toDos.length + 1;
        ... --> 선생님 해결책    
    
        const newId = toDos[toDos.length-1].id + 1;
        ... --> 왜 이거 해결 안되나요??

        일단 함수 외부에 전역 변수로 idNumber를 만들어서 ++을 하는 방식으로 이용
    */
    
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text; // 인자로 들어온 값을 span에 넣어준다.

    // appendChild: 뭔가를 해당 부모 객체 안에 넣는다.
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    
    const toDoObj = {
        text: text,
        id: newId // 첫번재 toDoList의 id가 1이 되도록
    }

    // toDos 배열에 입력한 toDoObj를 push한 후 toDos를 localStorage에 저장한다.
    toDos.push(toDoObj);
    saveToDos();

    idNumber++;
}

// todo입력 후 submit했을 때 처리하는 함수
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null){

        /*
            JSON.parse(): 브라우저의 객체를 자바스크립트로 쉽게 다룰 수 있게 Object로 변형
        */

        const parsedToDos = JSON.parse(loadedToDos);

        /*
            익명함수 만들어서 즉시 실행

             forEach(인자)
                - array에 들어있는 함수로 array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 주는 것
                - 인자는 array의 각각 요소들을 순서대로 끌어온다.
                - 이 안에 꼭 익명함수만 있어야 하는건 아니고, 그냥 밖에 함수 만들고 호출해서도 사용 가능
        */

        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
