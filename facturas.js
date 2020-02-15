
function fecha(){
  var date = new Date(); // M-D-YYYY
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();
  var h =  date.getHours();
  var m = date.getMinutes(); 
  var s =  date.getSeconds();

  var t = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y+' hora '+h +':'+m+':'+s;
  document.getElementById("p1").innerHTML =t;
}


function guardar(){

  fecha();

 
  var baseImponible = document.getElementById("base-imponible").innerHTML;


  var baseImponible = parseInt(baseImponible);
  var iva=parseInt(iva);
  var totalConIva=parseInt(totalConIva);

  var producto = document.getElementById("producto").value;

  var precio = document.getElementById("cantidad").value;

  
  var cantidad = document.getElementById("precio-unitario").value;

  
  var total = precio*cantidad;


  baseImponible = baseImponible + total; 
  
  iva= baseImponible *0.21;

  totalConIva=baseImponible+iva;

  
  document.getElementById("base-imponible").innerHTML = baseImponible;

  document.getElementById("iva").innerHTML = iva;
  document.getElementById("total").innerHTML = totalConIva;
  
  
  fila ="<tr><td>"+producto+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+total+"</td></tr>";

  
  var newTR = document.createElement("TR");

  newTR.innerHTML=fila;

  
  document.getElementById("tabla").appendChild(newTR);

}