let vector1:Array<number>=[9,8,7,6]
vector1.push(10)
vector1[1]=22
for(let tem of vector1)
    console.log(tem);


///----------------------------------------

let tem:(number|string)[]=[]
tem.push('Mario')
tem.push(123)
///-----------------------------------------

interface Alumno{
    matricula?:number;
    nombre:string;
    edad:number;
    email:string;
}

const alumno:Alumno={
    matricula:1234,
    nombre:'mario',
    edad:23,
    email:'mario@gmail.com'
}

//any 
let mascotas=['perro','gatos',100,true]
//let tem:(boolean|number|string)[]=['aaaa',100]
let nombres:string[]=['Juan','Pedro','Mario']

// interface es como una clase o molde
interface Persona{
    nombre:string;
    grupo:string;
    edad:number;
    materias:string[];
    //signo de interrogacion significa que es opcional
    activo?:string
}
const alumno1:Persona={
    nombre:'Mario',
    grupo:'IDGS123',
    edad:23,
    materias:['Español']
};
alumno1.activo="inscrito";
console.log(alumno1)

