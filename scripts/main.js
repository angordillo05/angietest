
var myBooks = [];
$.getJSON("./assets/productos.json", function(json){
    myBooks = json.products; 
    pintarObjetos();
});
var pintarObjetos = function(){
    var col = [];
    console.log(myBooks);
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) < 0) {
                col.push(key);
            }
        }
    }
    console.log(col);
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
    }
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
};

        