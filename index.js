const shante = document.getElementById("shante");
let animacion_shante = setInterval(cambiar_imagen_shante, 50);
let num_imagen_shante = 0;
let x = 0;
let y = 0;

const pantalla_ancho = window.innerWidth;
const pantalla_alto = window.innerHeight;
const shante_ancho = shante.offsetWidth;
const shante_alto = shante.offsetHeight;

function cambiar_imagen_shante() {
    num_imagen_shante++;
    let direc_shante;
    if (num_imagen_shante > 15) {
        num_imagen_shante = 1;
    }
    direc_shante = "img/shante/Shante_" + num_imagen_shante + ".png";
    shante.setAttribute("src", direc_shante)
}

document.addEventListener("keydown", moverShante);

function moverShante(event) {
    let shante_x = x;
    let shante_y = y;

    switch (event.keyCode) {
        case 68: shante_x = x + 5; break;
        case 65: shante_x = x - 5; break;
        case 83: shante_y = y + 5; break;
        case 87: shante_y = y - 5; break;
        case 69: lanzar_cohete(); break;
    }

    if (shante_x >= 0 && shante_x <= pantalla_ancho - shante_ancho) {
        x = shante_x;
        shante.style.left = x + "px";
    }

    if (shante_y >= 0 && shante_y <= pantalla_alto - shante_alto) {
        y = shante_y;
        shante.style.top = y + "px";
    }
}

function lanzar_cohete() {
    let nuevoCohete = document.createElement("img");
    nuevoCohete.setAttribute("id", "cohete");
    nuevoCohete.style.left = (x + shante_ancho) + "px";
    nuevoCohete.style.top = (y + shante_alto / 2) + "px";

    document.body.appendChild(nuevoCohete);

    cambiar_imagen_cohete(nuevoCohete)
}

function cambiar_imagen_cohete(nuevoCohete){
    let cohete_x = x + shante_ancho;
    let num_imagen_cohete = 1;
    const cohete_ancho = nuevoCohete.offsetWidth;

    let animacion_cohete = setInterval(() => {
        cohete_x += 10;
        nuevoCohete.style.left = cohete_x + "px";

        num_imagen_cohete++;
        if (num_imagen_cohete > 4) {
            num_imagen_cohete = 1;
        }
        nuevoCohete.src = "img/HannyahNED/Cohete_" + num_imagen_cohete + ".png";

        if (cohete_x >= pantalla_ancho - cohete_ancho) {
            clearInterval(animacion_cohete);
            nuevoCohete.remove();
        }
    }, 50);
}