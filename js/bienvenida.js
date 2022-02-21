var bienvenida = document.querySelector(".bienvenida")
var areaResultado = document.querySelector("#imprimir-resultado")

/* Funciones para borrar imágenes de inicio y mostrar área de resultado*/

function borrarBienvenida(){
    bienvenida.classList.remove("bienvenida");
    bienvenida.classList.add("fadeOut");
    areaResultado.classList.remove("fadeOut");
}

function mostrarBienvenida(){
    bienvenida.classList.remove("fadeOut");
    bienvenida.classList.add("bienvenida");
    areaResultado.classList.add("fadeOut");
}
