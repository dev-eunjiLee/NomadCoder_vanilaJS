//////////////////////////////////////////////////
/* ~2-1.1  More Function Fun ... (HTML 안건드림)*/
//////////////////////////////////////////////////

console.log('Im working. Im JS. Im Beatuiful. Im worth it');

const a = 221;
var b = a-5;

/* 
a=4;

위에서 a를 const 타입으로 지정했기 때문에 새로 변경 불가
Uncaught TypeError: Assignment to constant variable. _ const 변수에 할당
 */


//////////////////////////////////////////////////
/* Data Types on JS */
//////////////////////////////////////////////////

console.log(b, a);

// 1. String 
const what1 = "Nicolas"; 
console.log(what1);
/*
const what = Nicolas; 
Uncaught ReferenceError: Nicolas is not defined
String 타입의 데이터를 저장할 때 ""가 빠지면 해당 이름의 변수를 코드에서 찾는다.
*/

// 2. boolean(True or False) -> not text
const what2 = true;

// 3. number
const what3 = 111;

// 4.float(떠돌이 소숫점을 가지고 있다.)
const what4 = 55.1;

//////////////////////////////////////////////////
/* Organizing Data with Arrays */
//////////////////////////////////////////////////

const monday = "Monday";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);

const daysOfWeek = [monday, tue, wed, thu, fri, true, 43, 22];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
console.log(daysOfWeek[21]); // undefined(존재하지 않음)

//////////////////////////////////////////////////
/* Organizing Data with Objects */
//////////////////////////////////////////////////

// 1. Array
const nicoInfo1 = ["Nicolas", "55", true, "Seoul"];
console.log(nicoInfo1);

// 2. Object
const nicoInfo2 = {
    name: "Nico",
    age: 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name: "Kimchi", 
            fatty: false
        },
        {
            name: "Cheeseburger", 
            fatty: true
        }
    ]
}

console.log(nicoInfo2);

/*
    {name: "Nico", age: 33, gender: "Male", isHandsome: true, favMovies: Array(3), …}
    age: 33
    favFood: (2) [{…}, {…}]
    favMovies: (3) ["Along the gods", "LOTR", "Oldboy"]
    gender: "Female"
    isHandsome: true
    name: "Nico"
    __proto__: Object

    --> 콘솔에서 왜 Female 변경된게 찍히는지 모르겠네...
*/

// Objects의 변수 변경 -> 내부의 property는 변경 가능하지만, object 전체는 못바꾼다.
nicoInfo2.gender = "Female"; // ... OK
//nicoInfo2 = true // ... NO

console.log(nicoInfo2.gender);

//////////////////////////////////////////////////
/* Your first JS Function */
//////////////////////////////////////////////////

const nicoInfo3 = {
    name: "Nico",
    age: 33,
    gender: "Male",
    isHandsome: true,
}

console.log(nicoInfo3.favFood);
console.log(nicoInfo3, console); // console도 object

// 내멋대로 만든 함수
/*
    const hello;
    new function hello(params1, params2) {
        console.log(params1, params2);
    }

    hello("hello", "Eunji");
*/

// 찐 수업 함수
function sayHello(potato, chicken){ // 파라미터 이름은 내멋대로
    console.log("hello!", potato, "you have ", chicken);
    // console.log(args1, args2)
    // log도 함수 -> "hello"가 파라미터
}
sayHello("potatotototo"); // 함수가 받는 파라미터가 2개인데 1개만 입력한 경우 undefined로 출력
sayHello("apple", 222); // 함수가 받는 파라미터가 1개일 경우 222는 처리 X
console.log();


// 수업 함수 응용
function sayHello2(param){
    for(var i=0; i<param.length; i++){
        console.log("hello", param[i]);
    }   
}

sayHello2(["Eunji", "Nico"]); // hello Eunji, Hello Nico
sayHello2("Ethan"); // Hello E, Hello t, Hello h, Hello a, Hello n

//////////////////////////////////////////////////
/*More Function Fun */
//////////////////////////////////////////////////

function sayHello3(name, age){
    // `(백틱)으로 String을 입력하고 필요한 변수를 ${변수명}을 통해 넣어준다.
    console.log(`Hello ${name} you are ${age} years old.`);
}
sayHello3("Nicolas", 15);

// return
function sayHello4(name, age){
    console.log(`Hello ${name} you are ${age} years old.`);
    //return `Hello ${name} you are ${age} years old.`;
    return `Return sayHello4()`;
}
const greetNicolas = sayHello4("Nicolas", 14);
// greetNicolas는 sayHello4()의 리턴값이 저장된다.
console.log(greetNicolas);

// 나만의 객체, 함수 만들기
const calculator = {
    plus: function (a, b) {
        return a+b;
    }
}

const result = calculator.plus(5, 6);
console.log(result);

