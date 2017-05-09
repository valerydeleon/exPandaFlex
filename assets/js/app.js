/////* borrar *///////

var taches = document.getElementsByClassName("cerrar");

for (var i = 0; i < taches.length; i++ ){
  taches[i].addEventListener("click", borrarFoto);
}

function borrarFoto(){
  this.parentNode.style.display="none";
}


/////* restaurar *///////

var botonDeMostrar = document.getElementById("botonMostrar")

botonDeMostrar.addEventListener("click", mostrarFotos);

function mostrarFotos(){
  for (var i = 0; i < taches.length; i++ ){
    taches[i].parentNode.style.display="flex";
  }
}


/////* boton Origen *///////

var botonOrigen = document.getElementById("botonOrigen");
var parrafoOrigen = document.getElementById("parrafoOrigen");

botonOrigen.addEventListener("click", mostrarOrigen);
botonOrigen.addEventListener("dblclick", ocultarOrigen);

function mostrarOrigen(){
  parrafoOrigen.style.visibility="visible";
}

function ocultarOrigen(){
  parrafoOrigen.style.visibility="hidden";
}

/////* boton Extincion *///////

var botonExt = document.getElementById("botonExtincion");
var parrafoExt = document.getElementById("parrafoExtincion");

botonExt.addEventListener("click", mostrarExtincion);
botonExt.addEventListener("dblclick", ocultarExtincion);

function mostrarExtincion(){
  parrafoExt.style.visibility="visible";
}

function ocultarExtincion(){
  parrafoExt.style.visibility="hidden";
}
