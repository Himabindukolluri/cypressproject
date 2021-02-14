describe('Array',()=>{


    it('Array',()=>{
    
     
    let colour=['Red','Blue','Green','White','Yellow']
    console.log(colour)

    //shift

    colour.shift()
    console.log(colour)

    //unshift
   colour.unshift('Black')
   console.log(colour)

   //pop
   colour.pop()
   console.log(colour)

   //push
   colour.push('Purple')
   console.log(colour)

   //splice
   colour.splice(3)
   console.log(colour)

   colour.splice(1,0,'Grey','Pink')
   console.log(colour)

   colour.splice(2,1)
   console.log(colour)

//reverse
   colour.reverse()
   console.log(colour)

   //sort
   colour.sort()
   console.log(colour)

colour.splice(3)
console.log(colour)

 
    let fruit=['Apple','Mango', 'Grapes','Banana']

    fruit.splice(2)
    console.log(fruit)
    })
})