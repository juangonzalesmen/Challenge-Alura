// let parrafo = "gato";
// let parrafoEncriptado = "gaitober";
let vocales = ['a', 'e', 'i', 'o', 'u'];
let reemplazo = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let expresionRegularVocales = /[aeiou]/ig;
let expresionRegularPersonalizada = /(ai|enter|imes|ober|ufat)/g;

let parrafoNuevo;
let parrafoDesencriptado;
let contenedorDetexto;

// Codigo logica
function reemplazoVocal(vocal) {
    let indice = vocales.indexOf(vocal);
    return indice !== -1 ? reemplazo[indice] : vocal;
}
function botonEncriptar() {
    if (document.getElementById('contenido').value == '') {
        console.log('Escribe algo para encriptar');
        document.getElementById('contenedorReferencia').style.display = 'block';
        document.getElementById('contenedorResultados').style.display = 'none';
    } else {
        let contenido = document.getElementById('contenido').value;
        console.log(`Este es el contenido normal ${contenido}`);
        parrafoNuevo = contenido.replace(expresionRegularVocales, function (match) {
            return reemplazoVocal(match);
        })
        document.getElementById('contenedorReferencia').style.display = 'none';
        contenedorDetexto = document.querySelector('#textoEncriptado').innerHTML = parrafoNuevo;
        document.getElementById('contenedorResultados').style.display = 'block';
        document.getElementById('contenido').value = '';

    }
}

function desencriptar(encriptado) {
    let indice = reemplazo.indexOf(encriptado);
    return indice !== -1 ? vocales[indice] : encriptado;
}

function botonDesencriptar() {
    if (document.getElementById('contenido').value == '') {
        console.log('No hay nada para desencriptar');
        document.getElementById('contenedorReferencia').style.display = 'block';
        document.getElementById('contenedorResultados').style.display = 'none';
    } else {
        let contenido = document.getElementById('contenido').value;
        console.log(`Este es el contenido encriptado ${contenido}`);
        parrafoDesencriptado = contenido.replace(expresionRegularPersonalizada, function (match) {
            return desencriptar(match)
        })
        
        document.getElementById('contenedorReferencia').style.display = 'none';
        contenedorDetexto = document.querySelector('#textoEncriptado').innerHTML = parrafoDesencriptado;
        document.getElementById('contenedorResultados').style.display = 'block';
        document.getElementById('contenido').value = '';
        
    }

}


async function copiarContenido() {
    console.log(contenedorDetexto);
    try {
        await navigator.clipboard.writeText(contenedorDetexto);
        console.log('Contenido copiado al portapapeles');
        /* Resuelto - texto copiado al portapapeles con éxito */
    } catch (err) {
        console.error('Error al copiar: ', err);
        /* Rechazado - fallo al copiar el texto al portapapeles */
    }
}