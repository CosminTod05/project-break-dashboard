
function actualizarReloj() {
    const fechaActual = new Date();

    // Obtener horas, minutos y segundos
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    // Formatear para que siempre tenga 2 dígitos
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    // Mostrar el reloj en el HTML
    const relojElemento = document.getElementById("reloj");
    if (relojElemento) {
        relojElemento.textContent = horas + ":" + minutos + ":" + segundos;
    }

    // Obtener día, mes y año
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; // Los meses empiezan en 0
    const anio = fechaActual.getFullYear();

    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;

    // Mostrar la fecha
    const fechaElemento = document.getElementById("fecha");
    if (fechaElemento) {
        fechaElemento.textContent = dia + "/" + mes + "/" + anio;
    }

    // Frases según la hora
    let mensaje = "";
    const h = fechaActual.getHours();
    const m = fechaActual.getMinutes();
    
    // Convertimos todo a minutos desde las 00:00 para comparar más fácil
    const tiempoEnMinutos = h * 60 + m;

    if (tiempoEnMinutos >= 1 && tiempoEnMinutos <= 7 * 60) {
        mensaje = "Es hora de descansar. Apaga y sigue mañana";
    } else if (tiempoEnMinutos > 7 * 60 && tiempoEnMinutos <= 12 * 60) {
        mensaje = "Buenos días, desayuna fuerte y a darle al código";
    } else if (tiempoEnMinutos > 12 * 60 && tiempoEnMinutos <= 14 * 60) {
        mensaje = "Echa un rato más pero no olvides comer";
    } else if (tiempoEnMinutos > 14 * 60 && tiempoEnMinutos <= 16 * 60) {
        mensaje = "Espero que hayas comido";
    } else if (tiempoEnMinutos > 16 * 60 && tiempoEnMinutos <= 18 * 60) {
        mensaje = "Buenas tardes, el último empujón";
    } else if (tiempoEnMinutos > 18 * 60 && tiempoEnMinutos <= 22 * 60) {
        mensaje = "Esto ya son horas extras, ... piensa en parar pronto";
    } else {
        mensaje = "Buenas noches, es hora de pensar en parar y descansar";
    }

    const mensajeElemento = document.getElementById("mensaje");
    if (mensajeElemento) {
        mensajeElemento.textContent = mensaje;
    }
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);

// Llamar una vez al principio para no esperar el primer segundo
actualizarReloj();
