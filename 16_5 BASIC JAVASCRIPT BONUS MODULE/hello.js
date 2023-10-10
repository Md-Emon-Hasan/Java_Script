//for loop er details
var marks = [89, 97, 89, 68, 94, 86, 79];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    console.log(element);
}

//function diya bistarito variable declear korar niom
function add(number1, number2) {
    var total = number1 + number2;
    return total;
};
var result1 = add(65, 89);
console.log(result1);
var result2 = add(144, 588);
console.log(result2);

function largestNumber(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        console.log(element);
    }
}
largestNumber([45, 78, 89]);

function largestNumber(numbers) {
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > larger) {
            larger = element;
        }
    }
    return larger;
}
var output = largestNumber([10, 20, 30, 40, 50]);
console.log(output);

//factorial er math ber korar niom
function factorial(num) {
   var fact = 1;
   for (var i = 1; i <= num; i++) {
       fact = fact * i;
       console.log(i, fact);
   }
}
var result = factorial(5);
console.log(result);

//factorial er math ber korar niom
function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
 }
 var result = factorial(5);
 console.log(result);

//factorial with recursive way
function factorialRecursive(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * factorialRecursive(num - 1);
    }
}
var result = factorialRecursive(5);
console.log(result);

//kisu somoy por por value er man bar te thakle seta ber korar upay
var  depth = 17;
var animal = 0;
if (depth <= 10) {
    animal = depth * 50;
} else if(depth <= 20){
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = firstPart + secondPart;
}
else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = firstPart + secondPart + thirdPart;
}
console.log(animal);

//kisu somoy por por value er man bar te thakle seta ber korar upay
function animalCalculator(depth) {

    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    } else if(depth <= 20){
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}
var count = animalCalculator(22);
console.log(count);
