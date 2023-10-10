var inch = 156;
var feet = inch / 12;
console.log(feet);

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var rahimFeet = inchToFeet(156);
console.log(rahimFeet);
var karimFeet = inchToFeet(144);
console.log(karimFeet);

//length ber korte chaile
var name1 = "javed";
console.log(name1.length);

var name1 = "javed";
if (name1.length < 6) {
    var name1 = "javed karim";
}
console.log(name1);

const conutry = "Bangladesh";
console.log(conutry);

let country1 ="Bangladesh";
console.log(country1);

console.log(2032 / 4);

//leap year hobe naki seta check korte chaile
const year = 3940;
let reminder = year % 4;
console.log(reminder == 0);

var year1 = 3097;
var remainder = year1 % 4;
// console.log(reminder == 0);
if (remainder == 0) {
    console.log("Your year is a Leap Year");
} else {
    console.log("Your year is not a Leap Year");
};

//factorial akare gon korar khetre

var factorial = 1;
for (var i = 1;  i <= 10; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
};

//factorial akare gon korar khetre
function factorial1(n) {
    var factorial1 = 1;
    for (let i = 1; i <= n; i++) {
        factorial1 = factorial1 * i;
    }
    return factorial1;
};
var result = factorial1(10);
console.log(result);

//factorial akare gon korar khetre

var i = 1;
var factorial2 = 1;
while (i <= 10) {
    factorial2 = factorial2 * i;
    console.log(i, factorial2);
    i++;
};

//factorial akare gon korar khetre

function factorial3(n) {
    var i = 1;
    var factorial3 = 1;
    while (i <= n) {
        factorial3 = factorial3 * i;
        i++;
    };
    return factorial3;
};
var result = factorial3(5);
console.log(result);

//factorial akare gon korar khetre
function factorial4(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial4(n-1);
    }
};
var result = factorial4(10);
console.log(result);

//fibonacci mathmatics er man ber kora
var fibo = [0, 1];
for (var i = 2; i <= 12; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i], fibo[i -1], fibo[i-2]);
}
console.log(fibo);

//fibonacci mathmatics er man ber kora
function fibonacci1(n){
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = fibonacci1(15);
console.log(fibo);

//fibonacci mathmatics er man ber kora
function fibonacci2(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    } else {
        return fibonacci2(n - 1) + fibonacci2(n - 2);
    }
}
var result = fibonacci2(10);
console.log(result);

//fibonacci mathmatics er man ber kora
function fibonacci3(n) {
    if (n == 0) {
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        var fibo = fibonacci3(n - 1);
        var nextElement = fibo[n - 1] + fibo [n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci3(15);
console.log(result);

//onekgulo shonkha diye vag korar por fagfol dewar niom
var n = 28;
for (var i = 2; i < n - 1; i++) {
   console.log(i, n / i);
}

//onekgula shonkha diya vag korar por vagsesh dekhar niom
var n = 28;
for (var i = 2; i < n - 1; i++) {
   console.log(i, n % i);
}

//moulik shonkha ber korar khetre
var n = 18;
for (var i = 2; i < n - 1; i++) {
   console.log(i, n % i);
   if (n % i == 0) {
       console.log("not a prime number");
       break;
   }
}

//moulik shonkha ber korar khetre
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Not a prime number";
        }
    }
    return "Your number is a prime number";
}
var result = isPrime(139);
console.log(result);

