const myFunc1 = (aFunc) => {
    aFunc('hello')
}
myFunc1(console.log)

const myArr = [1,2,3,4,5]

const filterOver2 = (value, index) => {
    return value < 3
}

const newArr = myArr.filter(filterOver2)
console.log(newArr)
// OR
const newArr2 = myArr.filter((value, index) => {
    return value < 3;
})
console.log(newArr2)