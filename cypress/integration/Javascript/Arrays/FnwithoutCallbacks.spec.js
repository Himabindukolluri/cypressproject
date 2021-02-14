describe('Javascript',()=>{
    it('fnwithoutcallback',()=>{

        let calculator=(a,b,operator)=>{
            let result=''
            if(operator==='add')
            {
                result=a+b;
            }
            if(operator==='sub')
            {
                result=a-b;
            }
            return result
        }
let result=calculator(4,3,'add')
console.log(result)

let substraction=calculator(4,3,'sub')
console.log(result)
    })
})