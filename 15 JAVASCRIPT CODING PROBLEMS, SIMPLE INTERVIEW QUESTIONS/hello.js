//akta variable er man arek variable e change korar khetre
var a = 5;
var b = 7;
console.log("before swap: a=", a, "b =", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", a, "b =", b);

//akta variable er man arek variable e change korar khetre
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x, "y =", y);

//akta variable er man arek variable e change korar khetre
var p = 5;
var q = 7;
[p, q] = [q, p];
console.log("after swap: p =", p, "q =", q);

//doshomik ke purno shokha te rupantor kora
var num = 2.54554;
var result = Math.floor(num);
console.log(result);

//konta boro seta ber kora
var business = 450;
var minister = 350;
if (business > minister) {
    console.log("Business is bigger");
} else {
    console.log("Minister is bigger");
};

//konta boro seta ber kora
var business = 450;
var minister = 650;
var sochib = 550;
if (business > minister) {
    if (business > sochib) {
        console.log("business is bigger");
    } else {
        console.log("sochib is bigger");
    }
} else {
    if (minister > sochib) {
        console.log("Minister is bigger");
    } else {
        console.log("Sochib is bigger");
    }
};

//konta boro seta ber kora
var business = 450;
var minister = 650;
var sochib = 550;
var max = Math.max(business, minister);
console.log(max);

//highest value ber korar khetre
var marks = [45, 81, 63, 98, 56, 35, 23];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("highest value is:", max);

//sob array jog korar khetre
var numbers = [45, 65, 78, 12, 3, 54, 65];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
}
console.log("total of the numbers: ", sum);

//sob array jog korar khetre
function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 65];
var result = getArraySum(numbers);
console.log("Total of the numbers: ",result);

//double array thakle otirikto array remove kora
var name = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
var uniqueName = [];
for (var i = 0; i < name.length; i ++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);

//string er position ber kora
var speech = "I am a good person";
for (let i = 0; i < speech.length; i++) {
   var char = speech[i];
   console.log(char);
}

//string er position ber kora
var speech = "I am a good person";
var count = 0;
for (let i = 0; i < speech.length; i++) {
   var char = speech[i];
   if (char == " ") {
       count++;
   }
}
console.log(count);

//text ke reverse korte chaile
function reverseString(str) {
    var reverse ="";
    for (i = 0; i < str.length; str++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello, How are you?";
var forText = reverseString(statement);
console.log(forText);

