const btn = document.getElementById("toggle-theme");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "Modo Día";
    } else {
        btn.textContent = "Modo Noche";
    }
});
