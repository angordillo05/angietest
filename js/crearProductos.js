var el = document.getElementById("botonAparecerProductos");
el.addEventListener("click", traerDatos);
function traerDatos(){
    $.getJSON("./assets/productos.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    })
    
    
}