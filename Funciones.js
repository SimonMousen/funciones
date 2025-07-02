function saludar(nombre){
    return `Hola, ${nombre}`
}
console.log(saludar("Jose"))


const suma = function(num1, num2) {
    return num1+num2
}
console.log(suma(3, 5))


const doble = (num) => {
    return num*2
}
console.log(doble(4))


function pares(num){
    if(num % 2 == 0){
        return true
}else {
    return false
}}
console.log(pares(6))


function saludo(hola="Buenos dias"){
    return `${hola} Jose`
}
console.log(saludo())
console.log(saludo("Hola"))


const mensaje = () => {
    return "Javascript es genial"
}
console.log(mensaje())


(function() {
    console.log("Soy una IIFE")
})()


//EJERCICIOS INTERMEDIOS

const sumaArr = function(arr) {
    return arr.reduce((total, num) => total + num, 0)
}
console.log(sumaArr([1, 2, 3]))


function multiplicar(...numeros){
    return numeros.reduce((total, num) => total * num, 1)
}
console.log(multiplicar(2, 3, 4))


function crearContador() {
    let contador = 0
    return function() {
        contador++
        return contador
    }
}
const contador1 = crearContador()
console.log(contador1())
console.log(contador1())
console.log(contador1())


const calculadora = {
    sumar: function(a, b){
        return a + b
    }, resta: (a,b) => a-b}
console.log(calculadora.sumar(5, 3))
console.log(calculadora.resta(5, 3))


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(5))


const filtrarMayores = (arr) => arr.filter(num => num > 10)
console.log(filtrarMayores([5, 12, 8, 15]))


function calcularArea(base = 1, altura = 1) {
    return base * altura
}
console.log(calcularArea(5))
console.log(calcularArea(5, 3))


//EJERCICIOS AVANZADOS

function procesar(array, callback) {
  return array.map(callback)
}
console.log(procesar([1, 2, 3], num => num * 2))


function crearSaludo(saludoBase) {
  return function(nombre) {
    return `${saludoBase}, ${nombre}`
  }
}
const saludarConHola = crearSaludo("Hola")
console.log(saludarConHola("Ana"))


const resultado = (function(a, b) {
  return a + b
})(3, 5)
console.log(resultado)


const persona = {
  nombre: "",
  presentarse: function() {
    return `Mi nombre es ${this.nombre}`
  }
}
persona.nombre = "Ana"
console.log(persona.presentarse())


function promedio(...numeros) {
  const suma = numeros.reduce((total, num) => total + num, 0)
  return suma / numeros.length
}
console.log(promedio(10, 20, 30))


function componer(func1, func2) {
  return function(x) {
    return func2(func1(x))
  }
}
const duplicar = x => x * 2
const sumarDiez = x => x + 10
const combinada = componer(duplicar, sumarDiez)
console.log(combinada(5))