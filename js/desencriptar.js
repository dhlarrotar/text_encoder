var areaResultado = document.querySelector("#imprimir-resultado")
var textoResultado= document.querySelector("#texto-resultado");
var botonDesencriptar=document.querySelector("#desencriptar");




/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
*/


function desencriptar(texto){     
    botonCopiar.classList.remove("fadeOut");
    a=texto.replace(/enter/gi,"e");
    b=a.replace(/imes/gi,"i");
    c=b.replace(/ai/gi,"a");
    d=c.replace(/ober/gi,"o");
    e=d.replace(/ufat/gi,"u");
    return e;
}


/* Desencriptar texto al hacer click en botón Desencriptar*/

botonDesencriptar.addEventListener("click", function() {
    var campo = document.querySelector("#texto");
    var texto= campo.value;
    if (verificarValores(texto)){
        textoResultado.textContent= desencriptar(verificarValores(texto));
       
    }   
});
