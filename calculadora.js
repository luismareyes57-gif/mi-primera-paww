let numero1 = 10;          
let numero2 = 5;           
let operacion = "suma";     

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero.";
        }
        return num1 / num2;
    } else {
        return "Error: operación no válida.";
    }
}

let continuar = true;

while (continuar) {
 
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacionUsuario = prompt(`Ingrese la operación que desea realizar:
suma / resta / multiplicacion / division
O escriba "salir" para terminar.`);

   
    if (operacionUsuario === "salir") {
        alert("Gracias por usar la calculadora. ¡Hasta luego!");
        continuar = false;
        break;
    }

   
    let resultado = realizarOperacion(num1, num2, operacionUsuario);

  
    alert("Resultado: " + resultado);

    
    let respuesta = prompt("¿Desea realizar otra operación? (si/no)").toLowerCase();

    if (respuesta !== "si") {
        continuar = false;
        alert("Calculadora finalizada.");
    }
}
