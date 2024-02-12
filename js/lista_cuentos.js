document.addEventListener("DOMContentLoaded", function() {
    fetch("libros.json")
      .then(response => response.json())
      .then(data => {
        const librosContainer = document.getElementById("libros-container");
        data.libros.forEach(libro => {
          const libroDiv = document.createElement("div");
          libroDiv.classList.add("libro");
  
          const imagen = document.createElement("img");
          imagen.src = libro.imagen;
          imagen.alt = libro.nombre;
          libroDiv.appendChild(imagen);
  
          const nombre = document.createElement("p");
          nombre.textContent = libro.nombre;
          libroDiv.appendChild(nombre);
  
          const año = document.createElement("p");
          año.textContent = `Año: ${libro.año}`;
          libroDiv.appendChild(año);
  
          librosContainer.appendChild(libroDiv);
        });
      })
      .catch(error => {
        console.error("Error al cargar los libros:", error);
      });
  });
  