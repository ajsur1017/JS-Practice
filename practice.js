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
// paste your code as a snippet in a thread on slack and give the post an emoji

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
