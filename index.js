//////////////////////////////////////////////////
/* 2-7. DOM If else Function Practice part Two */
//////////////////////////////////////////////////

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// 클래스 이름 가져와서 값 비교 후 h1 태그의 text 색상 변경
function handleClick(){

    title.classList.toggle(CLICKED_CLASS);
    /*
        해당 객체에 인자에 해당하는 클래스가 존재하면 제거한 후 false를 반환
        없는 경우 클래스를 추가하고 true 반환
    */

    /*
    
    ---> 지금 이부분의 내용을 toggle 함수를 이용해 처리 가능

    const hasClass = title.classList.contains(CLICKED_CLASS); // return: true or false
    //const currentClass = title.className; ... -> btn clicked로 바뀐 이후에는 적용X
    
    if(!hasClass) {
    // ---> 포함 여부를 if 조건에 넣었기 때문에 해당 코드로 btn 클래스 외에도 clicked 클래스를 추가, 삭제 가능
    //if(currentClass !== CLICKED_CLASS) {

        title.classList.add(CLICKED_CLASS); 
        
        //title.classList.add(CLICKED_CLASS); ... -> btn clicked로 바뀐 이후에는 적용X
        //title.className = CLICKED_CLASS; ... -> 기존에 다른 class가 있을 경우 대체된다.
    } else {

        title.classList.remove(CLICKED_CLASS);

        //title.classList.remove(CLICKED_CLASS); ... -> btn clicked로 바뀐 이후에는 적용X
        //title.className =""; ... -> 클래스 이름이 clicked인데 클릭한 경우 클래스 이름 없애기, 단 기존에 다른 클래스가 설정된 경우 대체된다.
    }

    */
}

function init() {
    title.addEventListener("click", handleClick);
}

init();

