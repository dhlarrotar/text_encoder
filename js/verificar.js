var campo = document.querySelector("#texto");
var textoResultado= document.querySelector("#texto-resultado");
var botonCopiar= document.querySelector("#copiar");
var mensajeError = document.querySelector("#error");


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
});