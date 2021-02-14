describe('Javascript Basics',()=>{


    it('Variables',()=>{
    
    let products=[
        {
           name:'washingMachine',
           ID:5976543,
           price:56.99,
           available:true,
           condition:'new'
        },

        {
        name:'dryer',
        ID:5973893,
        price:99.99,
        available:true,
        condition:'used'
        },

        {
        name:'dishwasher',
       ID:58673893,
       price:99.99,
       available:false,
       condition:'used'
       },
       {
        name:'oven',
        ID:8893,
        price:234.5,
        available:false,
        condition:'new'
        }
    ] 
    let getavailable=products.filter((product)=>{
        return product.available=== false
    })

console.log(getavailable)

     let getname=products.filter((product)=>{
         return product.name==='oven'
     })
     console.log(getname)

     let getcondition=products.filter((product)=>{
    return product.condition==='new'
})
console.log(getcondition)

let getprice=products.filter((product)=>{
    return product.price===99.99
})
console.log(getprice)
    })
    
    })