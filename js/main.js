var bienvenida = document.querySelector(".bienvenida")
var campo = document.querySelector("#texto");
var areaResultado = document.querySelector("#imprimir-resultado")
var textoResultado= document.querySelector("#texto-resultado");
var botonEncriptar= document.querySelector("#encriptar");
var botonDesencriptar=document.querySelector("#desencriptar");
var botonCopiar= document.querySelector("#copiar");
var mensajeError = document.querySelector("#error");


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


/*verificar que el texto ingresado no conenga números ni caracteres especiales*/

function verificarValores(texto){
    var patronAceptados = /[a-zA-Z\s]/gi;
    var patronRechazados = /[^a-zA-Z\s]/gi;
    var aceptados=texto.match(patronAceptados);
    var rechazados1=new Set(texto.match(patronRechazados));
    var rechazados=[...rechazados1]
    if (rechazados.length!=0){
        mensajeError.textContent= "Los siguientes caracteres son inválidos y serán ignorados: "+rechazados;
    }
    else{
        mensajeError.textContent=""
    }
    if (aceptados){
        return aceptados.toString().replaceAll(",","");
    }   
}


/* Funcionalidad para borrar la pantalla de bienvenida al ingresar texto y mostrarla al dejar el campo vacío*/

campo.addEventListener("input", function() {
    var texto=campo.value;
    if (texto.length!=0){
       borrarBienvenida();
       verificarValores(texto);
       textoResultado.value=""
    }
    else{
        mostrarBienvenida();
        textoResultado.value=""
        mensajeError.textContent="";
    } 


/* funciones para encriptar y desencriptar*/


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
  
function encriptar(texto){     
    a=texto.replace(/e/gi,"enter");
    b=a.replace(/i/gi,"imes");
    c=b.replace(/a/gi,"ai");
    d=c.replace(/o/gi,"ober");
    e=d.replace(/u/gi,"ufat");
    return e;
}


/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras 
*/


function desencriptar(texto){     
    a=texto.replace(/enter/gi,"e");
    b=a.replace(/imes/gi,"i");
    c=b.replace(/ai/gi,"a");
    d=c.replace(/ober/gi,"o");
    e=d.replace(/ufat/gi,"u");
    return e;
}


/* Encriptar texto al hacer click en botón Encriptar*/

botonEncriptar.addEventListener("click", function() {
    var campo = document.querySelector("#texto");
    var texto= campo.value;
    if (verificarValores(texto)){
        textoResultado.value= encriptar(verificarValores(texto));
        campo.value="";
    }  
});


/* Desencriptar texto al hacer click en botón Desencriptar*/

botonDesencriptar.addEventListener("click", function() {
    var campo = document.querySelector("#texto");
    var texto= campo.value;
    if (verificarValores(texto)){
        textoResultado.value= desencriptar(verificarValores(texto));
        campo.value="";
    }   
});
});



/* añadir función al botón de copiar resultado*/

botonCopiar.addEventListener("click", function() {
    var copiarResultado= document.querySelector("#texto-resultado");
    if (copiarResultado.value.length!=0){
        copiarResultado.setSelectionRange(0, 99999);
        copiarResultado.select();
        var textoCopiado=copiarResultado.value.toLowerCase();
        navigator.clipboard.writeText(textoCopiado);
        alert("tu mensaje ha sido añadido al portapapeles: " + textoCopiado);
    }
});
