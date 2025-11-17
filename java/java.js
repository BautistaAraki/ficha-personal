
    const boton = document.getElementById("modo-btn");

    boton.addEventListener("click", () => {
        document.body.classList.toggle("night-mode");

        if (document.body.classList.contains("night-mode")) {
            boton.textContent = "Modo Día";
        } else {
            boton.textContent = "Modo Noche";
        }
    });
