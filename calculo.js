
function sumar() {
    // obtener los valores ingresados por el usuario desde los input
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    // Convertir los valores a números enteros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    // verificar si los valores ingresados son números validacion de datos erroneos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa números válidos.";
    } else {
        // calcular la suma
        var suma = numero1 + numero2;

        // mostrar el resultado en el elemento con id "resultado"
        document.getElementById("resultado").textContent = "La suma de " + numero1 + " y " + numero2 + " es igual a: " + suma;
    }
}