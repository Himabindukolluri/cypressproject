const { concat } = require("async")

describe('Javascript Basics',()=>{


    it('Variables',()=>{
    
     
        //concatenate arrays

        let numbers=[10.89,45,23,56,78,23,46,678,78,23,34,45,67,7890]
        let min=Math.min(...numbers)
        console.log(min)

let max=Math.max(...numbers)
console.log(max)

//without this

let fruit1=['Apple','Banana','Grapes','Orange']
let fruit2=['Pineapple','Guava','Strawberry']
let fruits=fruit1. concat(fruit2)
console.log(fruits)

let allFruits=[...fruit1,...fruit2]
console.log(allFruits)

let newFruits=['Bluberry','Raspberry',...fruit1,...fruit2,'Pear']
console.log(newFruits)
    })
    
    })
    