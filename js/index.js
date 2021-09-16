var botonMenu = document.querySelector("#botonmenu"); //Seleccionando el boton de html

var cinta = document.querySelector("#desplegable");

botonMenu.addEventListener("click", function(){ //anañadiendo el evento clic del boton

    //AÑADIR UN IF, "SI EL ELEMENTO CINTA CONTIENE LA CLASE "ELEMENTO OCULTO" QUE LO MUESTRE, SI NO LA CONTIENE
    //QUE LA OCULTE JSJSJS

    if (cinta.classList.contains("ElementoOculto")) {
        cinta.classList.add("MostrarElemento"); //AÑADIR LA CLASE PARA MOSTRAR UN ELEMTNO OCULTO 
        cinta.classList.remove("ElementoOculto"); //AÑADIR LA CLASE PARA QUITAR LA CLASE "ELEMENTO OCULTO"
        $("#desplegable").animate({width:'toggle'},350);
    }else{
        cinta.classList.add("ElementoOculto"); //AÑADIR LA CLASE PARA QUITAR LA CLASE "ELEMENTO OCULTO"
        cinta.classList.remove("MostrarElemento"); //AÑADIR LA CLASE PARA MOSTRAR UN ELEMTNO OCULTO
        $("#desplegable").animate({width:'toggle'},350);
    }
 
    
});

  //CARRUSEL

  

  