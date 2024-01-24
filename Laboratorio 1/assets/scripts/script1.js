

let contenedorAbierto = false;
const contenedor = document.getElementById('section1');
const contenedor2 = document.getElementById('section2');

function mostrarSection() {
    contenedorAbierto = !contenedorAbierto;
 
    if (contenedorAbierto) {
 
        contenedor.style.width = '1200px';
        
    } else {
       
        contenedor.style.width = '0';
    }
}


function mostrarSection2() {
    contenedorAbierto = !contenedorAbierto;
 
    if (contenedorAbierto) {
 
        contenedor2.style.width = '1200px';
        
    } else {
       
        contenedor2.style.width = '0';
    }
}
