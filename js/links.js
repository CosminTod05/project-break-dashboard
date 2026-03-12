
let misLinks = JSON.parse(localStorage.getItem("misLinks")) || [];

const listaDOM = document.getElementById("lista-links");

function mostrarLinks() {
    listaDOM.innerHTML = "";
    
    // Recorrer el array de links
    for (let i = 0; i < misLinks.length; i++) {
        let li = document.createElement("li");
        
        // El enlace con el título
        let a = document.createElement("a");
        a.href = misLinks[i].url;
        a.textContent = misLinks[i].titulo;
        a.target = "_blank"; // Abrir en pestaña nueva

        // El botón de eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            // Quitar el elemento del array
            misLinks.splice(i, 1);
            // Guardar en el localStorage
            localStorage.setItem("misLinks", JSON.stringify(misLinks));
            // Actualizar la pantalla
            mostrarLinks();
        };

        li.appendChild(a);
        li.appendChild(botonEliminar);
        listaDOM.appendChild(li);
    }
}

const botonAdd = document.getElementById("add-link");
if (botonAdd) {
    botonAdd.addEventListener("click", function() {
        let inputTitulo = document.getElementById("titulo-link");
        let inputUrl = document.getElementById("url-link");

        if (inputTitulo.value && inputUrl.value) {
            let nuevoLink = {
                titulo: inputTitulo.value,
                url: inputUrl.value
            };

            // Añadir al array
            misLinks.push(nuevoLink);
            // Guardar en localstorage
            localStorage.setItem("misLinks", JSON.stringify(misLinks));
            // Pintar todo otra vez
            mostrarLinks();

            // Limpiar los inputs
            inputTitulo.value = "";
            inputUrl.value = "";
        } else {
            alert("Rellena los dos campos antes de añadir");
        }
    });
}

// Al cargar la página, mostramos los enlaces guardados
mostrarLinks();
