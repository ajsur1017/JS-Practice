const logTheThing = (stuff = "Hello World") => {
    console.log(stuff)
}

logTheThing("cheese")
logTheThing()

const buyAPony = (name, owner, sex, age, isEvil) => {
    return {
        name,
        owner,
        sex,
        age,
        isEvil,
        ride: () => console.log(`${owner} is riding a ${sex} pony named ${name}, that is ${age} years old`)
    }
}

const myPony = buyAPony("Lightning", "Anthony", "Male", 14, true)
const jensPony = buyAPony("Diamond", "Jen", "Female", 11, false)
console.log("Anthony's Pony: ", myPony, "Jen's Pony: ", jensPony)
myPony.ride()
jensPony.ride()

const add = (x, y) => x + y
const sub = (x, y) => x - y
const mult = (x, y) => x * y
const div = (x, y) => x / y
const exp = (x, y) => x ** y

console.log(add(2,4) + add(3,2))
console.log(add(3,2) + add(4,2) - sub(1,4))

let a = 5;
a++;
const b = a
let c = 5;
c--;
const d = c

console.log(b, c)
console.log(exp(10, 2))
console.log(div(10, 2))

const isItEven = (x) => x % 2 === 0
if (isItEven(20)){
    console.log("it is even")
} else {
    console.log("it is odd")
}


const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i);
        };
    };
};
fizzBuzz()

const fizzBuzz2 = (num) => {
    if (!(num % 15)) {
        console.log(num, 'fizzbuzz')
    } else if (!(num % 3)) {
        console.log(num, 'fizz')
    } else if (!(num % 5)) {
        console.log(num, "buzz")
    } else {console.log(num)}
}
fizzBuzz2(15)
fizzBuzz2(3)
fizzBuzz2(5)
fizzBuzz2(6)
fizzBuzz2(2)

// '!' inverse, !false === true, if its not false its true
const fizzBuzz3 = (num) => {
    if (!(num % 3) && !(num % 5)) {
        console.log(num, 'fizzbuzz')
    } else if (!(num % 3)) {
        console.log(num, 'fizz')
    } else if (!(num % 5)) {
        console.log(num, "buzz")
    } else {console.log(num)}
}
fizzBuzz3(15)
fizzBuzz3(3)
fizzBuzz3(5)
fizzBuzz3(6)
fizzBuzz2(2)

const myFunc = () => {
    console.log("function stuff")
}
console.log(myFunc) // Logs the function
console.log(myFunc()) // Logs 'function stuff' and undefined since no return falue.

const myFunc2 = () => {
    return "split function stuff"
}
console.log(myFunc2().split(''))

const palindrome = (word) => {
    var splitStr = word.split('')
    var revStr = splitStr.reverse('')
    var joinStr = revStr.join('')
    if (joinStr === word) {
        return `${word} is a palindrome`
    } else {
        return `${word} is not a palindome`
    }
}
console.log(palindrome('racecar'))
console.log(palindrome('monkey wrench'))

const loopy = (num) => {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
    return num
}
loopy(10);

// RECURSION
const loopy2 = (num) => {
    if (num === 0) {
        return 0;
    } else {
        console.log(num);
        loopy2(num - 1);
    }
}
loopy2(10); 

const loopy3 = (num) => {
    if (num === 100) {
        return 100;
    } else {
        console.log(num);
        loopy3(num + 1);
    }
}
loopy3(10);


// iffy?
(() => {console.log("why do you work and what do you do???")})();

