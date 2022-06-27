document.querySelector('h1').onclick = function () {
    alert('¡Ouch! ¡Deja de pincharme!');
}
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/img_temple.jpg') {
        miImage.setAttribute('src', 'images/img_buda.jpg');
    } else {
        miImage.setAttribute('src', 'images/img_temple.jpg')
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'President daña carro, Jhon haciendo vueltas esta pelao, Lucho cagasten de Bayer, Cavare Mantenido, Farid el abogado tramullero compae ' + miNombre;
    }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'President daña carro, Jhon haciendo vueltas esta pelao, Lucho cagasten de Bayer, Cavare Mantenido, Farid el abogado tramullero compae ,' + nombreAlmacenado;
}
miBoton.onclick = function () {
    estableceNombreUsuario();
}