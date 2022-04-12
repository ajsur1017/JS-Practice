const array = [1,2,3,4,5,6,7,8,9,10]
// console.log(array.length)
array.push("adds to the end of the array")
// console.log(array)
array.unshift("adds to the start of the array")
// console.log(array)
array.pop()
// console.log("---just removed the last item from array---")
// console.log(array)
array.shift()
// console.log("---just remove the start item from array---")
// console.log(array)


// Create an array with 3 characters from your favorite TV show
// log the array and the length
// remove the last and first value of the array
// add another character to the front and back of the array
// log the array

const destinyChars = ["Cayde", "Ikora", "Zavala"]
console.log(destinyChars.length)
console.log(destinyChars)
destinyChars.pop()
destinyChars.shift()
console.log(destinyChars)
destinyChars.push("Shax")
destinyChars.unshift("Lord Saladin")
console.log(destinyChars)

const jensGarden = ['dirt', 'dirt', 'dead plant', 'dead plant', 'weed', 'weed', 'weed', 'dirt', 'dead plant']
console.log(jensGarden)
// remove all dead plants and weeds
jensGarden.splice(2, 5)
jensGarden.pop()
console.log(jensGarden)
// add some dirt
jensGarden.push('dirt', 'dirt')
console.log(jensGarden)
// plance some roses inbetween each dirt
jensGarden.splice(1, 0, "roses")
jensGarden.splice(3, 0, "roses")
jensGarden.splice(5, 0, "roses")
jensGarden.splice(7, 0, "roses")
console.log(jensGarden)
// remove dirt and replace with gnomes
jensGarden.pop()
jensGarden.shift()
jensGarden.splice(1, 1)
jensGarden.splice(2, 1)
jensGarden.splice(3, 1)
jensGarden.splice(1, 0, "gnome")
jensGarden.splice(3, 0, "gnome")
jensGarden.splice(5, 0, "gnome")
jensGarden.push("gnome")
jensGarden.unshift("gnome")
console.log(jensGarden)

// Multidimentional Arrays
var concertArray = [
    ["Billy Joel", "99", "equal.png"],
    ["Bryan Adams", "89", "higher.png"],
    ["Brian Adams", "25", "lower.png"]
];
// access 89
console.log(concertArray[1][1])
// access lower.png
console.log(concertArray[2][2])
// access Billy Joel
console.log(concertArray[0][0])
// access 99
console.log(concertArray[0][1])

// SORT
const arr = [5,4,3,2,1]
const arr2 = ['Misha', 'Bella', "Luna"]
arr.sort()
arr2.sort()
console.log(arr, arr2)
const arr3 = [2,3,3,3,4]
arr3.slice(1,3)
console.log(arr3)
// SLICE
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
console.log(arr3.slice(1,4))
// indexOf
const arr4 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1]
console.log(arr4.indexOf(7))
// string split
const hello = "Hello World"
console.log(hello.split("")) // splits each letter
console.log(hello.split(" ")) // splits each word
// array join
const suc = ["s","u","c","c","e","s"]
console.log(suc.join("")) // succes
console.log(suc.join(" ")) // s u c c e s

const myFunction = (argObject) => {
    console.log(argObject.cheese)
    console.log(argObject.bread)
}

// Objects as arguments and destructuring rguments
myFunction({
    cheese: "Gouda",
    bread: "Rye",
    taco: "this wont be there"
})
myFunction({
    taco: "wow",
    beep: "alsowow",
    boop: "meow"
}) // return two undefined since parameter objects are not called

const myFunction2 = ({cheese = "Cheddar", bread = "White"}) => {
    console.log(cheese)
    console.log(bread)
}

myFunction2({
    cheese: "Gouda",
    bread: "Rye"
})

myFunction2({}) // defualts to original declared parameters


// functions as arguements and return values

const myFunction3 = (callback) => {
    callback()
}

const argFunc = () => console.log("this function was used as an argument!")

// pass previously defined functions as arguments
myFunction3(argFunc)

// define function directly when invoking
myFunction3(() => console.log("I am an arrow function passed into a function"))

// return a function
//Function to create the function
const whoIsTheOwner = (name) => {
    return (item) => {
        console.log(`${name} is the owner of ${item}`)
    }
}

const theReturnedFunction = whoIsTheOwner("Anthony")
theReturnedFunction("PlayStation 5")
theReturnedFunction("Nintendo Switch")

const anotherReturnedFunction = whoIsTheOwner("Jen")
anotherReturnedFunction("Xbox Series X")
anotherReturnedFunction("Nintendo Switch Also")