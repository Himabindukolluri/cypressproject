describe('Javascript Basics',()=>{


    it('Variables',()=>{
    
        let person = {

         firstName :'Dave',
         lastName : 'John',
         age :56,
         address : 'Milton  keynes',
         hobbies : ['Reading', 'walking','Coding']

        }

        console.log(person)
        console.log(person.firstName)
        
        person.language='English'
        person.city='London'
        console.log(person)

     let shop = {

        cars :'Audi',
        colors: 'Red',
        model:[1987,2016,2019,2020,2015]
     }
     console.log(shop)
     console.log(shop.colors)
     console.log(shop.model[2])
     console.log(shop['cars'])



     
    })
    
    })
    