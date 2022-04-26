var campo = document.querySelector("#texto");
var areaResultado = document.querySelector("#imprimir-resultado")
var textoResultado= document.querySelector(".area-resultado");
var botonCopiar= document.querySelector("#copiar");


/* añadir función al botón de copiar resultado*/

botonCopiar.addEventListener("click", function(event) {
    event.preventDefault();
    var copiarResultado= document.querySelector("#texto-resultado");
    if (copiarResultado.textContent.length!=0){
        var textoCopiado=copiarResultado.textContent.toLowerCase();
        navigator.clipboard.writeText(textoCopiado);   
        alert("tu mensaje ha sido añadido al portapapeles: " + textoCopiado);
        campo.value="";
        copiarResultado.textContent="";
        mostrarBienvenida();

    }
});
