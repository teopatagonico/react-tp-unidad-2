function sumar(e) {
    var num1 = parseInt(document.calculadora.num1.value)
    var num2 = parseInt(document.calculadora.num2.value)

    var suma = num1 + num2
    
    document.calculadora.res.value = suma
}

function restar(e) {
    var num1 = parseInt(document.calculadora.num1.value)
    var num2 = parseInt(document.calculadora.num2.value)

    var resta = num1 - num2
    
    document.calculadora.res.value = resta
}

function multiplicar(e) {
    var num1 = parseInt(document.calculadora.num1.value)
    var num2 = parseInt(document.calculadora.num2.value)

    var producto = num1 * num2
    
    document.calculadora.res.value = producto
}

function dividir(e) {
    var num1 = parseInt(document.calculadora.num1.value)
    var num2 = parseInt(document.calculadora.num2.value)

    if (num2 != 0){
        var cociente = num1 / num2
    } else {
        var cociente = "Division por cero"
    }

    document.calculadora.res.value = cociente
}