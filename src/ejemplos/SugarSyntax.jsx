function cuadrado (param) {
    return num*num
}
const cuadrado2 = (num) => {
    return num * num
}
const cuadrado3 = num => (num * num)

console.log(cuadrado(1))

// destructuring
const user = {
    nombre: 'mikka',
    edad: 37
}
const nombre = user.nombre
const { nombre: nombre3 } = user

const colores = ['rojo', 'azul', 'violeta']
const [one, two, three] = colores

const edad = 18
let message = edad >= 18 ? 'yup':'nope';

if (edad >= 18) {
    message = 'Over 18'
} else {
    message = 'Under 18'
}

//spread 
const numeros = [ 1,2,3]
otrosnumeros = [...numeros, 4]

const masData = {
    ...usuario,
    mail: 'mail@mail.com'
}

//optional chaining 
const user2 = {
    profile:{
        name: 'nammee'
    }
}
console.log(user2?.profile?.nombre)