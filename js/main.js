var bienvenida = document.querySelector(".bienvenida")
var campo = document.querySelector("#texto");
var areaResultado = document.querySelector("#imprimir-resultado")
var textoResultado= document.querySelector("#texto-resultado");
var botonEncriptar= document.querySelector("#encriptar");
var botonDesencriptar=document.querySelector("#desencriptar");
var botonCopiar= document.querySelector("#copiar");


/* Funciones y EvenrListener para borrar imágenes de inicio y mostrar área de resultado*/

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


campo.addEventListener("input", function() {
    var texto=campo.value;
    if (texto.length!=0){
       borrarBienvenida();
       textoResultado.value= texto;
    }
    else{
        mostrarBienvenida();
        textoResultado.value="";
    } 


/* funciones para encriptar y desencriptar*/

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


/* Añadir eventListener a los botones de encriptar y desencriptar*/

botonEncriptar.addEventListener("click", function() {
    var campo = document.querySelector("#texto");
    var texto= campo.value;
    textoResultado.value= encriptar(texto);  
});

botonDesencriptar.addEventListener("click", function() {
    var campo = document.querySelector("#texto");
    var texto= campo.value;
    textoResultado.value= desencriptar(texto);  
});


});


botonCopiar.addEventListener("click", function() {
    var copiarResultado= document.querySelector("#texto-resultado");
    if (copiarResultado.value.length!=0){
        copiarResultado.select();
        var textoCopiado=copiarResultado.value.toLowerCase();
        navigator.clipboard.writeText(textoCopiado);
        alert("tu mensaje ha sido añadido al portapapeles: " + textoCopiado);
    }
});
