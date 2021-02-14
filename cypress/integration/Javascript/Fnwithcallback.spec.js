describe('Javascript Basics',()=>{


    it('Variables',()=>{
    
     let add=(a,b)=>{
         return a+b
     }
     let sub=(a,b)=>{
         return a-b
     }
     let calculator=(a,b,callback)=>{
         return callback(a,b)
     }
    let sum =calculator(5,6,add)
    console.log(sum)

    let minus=calculator(4,3,sub)
    console.log(minus)
    })
    
    })
    