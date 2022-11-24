function implementar() {

    const fragmento = document.createDocumentFragment();
    const miimagen = document.createElement("img");
    miimagen.src = "/IMG/paisaje.jpg";
    miimagen.alt = "imagen de google"
   
    fragmento.appendChild(miimagen);
    var divprincipal=document.createElement("h1");
    divprincipal=document.createTextNode("Hola soy un hombre aburrido mamado de estar aqui");
    
    fragmento.appendChild(divprincipal);
    document.body.appendChild(fragmento);
}



