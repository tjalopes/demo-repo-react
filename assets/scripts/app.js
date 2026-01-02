// import { apiKey } from "./utils";
import * as utils from "./utils.js";

//console.log('Hello World!!');

let helloWorld = 'Hello World!!';
console.log(helloWorld);

let helloWorldConcat = 'Hello' + ' ' + 'World!!';

// === compares value and type, meanwhile, == compares only value
if (helloWorld === helloWorldConcat) {
    console.log("same thing!");
}

console.log(utils.apiKey);
console.log(utils.abc);

// define code thats only executed when called and can be exexuted multiple times
// 'Hello!' acts as a default value in case the param is not sent
function createGreet(username, message = 'Hello!') {
    return message + ' My name is ' + username + '.';
}

const johnName = 'John';
const doeName = 'Doe';

// call the same function multiple times with different values
const greetingJohn = createGreet(johnName);
const greetingDoe = createGreet(doeName, 'Hello everyone!!');

console.log(greetingJohn);
console.log(greetingDoe);

function combine(a, b, c) {
    return a * b / c;
}

console.log(combine(1,2,2));

// create an object
const user = {
    name: "John Doe",
    age : 34,
    greet() {
        console.log("Hello " + this.name)
    }
};

user.greet();

// create a class
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

const user1 = new User("Tiago", 24);
console.log(user1);
user1.greet();

// create an array
const hobbies = ["Football", "Cycling"];
console.log(hobbies[0]);

// add a param to the end of the array
hobbies.push("Working");
console.log(hobbies);

// find a specific string in the object, if true it returns the index on the array
const index = hobbies.findIndex((item) => item == 'Cycling')
console.log(index);

// this create a new array and does not change the original one
// create objects inside objects with the {} inside braces telling javascript to create a new object
const editedHobbies = hobbies.map((item) => ({text: item}));
console.log(editedHobbies);

// lesson on destructuring (code commented is an example of a normal array, and then there is a destructuring example of it)

// const userNameData = ["Max", "John"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

const [firstName, lastName] = ["Max", "John"];

console.log(firstName);
console.log(lastName);

const {name: username, age} = {
    name : "Max",
    age : 34
}
console.log(username);
console.log(age);

const oldSports = ["Football", "Basketball"];
const newSport = ["Padel"];

// spread operator pulls all values seperatly and adds each individually
const allSports = [...oldSports, ...newSport];

console.log(allSports);

// control structures

// commented to not trigger the prompt every time i save
// const password = prompt('Your Password');
const password = "qwerty";
// if
if (password === "qwerty") {
    console.log("Password correct");
} else {
    console.log("Password not correct")
}

// for
const colors = ["Red", "Green"];

// it will iterate through every color
for (const color of colors) {
    console.log(color);
}

function handleTimeout () {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out ... again!");
};

// this passes the handle timout as a value instead as a function by removing the ()
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);

setTimeout(() => {
    console.log("More timing out...")
}, 4000);

function greeter(greetFn) {
    greetFn();
}

// passing it as a value and then inside it is called as a function
greeter(() => console.log("Hi"));

function init() {
    // greet function can only be executed inside the init cause of scope
    function greet() {
        console.log('Hi!');
    }

    greet();
}

init();

// reference vs primitive values
// primitive values cannot be edited, only overriden
let userMessage = 'Hello!';
userMessage = userMessage.concat('!!!');
console.log(userMessage);

const hobbies2 = ["Sports", "Cooking"];
hobbies2.push("Working");
console.log(hobbies2);

// this below will give an error, i cannot assign a new value to a constant, the code above only worked cause i was editing the value in the position of memory to which the constant was pointing
// if the comment above is confusing just search online for reference vs primitive values
// hobbies2 = []