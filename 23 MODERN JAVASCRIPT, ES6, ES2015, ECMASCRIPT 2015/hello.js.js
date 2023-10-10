//constant variable er bebohar 
const hollywood = "Emon Hasan";
console.log(hollywood);

//change variable data & push data
const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
console.log(numbers);

//let variable er bebohar
let patientName = "Rahim";
console.log(patientName);

let patientName1 = "Rahim";
patientName1 = "Karim";
console.log(patientName1);

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    console.log(i);
}

//simple function
function add(num1, num2) {
    return num1 + num2;
}
const total = add(15, 17);
console.log(total);

//default perameter ba backup value add korar khetre
function add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
const total1 = add(15);
console.log(total1);

//simple vabe add kora
const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName;
console.log(fullName);

//templete vabe add korar niom
const firstName2 = "Justin";
const lastName2 = "TimberLake";
const fullName2 = `${firstName2} ${lastName2}`;
console.log(fullName2);

//templete diya multiple line use korar niom
const multiline = `Dhaka
Narayanganj
Cumilla`;
console.log(multiline);

//simple vabe data er man double korar upay
function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

const doubleIt1 = function(num){
    return num * 2;
}
const result1 = doubleIt1(5);
console.log(result1);

//arrow function er maddhome double korar upay
const doubleIt2 = num => num * 2;
const result2 = doubleIt2(10);
console.log(result2);

const add1 = (x, y) => x + y;
const result3 = add1(50, 70);
console.log(result3);

const give5 = () => 5;
const result4 = give5();
console.log(result4);

//concatination
const ages = [12, 14, 16, 13, 17];
const ages2 =[12, 15, 16];
const allAges = ages.concat(ages2);
console.log(allAges);

const ages10 = [12, 14, 16, 13, 17];
const ages11 = [12, 15, 16];
const ages12 = [25, 36, 22, 29];
const allAges2 = [...ages10, ...ages11, 5, ...ages12];
console.log(allAges2);

//simple vabe maximum ber korar upay
const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPoise = [650, 450, 250];
const maximum1 = Math.max(...takaPoise);
console.log(maximum1);

//class er maddhome javascript er multiple vabe onek variable declear korar upay
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Sharifer Hat School"
    }
}
const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "Mahin");
console.log(student1, student2);

//inheritance korar upay
class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new child("Arnold");
const baby1 = new child("Tom");
console.log(baby);
console.log(baby1);

