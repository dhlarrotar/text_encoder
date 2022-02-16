var bienvenida = document.querySelector(".bienvenida")
var areaResultado = document.querySelector("#imprimir-resultado")
var textoResultado= document.querySelector("#texto-resultado");
var botonEncriptar= document.querySelector("#encriptar");
var botonDesencriptar=document.querySelector("#desencriptar");


/* borrar imágenes de inicio y mostrar área de resultado*/

function borrarBienvenida(){
    bienvenida.classList.remove("bienvenida");
    bienvenida.classList.add("fadeOut");
    areaResultado.classList.remove("invisible");
}


function encriptar(texto){     
    a=texto.replace(/e/gi,"enter");
    b=a.replace(/i/gi,"imes");
    c=b.replace(/a/gi,"ai");
    d=c.replace(/o/gi,"ober");
    e=d.replace(/u/gi,"ufat");
    return e;
}

function desencriptar(texto){     
    a=texto.replace(/enter/gi,"e");
    b=a.replace(/imes/gi,"i");
    c=b.replace(/ai/gi,"a");
    d=c.replace(/ober/gi,"o");
    e=d.replace(/ufat/gi,"u");
    return e;
}

/* encriptar*/

botonEncriptar.addEventListener("click", function() {
    borrarBienvenida();
    var campo = document.querySelector("#texto");
    var texto= campo.value;
    textoResultado.value= encriptar(texto);  
});
botonDesencriptar.addEventListener("click", function() {
    borrarBienvenida();
    var campo = document.querySelector("#texto");
    var texto= campo.value;
    textoResultado.value= desencriptar(texto);  
});

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


botonDesencriptar.addEventListener("click",borrarBienvenida)
