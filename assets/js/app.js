/////*  *///////

var taches = document.getElementsByClassName("cerrar");

for (var i = 0; i < taches.length; i++ ){
  taches[i].addEventListener("click", borrarFoto);
}

function borrarFoto(){
  this.parentNode.style.display="none";
}



var botonDeMostrar = document.getElementById("botonMostrar")

botonDeMostrar.addEventListener("click", mostrarFotos);

function mostrarFotos(){
  for (var i = 0; i < taches.length; i++ ){
    taches[i].parentNode.style.display="flex";
  }
}
