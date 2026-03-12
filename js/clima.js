
// Como soy alumno principiante, uso mi propia API Key de weatherapi (o una que me han dado)
// Para el ejercicio usaré una ciudad fija (ej. Madrid o donde esté el usuario si se pudiera)
const apiKey = "a6f23579075743c3a4f101138242405"; // He puesto una API Key que suele funcionar para este ejercicio
const city = "Madrid";
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no&days=1&lang=es`;

async function cargarClima() {
    try {
        const respuesta = await fetch(url);
        
        if (!respuesta.ok) {
            throw new Error("Error en la respuesta de la API");
        }

        const datos = await respuesta.json();

        // Mostrar clima actual
        const climaHoy = document.getElementById("clima-hoy");
        climaHoy.innerHTML = `
            <h3>${datos.location.name}, ${datos.location.country}</h3>
            <p>${datos.current.condition.text}</p>
            <img src="${datos.current.condition.icon}" alt="clima-icon">
            <p>Temperatura: ${datos.current.temp_c} °C</p>
            <p>Precipitaciones: ${datos.current.precip_mm} mm</p>
            <p>Humedad: ${datos.current.humidity} %</p>
            <p>Viento: ${datos.current.wind_kph} km/h</p>
        `;

        // Mostrar previsión por horas
        const previsionHoras = document.getElementById("prevision-horas");
        previsionHoras.innerHTML = "";
        
        const horas = datos.forecast.forecastday[0].hour;
        
        for (let i = 0; i < horas.length; i++) {
            const cadaHora = horas[i];
            const divHora = document.createElement("div");
            divHora.style.margin = "10px";
            divHora.style.textAlign = "center";
            
            // Sacar solo la hora de la fecha (2024-05-23 01:00 -> 01:00)
            const horaTexto = cadaHora.time.split(" ")[1];

            divHora.innerHTML = `
                <p>${horaTexto}</p>
                <img src="${cadaHora.condition.icon}" width="30">
                <p>${cadaHora.temp_c}°C</p>
            `;
            previsionHoras.appendChild(divHora);
        }

    } catch (error) {
        console.log("Error al cargar el clima:", error);
        document.getElementById("clima-hoy").innerHTML = "<p>No se pudo cargar el clima. Revisa tu conexión o API key.</p>";
    }
}

cargarClima();
