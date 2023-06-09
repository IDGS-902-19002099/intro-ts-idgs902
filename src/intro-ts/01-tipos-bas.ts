// titulo:TIPOS DE DATOS EN TYPESCRIPT
//declaracion de variables
var num1=23;
const num2=566;
let nombre:string="RCR";
//nombre=35

// nota: se usa | para decir que pueden ser diferentes variables
// nota: let es la declaracion de una variable que cambia, const no cambia
let datos:string|number=95 
let matricula:number|string=12345


datos="IDGS123";
matricula='abd123';

let vector:number[]=[1,4,3]
vector[2]=8
vector.push(9)
for(let elemento of vector)
console.log(elemento)

let vivo:boolean=false

console.log(matricula)
console.log(vivo)
console.log(num1+num2)
// nota:en typescript debes ser especifico
