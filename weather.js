//////////////////////////////////////////////////
/* 
   3-9 Getting the Weather part One Geolocation
   - 위치 정보

   3-10 Getting the Weather part Two API
   - 날씨 정보 with API(https://home.openweathermap.org/api_keys)
*/
//////////////////////////////////////////////////

const weather = document.querySelector(".js-weather");
const API_KEY = "09062df488493f65510e46700fa97428";
const COORDS = 'coords';

/*
    API를 이용해 날씨 정보 가져오기
    fetch(): 브라우저에서 지원하는 함수로 jQuery처럼 원격 API 호출 가능
*/
function getWeather(lat, lon){

    /*
        원래는 화씨, 켈빈... 어쩌고 여튼 다른 기준으로 온도가 나왔는데 units=metric 을 추가해 단위 변경
        API 문서를 보면 이런 활용 방법이 잘 나온다.

        fetch(api URL).then(response) 
         - 이 때 then은 fetch를 이용해서 API값을 다 불러온 다음에! 그 다음에! 호출되는 함수를 적어주면 된다.
         - .then()이 아니라 그 밑에 새로운 코드를 작성하면 fetch로 json 다 불러오기 전에 함수가 실행되어 제대로 된 결과값을 얻을 수 없다.
         - .then()을 그 뒤에 또 써서 response의 json 값을 가져온 뒤 처리할 함수를 호출한다.(그 전에는 대기 상태의 값만 표현된다.)

    */

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
       return response.json();       
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML=`${temperature} @ ${place}`;
    });
   
}

// 코드 localStorage에 저장 함수
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 위치값 가져오기 성공했을 때 콜백할 함수
// 받아올 인자를 크롬 콘솔을 이용해 확인 가능
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        /*
            latitude: latitude,
            longitude: longitude

            --> key, value 값 일치시켜서 저장할 때 value값 생략해서 작성 가능
        */

        latitude,
        longitude
    }

    saveCoords(coordsObj);
    getWeather(latitude, longitude); // 날씨 정보 가져오는 함수
}
// 위치값 가져오기 실패했을 때 콜백할 함수
function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

/*
    loadCoords()
    - 코드값을 확인해서 만약 비어있으면 코드를 물어보고,
      만약 코드값이 있다면 getWeather 함수를 호출해 날씨값을 가져온다.
*/
function loadCoords(){
    const loadedCoord = localStorage.getItem(COORDS);
    if(loadedCoord===null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoord);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();