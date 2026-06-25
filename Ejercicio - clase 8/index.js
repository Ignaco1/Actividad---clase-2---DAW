// ============================================================
// PUNTO 1 - Variables y Operadores
// ============================================================

var tittle = document.getElementById("titulo")
var tituloString = document.getElementById("tituloString")
var tituloContarLetras = document.getElementById("tituloContarLetras")
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var inputString1 = document.getElementById("inputString1")
var inputString2 = document.getElementById("inputString2")
var inputStringLetras1 = document.getElementById("inputStringLetras1")
var inputStringLetras2 = document.getElementById("inputStringLetras2")
var button = document.getElementById("boton")
var buttonConcatenar = document.getElementById("botonConcatenar")
var buttonContarLetras = document.getElementById("botonContarLetras")

button.addEventListener("click", sumar)
buttonConcatenar.addEventListener("click", concatenar)
buttonContarLetras.addEventListener("click", contarLetras)

// 1a: suma de dos números
function sumar(){
    var suma = parseInt(input1.value) + parseInt(input2.value)
    tittle.innerText = "Resultado de la suma = " + suma
    console.log(suma)
}

// 1b: concatenar dos strings
function concatenar(){
    var concatenacion = inputString1.value + inputString2.value
    tituloString.innerText = "Suma de string = " + concatenacion
    console.log(concatenacion)
}

// 1c: sumar el largo de dos strings
function contarLetras(){
    var letras = inputStringLetras1.value.length + inputStringLetras2.value.length
    tituloContarLetras.innerText = "Cantidad de letras = " + letras
    console.log(letras)
}


// ============================================================
// PUNTO 2 - Strings
// ============================================================

var tituloMayusculas = document.getElementById("TituloMayusculas")
var inputMayusculas = document.getElementById("inputMayusculas")
var buttonMayusculas = document.getElementById("botonMayusculas")
buttonMayusculas.addEventListener("click", convertirMayusculas)

// 2a: toUpperCase
function convertirMayusculas(){
    var mayusculas = inputMayusculas.value.toUpperCase()
    tituloMayusculas.innerText = "Texto en mayusculas = " + mayusculas
    console.log(mayusculas)
}

// 2b: primeros 5 caracteres
document.getElementById("botonPrimeros5").addEventListener("click", function(){
    var texto = document.getElementById("inputPrimeros5").value
    var primeros5 = texto.substring(0, 5)
    document.getElementById("tituloPrimeros5").innerText = "Primeros 5 caracteres = " + primeros5
    console.log(primeros5)
})

// 2c: últimos 3 caracteres
document.getElementById("botonUltimos3").addEventListener("click", function(){
    var texto = document.getElementById("inputUltimos3").value
    var ultimos3 = texto.substring(texto.length - 3)
    document.getElementById("tituloUltimos3").innerText = "Ultimos 3 caracteres = " + ultimos3
    console.log(ultimos3)
})

// 2d: primera letra mayúscula, resto minúscula
document.getElementById("botonPrimeraLetra").addEventListener("click", function(){
    var texto = document.getElementById("inputPrimeraLetra").value
    var resultado = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase()
    document.getElementById("tituloPrimeraLetra").innerText = "Primera letra mayuscula = " + resultado
    console.log(resultado)
})

// 2e: posición del primer espacio con indexOf
document.getElementById("botonEspacio").addEventListener("click", function(){
    var texto = document.getElementById("inputEspacio").value
    var posicion = texto.indexOf(" ")
    document.getElementById("tituloEspacio").innerText = "Posicion del primer espacio = " + posicion
    console.log(posicion)
})

// 2f: capitalizar las dos palabras usando indexOf, substring, toUpperCase, toLowerCase
document.getElementById("botonDosPalabras").addEventListener("click", function(){
    var texto = document.getElementById("inputDosPalabras").value.toLowerCase()
    var posEspacio = texto.indexOf(" ")
    var palabra1 = texto.substring(0, 1).toUpperCase() + texto.substring(1, posEspacio)
    var palabra2 = texto.substring(posEspacio + 1, posEspacio + 2).toUpperCase() + texto.substring(posEspacio + 2)
    var resultado = palabra1 + " " + palabra2
    document.getElementById("tituloDosPalabras").innerText = "Resultado = " + resultado
    console.log(resultado)
})


// ============================================================
// PUNTO 3 - Arrays
// ============================================================

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

// 3a: mostrar meses 5 y 11 (índice 4 y 10)
document.getElementById("botonMeses5y11").addEventListener("click", function(){
    var mes5 = meses[4]
    var mes11 = meses[10]
    document.getElementById("tituloMeses5y11").innerText = "Meses 5 y 11 = " + mes5 + ", " + mes11
    console.log(mes5, mes11)
})

// 3b: ordenar alfabéticamente
document.getElementById("botonOrdenar").addEventListener("click", function(){
    var ordenado = [...meses].sort()
    document.getElementById("tituloOrdenado").innerText = "Array ordenado = " + ordenado
    console.log(ordenado)
})

// 3c: agregar al principio y al final
document.getElementById("botonAgregar").addEventListener("click", function(){
    var copia = [...meses]
    copia.unshift("MesInicio")
    copia.push("MesFin")
    document.getElementById("tituloAgregar").innerText = "Array con elementos agregados = " + copia
    console.log(copia)
})

// 3d: quitar del principio y del final
document.getElementById("botonQuitar").addEventListener("click", function(){
    var copia = [...meses]
    copia.shift()
    copia.pop()
    document.getElementById("tituloQuitar").innerText = "Array tras quitar elementos = " + copia
    console.log(copia)
})

// 3e: invertir el orden
document.getElementById("botonInvertir").addEventListener("click", function(){
    var invertido = [...meses].reverse()
    document.getElementById("tituloInvertir").innerText = "Array invertido = " + invertido
    console.log(invertido)
})

// 3f: unir con guión
document.getElementById("botonJoin").addEventListener("click", function(){
    var unido = meses.join(" - ")
    document.getElementById("tituloJoin").innerText = "String unido = " + unido
    console.log(unido)
})

// 3g: slice de Mayo (índice 4) a Noviembre (índice 10, no incluye el 11)
document.getElementById("botonSlice").addEventListener("click", function(){
    var copia = meses.slice(4, 11)
    document.getElementById("tituloSlice").innerText = "Copia Mayo-Noviembre = " + copia
    console.log(copia)
})


// ============================================================
// PUNTO 4 - If Else
// ============================================================

// 4a: número aleatorio entre 0 y 1
document.getElementById("botonRandom").addEventListener("click", function(){
    var numero = Math.random()
    document.getElementById("tituloRandom").innerText = "Numero aleatorio = " + numero.toFixed(4)
    if (numero >= 0.5) {
        alert("Greater than 0,5")
    } else {
        alert("Lower than 0,5")
    }
    console.log(numero)
})

// 4b: evaluar edad
document.getElementById("botonEdad").addEventListener("click", function(){
    var edad = parseInt(document.getElementById("inputEdad").value)
    var resultado = ""
    if (edad < 2) {
        resultado = "Bebe"
    } else if (edad >= 2 && edad <= 12) {
        resultado = "Niño"
    } else if (edad >= 13 && edad <= 19) {
        resultado = "Adolescente"
    } else if (edad >= 20 && edad <= 30) {
        resultado = "Joven"
    } else if (edad >= 31 && edad <= 60) {
        resultado = "Adulto"
    } else if (edad >= 61 && edad <= 75) {
        resultado = "Adulto mayor"
    } else {
        resultado = "Anciano"
    }
    document.getElementById("tituloEdad").innerText = "Resultado edad = " + resultado
    alert(resultado)
    console.log(resultado)
})


// ============================================================
// PUNTO 5 - For
// ============================================================

var palabras = ["javascript", "programacion", "desarrollo", "frontend", "navegador"]

// 5a: mostrar cada palabra con alert
document.getElementById("botonPalabras").addEventListener("click", function(){
    for (var i = 0; i < palabras.length; i++) {
        alert(palabras[i])
    }
    document.getElementById("tituloPalabras").innerText = "Palabras = " + palabras
    console.log(palabras)
})

// 5b: capitalizar primera letra de cada palabra y mostrar con alert
document.getElementById("botonCapitalizadas").addEventListener("click", function(){
    var capitalizadas = []
    for (var i = 0; i < palabras.length; i++) {
        var capitalizada = palabras[i].substring(0, 1).toUpperCase() + palabras[i].substring(1)
        capitalizadas.push(capitalizada)
        alert(capitalizada)
    }
    document.getElementById("tituloCapitalizadas").innerText = "Palabras capitalizadas = " + capitalizadas
    console.log(capitalizadas)
})

// 5c: armar sentence juntando todas las palabras
document.getElementById("botonSentence").addEventListener("click", function(){
    var sentence = ""
    for (var i = 0; i < palabras.length; i++) {
        sentence = sentence + palabras[i] + " "
    }
    document.getElementById("tituloSentence").innerText = "Sentence = " + sentence
    alert(sentence)
    console.log(sentence)
})

// 5d: llenar array con números del 0 al 9
document.getElementById("botonArrayNumeros").addEventListener("click", function(){
    var arrayNumeros = []
    for (var i = 0; i < 10; i++) {
        arrayNumeros.push(i)
    }
    document.getElementById("tituloArrayNumeros").innerText = "Array de numeros = " + arrayNumeros
    console.log(arrayNumeros)
})


// ============================================================
// PUNTO 6 - Funciones
// ============================================================

// 6c: función que valida si un número es entero
function validateInteger(numero) {
    return Number.isInteger(numero)
}

// 6d y 6e: función separada que valida entero y convierte si tiene decimales
function validarYConvertir(numero) {
    if (!validateInteger(numero)) {
        alert("Uno de los parametros tiene decimales, se redondeara al entero mas cercano")
        return Math.round(numero)
    }
    return numero
}

// 6a, 6b, 6d: función suma con validaciones
function funcionSuma(a, b) {
    // 6b: validar que sean números
    if (isNaN(a) || isNaN(b)) {
        alert("Error: uno de los parametros no es un numero")
        return NaN
    }
    // 6d: validar que sean enteros, si no convertir
    a = validarYConvertir(a)
    b = validarYConvertir(b)
    return a + b
}

document.getElementById("botonSumaFuncion").addEventListener("click", function(){
    var a = parseFloat(document.getElementById("inputSuma1").value)
    var b = parseFloat(document.getElementById("inputSuma2").value)
    var resultado = funcionSuma(a, b)
    document.getElementById("tituloSumaFuncion").innerText = "Resultado suma = " + resultado
    console.log(resultado)
})