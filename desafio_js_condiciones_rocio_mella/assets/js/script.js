function cambiarBorde(imagen) { //nombre evento onClick
    if (imagen.style.border === "2px solid red") { // === es si esto existe
      // Si el borde ya está aplicado, quítalo
      imagen.style.border = "";
    } else {
      // Si el borde no está aplicado, agrégalo
      imagen.style.border = "2px solid red";
    }
}
  
