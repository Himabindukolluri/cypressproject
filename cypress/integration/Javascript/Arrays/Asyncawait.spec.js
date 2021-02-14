describe('Javascript Basics',()=>{


    it('Variables',()=>{

let students=[
    {
        name:'Peter',
        id:1,
        rollNumber:1,
        age:21,
        course:'painting',
    },
    {
        name:'John',
        id:2,
        rollNumber:2,
        age:22,
        course:'cooking',
    },
    {
        name:'Alex',
        id:3,
        rollNumber:3,
        age:19,
        course:'yoga',
    },

]

let createstudent=(student)=>{
    students.push(student)
}
let init=async(()=>{
    await createstudent(`{name:'Dave',id:4,rollNumber:4,age:23,course:'Sketching'}`)
})
init()
console.log(students)
    })
})