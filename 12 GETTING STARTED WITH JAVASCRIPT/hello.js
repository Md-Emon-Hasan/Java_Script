console.log(21);
console.log('hello world');

var price = 12;
console.log(price);

// kon type er data newa hoise seta dekhar jono
var BananaPrice = 20;
console.log(typeof BananaPrice);

var name = "Emon Hasan";
console.log(name);

//kon type er data newa hoise seta dekhar jonno
var name = "Emon Hasan";
console.log(typeof name);

var isHot = true;
var isRich = false;
console.log(isHot);

var promise = "Dhaka is CAPITAL the of Bangladesh";
//sob text ke lowecase korar jonno
console.log(promise.toLowerCase());
//sob text ke uppercase korar jonno
console.log(promise.toUpperCase());
//text er nirdisto kono word er position khojar jonno
console.log(promise.indexOf("CAPITAL"));
console.log(promise.indexOf("hard"));
//text single line ke majhkhan theke Quote akare alada korar jonno
console.log(promise.split("CAPITAL"));

var number1 = 25;
var number2 = 15.5;
console.log(number1 + number2);

//parseFloat use korle calculation er floating number change hoy na
var number1 = 25;
var number2 = 15.5;
number2 = parseFloat(number2);
console.log(number1 + number2);

//parseInt use korle calculation er floating number chyange hoy and purno shonkha hoy
var number1 = 25;
var number2 = 15.5;
number2 = parseInt(number2);
console.log(number1 + number2);

var number1 = 0.1;
var number2 = 0.2;
console.log(number1 + number2);

//toFixed use korle doshomik er porer number gula nirdisto vabe use kora jay
var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
total = total.toFixed(5);
console.log(total);

var number1 = 25;
var number2 = 35;
var total =(number1 + number2);
console.log(total);

var number1 = 25;
var number2 = 35;
var total = (number1 - number2);
console.log(total);

var number1 = 25;
var number2 = 35;
var total = (number1 * number2);
console.log(total);

var number1 = 25;
var number2 = 35;
var total = (number2 / number1);
console.log(total);

//vagsesh ber korte chaile
var number1 = 25;
var number2 = 35;
var total = (number2 % number1);
console.log(total);

//variable er shate aro number add korte chaile
var price = 25;
var newPrice = price + 10;
console.log(newPrice);

var price = 25;
price ++;
console.log(price);

var price = 25;
price --;
console.log(price);

var name ="Alu Price = ";
var price = 25;
var result= (name + price);
console.log(result);

var name = "Emon";
var name1 = "hasan";
var result = (name + " " + name1);
console.log(result);

//minus value mulok data ke plus sign akare show korate chaile
var number1 = -5;
var abslouteNumber = Math.abs(number1);
console.log(abslouteNumber);

//floating number ke around figure e show korate chaile
var number1 = 15.3444;
var abslouteNumber = Math.round(number1);
console.log(abslouteNumber);

//floating number ke around figure e show korate chaile
var number1 = 15.5444;
var abslouteNumber = Math.round(number1);
console.log(abslouteNumber);

//floating number ke around figure e show korate chaile
var number1 = 15.099999999;
var abslouteNumber = Math.ceil(number1);
console.log(abslouteNumber);

//floating number ke around figure e show korate chaile
var number1 = 20.999999;
var abslouteNumber = Math.floor(number1);
console.log(abslouteNumber);

//random number show korate chaile
var number1 = 15.3444;
var abslouteNumber = Math.random(number1);
console.log(abslouteNumber);

//nirdisto number er shate random number goon kore random number show korate chaile
var number1 = Math.random()*100;
var result = Math.random();
console.log(result);

//nirdisto number er shate random number goon kore random er shate round figure number show korate chaile
var number1 = Math.random()*100;
var result = Math.round(number1);
console.log(result);

var price = 12;
if (price < 10) {
    console.log("I will eat the Biscuits");
} else {
    console.log("I will eat the Tea");
};

var price = 12;
if (price == 12) {
    console.log("I will eat the Biscuits");
} else {
    console.log("I will eat the Tea");
};

var price = 12;
if (price != 10) {
    console.log("I will eat the Biscuits");
} else {
    console.log("I will eat the Tea");
};

var job = true;
var money = 500000;
if (job === true && money > 400000) {
    console.log("Congratulation.You are selected.");
} else {
    console.log("Better luck for next time.");
};

var job = false;
var money = 500000;
if (job === true && money > 400000) {
    console.log("Congratulation.You are selected.");
} else {
    console.log("Better luck for next time.");
};

var job = true;
var money = 200000;
if (job === true || money > 400000) {
    console.log("Congratulation.You are selected.");
} else {
    console.log("Better luck for next time.");
};

var job = true;
var money = 30000;
if (job === true && money > 400000) {
    console.log("Congratulation.You are selected.");
}
else if(job = true){
    console.log("You are selected for viva.");
}
else {
    console.log("Better luck for next time.");
};

//date show korate chaile
var date = new Date("1971-12-26");
console.log(date);
