describe('practise',()=>{
it('Practise',()=>{

let a=7
let b=0

console.log(a+b)

let text='Please turn it off'

console.log(text)

let c=10
c-=5
console.log(c)

let month=4
switch(month)
{
    case 1:
        console.log('January')
        break;
        case 2:
            console.log('Febrauary')
            break;
            case 3:
        console.log('March')
        break;
        case 4:
        console.log('April')
        break;
        case 5:
        console.log('May')
        break;
     default:
        console.log('Invalid Input')
        break;
}

let number=15
if(number<=10)
{
    console.log('Number is less than 10')
}
else
{
    console.log('Number is greater than 10')
}

let value=10
if(value%2)
{
    console.log('Value is even')
}
else if(value===2)
{
    console.log('Value is 2')
}
else
{
    console.log('Value is odd')
}


function message()
{
    console.log('Hello')
}
message()

//ternary

    let number1=1000
let result=(number1%2===0) ?'Even number':'Odd ';
console.log(result)

let age=35
let beverage=(age>21)?'Wine':'Soft Drink'
console.log(beverage)


let month1=2
switch(month1)
{
    case 1:
    console.log('January')
    break;
    case 2:
    console.log('February')
    break;
    default:
        console.log('Invalid Input')
        
}

let baby=(name,age)=>{
    let message = 'Hello baby ${name} you are ${age} months old '
    console.log(message)
}
baby('Ria', 9)

let seasons1=['summer','winter','rainy']
let seasons2=['autumn','fall']
let allseasons=[...seasons1,...seasons2,'snowy']
console.log(allseasons)

let info=[

{
    name:'Dave',
    job:'coding',
    jobtype:'fulltime',
    age:45,
    Hobbies:['skiing','reading','playing piano']
},

{
    name:'jack',
    job:'Tester',
    jobtype:'parttime',
    age:55,
    Hobbies:['skyjumping','reading','playing guitar']
}
]
let getjob=info.filter((info)=>{
    return info.job==='Tester'
})

console.log(getjob)

let getage=info.filter((info)=>{
    return info.age===45
})
console.log(getage)
})

})