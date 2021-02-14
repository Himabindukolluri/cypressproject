describe('Javascript Basics',()=>{


    it('defaultparameters',()=>{
    
    let numbers=function(a,b=6)
    {
        let result=a+b
    console.log(result)
} 
    numbers(4,5)
    numbers(5)
    numbers('not defined', 4)
    numbers(7)

    let person=function(name,age)
     {
        let message = `Hello ${name} you are ${age} years old`
       console.log(message)
    }
    person('John',50)
    person('Dave')

  
    })
    
    })