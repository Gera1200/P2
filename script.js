function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function mostrarSeccion(id) {
    let secciones = document.querySelectorAll(".seccion");
    secciones.forEach(seccion => {
        seccion.classList.remove("activa");
        seccion.style.display = "none";
    });

    let seccionActiva = document.getElementById(id);
    seccionActiva.style.display = "block";
    setTimeout(() => {
        seccionActiva.classList.add("activa");
    }, 50);

    document.getElementById("menu").style.display = "none";
}

function toggleInfo(id) {
    let info = document.getElementById(id);
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}
