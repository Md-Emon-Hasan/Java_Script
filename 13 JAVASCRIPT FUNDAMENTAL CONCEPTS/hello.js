var friendAge = [15,16,17,18];
console.log(friendAge);

//Array ber korte chaile
var friendAge = [15,16,17,18];
console.log(friendAge[2]);

//nirdisto vabe arry ber korte chaile
var friendAge = [15,16,17,18];
var rahimAge = friendAge[3];
console.log(rahimAge);

//array er maddhome data er man change korte chaile
var friendAge = [15,16,17,18];
friendAge[1] = 20;
console.log(friendAge);

//array er position korte chaile
var friendAge = [15,16,17,18]
var position = friendAge.indexOf(16);
console.log(position);

//array er position khuje na paile
var friendAge = [15,16,17,18];
console.log(friendAge.indexOf[100]);

//data er shate notun data add korte chaile
var friendAge = [15,16,17,18];
friendAge.push(19);
console.log(friendAge);

//array er lenght/element ber korte chaile
var friendAge = [15,16,17,18];
console.log(friendAge.length);
var friendAge = [15,16,17,18,19,20];
console.log(friendAge.length);

//data er moddhe last er data remove korte chaile
var friendAge = [15,16,17,18,19];
friendAge.pop();
console.log(friendAge);

//data er moddhe first er data remove korte chaile
var friendAge = ["rahim","abul","kalam"];
friendAge.shift();
console.log(friendAge);

//data er moddhe first e data add korte chaile
var friendAge = ["abul","kalam","azad"];
friendAge.unshift("rahim");
console.log(friendAge);

//array er moddhe nirdisto kono array show korate chaile
var name1 = ["rahim","karim","abul","kalam","azad"];
var updateName = name1.slice(2);
console.log(updateName);

//array er moddhe nirdisto kono array show korate chaile
var name1 = ["rahim","karim","abul","kalam","azad","manik"];
var updateName = name1.slice(2,4);
console.log(updateName);

//while loop
var num = 10;
while (num < 15) {
    console.log(num);
    num++;
};

//while loop
var num = 10;
while (num <=15) {
    console.log(num);
    num++;
};

//for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
};

//for loop
for (var i = 0; i <= 10; i++) {
    console.log(i);
};

//for loop
var num = [55, 56, 57, 58, 59, 60, 61, 62];
for (var i = 0; i < num.length; i++){
    var element = num[i];
    console.log(element);
};

//switch
var num = 20;
switch (num) {
    case 1000:
        console.log("I am 1000");
        break;
    case 100:
        console.log("I am 100");
        break;
    case 20:
    case 10:
        console.log("I am either 10 or 20");
        break;
    default:
        console.log("I don't know who you are");
        break;
};

//set function
function number1(){
    console.log("how are you");
    console.log("what is new about you");
}
number1();

//set function
function number2(){
    console.log("how are you");
    console.log("what is new about you");
}
number2();
number2();
number2();

//value er man double ba dui goon korte chaile
function doubleIt(num) {
    var result = num * 2;
    console.log(result);
}
doubleIt(10);
doubleIt(50);

function doubleIt(num) {
    var result = num * 2;
    return result;
}
var first = doubleIt(10);
var second = doubleIt(50);
console.log(first,second);

function doubleIt(num) {
    var result = num * 2;
    return result;
}
var first = doubleIt(10);
var second = doubleIt(50);
console.log(first + second);

function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var sum = add(15,17);
console.log(sum);

var student1 = {id:121, phone:1785, name:"abir"};
var student2 = {id:131, phone:4569, name:"mahin"};
console.log(student1);
console.log(student2);

//nirdisto vabe akta variable theke object show kora
var student1 = {id:121, phone:1785, name:"abir"};
var phoneNo = student1.phone;
console.log(phoneNo);

//nirdisto vabe akta variable theke object show kora
var student1 = {id:121, phone:1785, name:"abir"};
var phoneNo = student1["phone"];
console.log(phoneNo);
