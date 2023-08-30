

const servicio = document.getElementById('nav');
var responsivo = window.matchMedia("(min-width:768px)");

// creo el boton si el vh es mayor a 768px
const nuevoBoton = document.createElement('button');
const nuevoLink = document.createElement('a');

function responsiveBoton(viewPor) {

    if (viewPor.matches) {
        servicio.append(nuevoBoton);
        nuevoBoton.classList.add('boton');
        nuevoBoton.append(nuevoLink);
        nuevoLink.getAttribute('href');
        nuevoLink.setAttribute('href', '#');
        nuevoLink.classList.add('boton-link');
        nuevoLink.innerText = 'Llamanos!';
    } else {

        nuevoBoton.remove();
        nuevoLink.remove();

    }

}

responsiveBoton(responsivo);

responsivo.addListener(responsiveBoton);





















