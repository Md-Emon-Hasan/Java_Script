function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, ": is even number");
    }
    else{
        console.log(num * 2, ": is odd number");
    }
}
var result = evenify(5);
console.log(result);

//return er bistarito
function evenify(num) {
    if (num % 2 == 0) {
        return num;
    }
    else{
        console.log(num * 2, ": is odd number");
    }
}
var result = evenify(10);
console.log(result);

//retur er bistariyo
function evenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    }
    else{
        result = num * 2;
    }
    return result;
};
var result = evenify(13);
var square = result * result;
console.log("Square:", square);

//function with callback
//etate vul ase & ami nijeo buji nai
function explain_callback(name, age, task) {
    task();
    console.log("hello", name);
    console.log("your age", age);
    // console.log("scroll", task);
}
function washHand() {
    console.log("wash hand with soap");
}
function takeShower() {
    console.log("Take shower");
}
function scrollFacebook() {
    console.log("scroll facebook but dont like any post");
}
explain_callback("sogir uddin", 17, washHand);
explain_callback("jogir uddin", 13, takeShower);
explain_callback("mugir uddin", 21, scrollFacebook);

//Argument
function addNumber1(num1, num2) {
    return num1 + num2;
}
var result = addNumber1(3, 5);
console.log(result);

//Argument use korar niom
function addNumber(num1, num2) {
    console.log(arguments);
    return num1 + num2;
}
var result = addNumber(3, 5, 8, 15, 29);

//Argument diya nidisto data dekhar niom
function addNumber2(num1, num2) {
    console.log(arguments[3]);
    return num1 + num2;
}
var result = addNumber2(3, 5, 8, 15, 29);

//argument diya sob kisu show korate chaile
function addNumber3(num1, num2) {
    console.log(arguments[3]);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        console.log(num);
    }
    return num1 + num2;
}
var result = addNumber3(3, 5, 8, 15, 20);
console.log(result);

//arguments er maddhome sob array jog korte chaile
function addNumber4(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + sum;
    }
    return sum;
}
var result = addNumber4(20, 20);
console.log(result);

function addNumber5(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + sum;
    }
    function logInfo(massage) {
        console.log(massage);
    }
    logInfo("Good morning");
    return sum;
}
var result = addNumber5(20, 20);
console.log(result);
