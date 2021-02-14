describe('operator',()=>{

    it('logical',()=>{

let a=10
let b=5
let c=6
let d=7
console.log(a>b && d>c)
console.log(b<c && c>d)
console.log(c>d &&b<c)
console.log(a<c &&d>c)

console.log(a>b || d>c)
console.log(b<c || c>d)
console.log(c>d ||b<c)
console.log(a<c ||d<c)

    })

})