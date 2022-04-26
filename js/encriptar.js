var campo = document.querySelector("#texto");
var textoResultado= document.querySelector("#texto-resultado");
var botonEncriptar= document.querySelector("#encriptar");

/*
Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat" 
*/
  

function encriptar(texto){    
    botonCopiar.classList.remove("fadeOut"); 
    a=texto.replace(/e/gi,"enter");
    b=a.replace(/i/gi,"imes");
    c=b.replace(/a/gi,"ai");
    d=c.replace(/o/gi,"ober");
    e=d.replace(/u/gi,"ufat");
    return e;
}


/* Encriptar texto al hacer click en botón Encriptar*/

botonEncriptar.addEventListener("click", function() {
    var campo = document.querySelector("#texto");
    var texto= campo.value;
    if (verificarValores(texto)){
        textoResultado.textContent= encriptar(verificarValores(texto));
       
    }  
});




