var myBooks = [];
$.getJSON("./assets/productos.json", function(json){
    myBooks = json.products; 
    pintarObjetos();
});
var pintarObjetos = function(){
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) < 0) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table");            
    var tr = table.insertRow(-1); 
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");    
        th.innerHTML = col[i];
        tr.appendChild(th);

    }
    for (var i = 0; i < myBooks.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
        var botonCell = tr.insertCell(-1);
        botonCell.innerHTML = '<button class="btn btn-block btn-primary" onclick="agregarCarrito('+ i +')">Comprar</button>';
    }
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
};
var agregarCarrito = function(idx){
    carro.leerDatosProducto(myBooks[idx]);
};  