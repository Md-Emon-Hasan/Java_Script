//simple vabe velue ber korar upay
const person = {name: "Jack Willim", age: 20, gf: "Emma Watson", friend: "Tom Hanks, Tom Cruise, Tom Holand"};
console.log(person.gf);

//shortcut vabe jekono value er man ber korar upay
const person1 = {name: "Jack Willim", age: 20, gf: "Emma Watson", friend: "Tom Hanks, Tom Cruise, Tom Holand"};
const gfName = person1.gf;
const age = person1.age;
console.log(gfName, age);

//simple vabe show korar jonno
const friends = ["Salman Khan", "Shahrukh Khan", "Aamir Khan"];
const [firstFriend, secondFriend] = friends;
console.log(firstFriend, secondFriend);

//simple vabe show korar jonno
const friends1 = ["Salman Khan", "Shahrukh Khan", "Aamir Khan"];
const [firstFriends, ...secondFriends] = friends1;
console.log(...secondFriends);

const complexObject = {
    name: "abc",
    info: {
        address: "kola bagan",
        leader: "tiger Leader"
    }
}
const {leader} = complexObject.info;