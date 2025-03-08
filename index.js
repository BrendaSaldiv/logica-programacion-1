let number1 = prompt("Ingresa un numero");
let number2 = prompt("Ingrese otro numero");
let number3 = prompt("ingrese otro número");

number1 = parseFloat(number1);
number2 = parseFloat(number2);
number3 = parseFloat(number3);

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Verifica que todos los datos ingresados sean números")
} else {
    let numeros = [number1, number2, number3];

    let numerosOrdenAscendente = numeros.sort(function (a, b) {
        return a - b;
    });
    console.log("Numeros ordenados de menor a mayor " + numeros);
    let numerosOrdenDescendente = numeros.sort(function (a, b) {
        return b - a;
    });
    console.log("Numeros ordenados de mayor a menor " + numeros);
}

if (number1 === number2 && number2 === number3) {
    console.log("Los tres números son iguales.");
} else if (number1 === number2 || number2 === number3 || number1 === number3) {
    console.log("Al menos dos de los números son iguales.");
} else {
    console.log("Todos los números son diferentes.");
}