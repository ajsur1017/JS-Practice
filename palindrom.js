const palindrome = (word) => {
    var splitStr = word.split('')
    var revStr = splitStr.reverse()
    var joinStr = revStr.join('')
    if (joinStr === word) {
        return `${word} is a palindrome`
    } else {
        return `${word} is not a palindome`
    }
}
console.log(palindrome('racecar'))
console.log(palindrome('monkey wrench'))

const palindrome2 = (testParam) => {
    var result = testParam.split('').reverse().join('')
    if (result === testParam) {
        return `${testParam} is a palindrome`
    } else {
        return `${testParam} is not a palindome`
    }
} 
console.log(palindrome2('racecar'))

function palindrome3(str) {
 // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
 var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
 var lowRegStr = str.toLowerCase().replace(re, '');
 // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
 // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
 // var lowRegStr = "amanaplanacanalpanama";
    
 // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
 var reverseStr = lowRegStr.split('').reverse().join(''); 
 // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
 // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
 // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
 // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
 // And, var reverseStr = "amanaplanacanalpanama";
  
 // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
 return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}
console.log(palindrome3("A man, a plan, a canal. Panama"))
console.log(palindrome3('racecar'))
