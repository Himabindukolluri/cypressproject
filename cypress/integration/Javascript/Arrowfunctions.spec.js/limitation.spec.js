describe('Javascript Basics',()=>{


    it('Variables',()=>{
    
     let employee={
         firstname='john',
         lastName='Dave',
         fullName=function()
         {
             return '${employee.firstname}& ${employee.lastName}'
         }
        }

         console.log(employee.fullName)
     
    
    })
    
    })