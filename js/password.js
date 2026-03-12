
const bMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const bMinusculas = "abcdefghijklmnopqrstuvwxyz";
const bNumeros = "0123456789";
const bSimbolos = "!@#$%^&*()-_=+";

function generarPassword() {
    let longitud = parseInt(document.getElementById("longitud").value);
    
    // Validar longitud min 12 y max 50
    if (longitud < 12) longitud = 12;
    if (longitud > 50) longitud = 50;

    let totalChar = bMayusculas + bMinusculas + bNumeros + bSimbolos;
    let passwordResult = "";

    // Mínimo uno de cada (asegurarnos)
    passwordResult += bMayusculas[Math.floor(Math.random() * bMayusculas.length)];
    passwordResult += bMinusculas[Math.floor(Math.random() * bMinusculas.length)];
    passwordResult += bNumeros[Math.floor(Math.random() * bNumeros.length)];
    passwordResult += bSimbolos[Math.floor(Math.random() * bSimbolos.length)];

    // El resto hasta la longitud pedida
    for (let i = 4; i < longitud; i++) {
        let indexAleatorio = Math.floor(Math.random() * totalChar.length);
        passwordResult += totalChar[indexAleatorio];
    }

    // Opcional: Mezclar la contraseña un poco (aunque así ya es aleatoria)
    // Para no complicarlo, lo dejamos así, que ya cumple lo de letras, números y símbolos
    
    document.getElementById("password-resultado").textContent = "Nueva contraseña: " + passwordResult;
}

const botonGenerar = document.getElementById("generar");
if (botonGenerar) {
    botonGenerar.addEventListener("click", generarPassword);
}
