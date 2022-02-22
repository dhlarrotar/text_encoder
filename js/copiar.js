var campo = document.querySelector("#texto");
var areaResultado = document.querySelector("#imprimir-resultado")
var textoResultado= document.querySelector("#texto-resultado");
var botonCopiar= document.querySelector("#copiar");


/* añadir función al botón de copiar resultado*/

botonCopiar.addEventListener("click", function(event) {
    event.preventDefault();
    var copiarResultado= document.querySelector("#texto-resultado");
    if (copiarResultado.value.length!=0){
        copiarResultado.select();
        var textoCopiado=copiarResultado.value.toLowerCase();
        navigator.clipboard.writeText(textoCopiado);
        document.execCommand("copy");    
        alert("tu mensaje ha sido añadido al portapapeles: " + textoCopiado);
    }
});
