//common function
function getFullName(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    return fullName;
};
const name = getFullName("Hnaif", "Paribahan");
console.log(name);

//common function with argument
function getFullName1(firstName, lastName) {
    console.log(arguments);
    const fullName = firstName + " " + lastName;
    return fullName;
};
const name1 = getFullName1("Abul", "Kalam", "Azad", "Hnaif", "Songket", "Paribahan");
console.log(name1);

function getFullName2(firstName, lastName) {
    console.log(arguments);
    let fullName2 = "";
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName2 = fullName2 + " " + namePart;
    }
    return fullName2;
};
const name2 = getFullName2("Abul", "Kalam", "Azad", "Hnaif", "Songket", "Paribahan");
console.log(name2);

//common function
function welComeGuest(name) {
    console.log(name);
}
const actorName = "Tom Hanks";
welComeGuest(actorName);

//common function
//ei function tate error ase eta ber korte pari nai
// function welComeGuest(name2, greetHandler1) {
//     greetHandler1(name2);
// }
// const actorName1 = "Tom Hanks";
// function greetMorning(name2) {
//     console.log("Good Morning", name2);
// }
// welComeGuest(actorName1, greetMorning);

//common function
//ei function tate error ase eta ber korte pari nai
// function welComeGuest(name, greetHandler) {
//     greetHandler(name);
// };
// const actorName1 = "Tom Hanks";
// function greetMorning(name) {
//     console.log("Good Morning", name);
// };
// function greatEvening(name) {
//     console.log("Good Evening");
// };
// function greatAfternoon(name) {
//     console.log("Good Afternoon");
// };
// welComeGuest(actorName1, greetMorning);

// function with callback
// function tate error ase solve korte pari nai 
// function handleClick() {
//     console.log("some one click me");
// }
// document.getElementById("click").addEventListener("click", handleClick);

//local variable function
function addToDo(task) {
    const newTaskElement = document.createElement("li");
};

//global variable function
var name10 = "Rashed";
function addUser() {
    console.log(name10);
}
addUser();

//immedieatly inbooking function
(function () {
    nameHere = "Rafsan";
    console.log(nameHere);
})();