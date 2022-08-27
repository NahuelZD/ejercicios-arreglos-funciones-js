// Ejercicio 1

function parImpar(){
    let num = document.getElementById('paridad').value;
    let mensaje = document.getElementById('mostrarParidad');

    if(num%2 == 0) mensaje.innerHTML = `El número ${num} es par.`;
    else mensaje.innerHTML = `El número ${num} es par.`
}

function borrarParidad(){
    let mensaje = document.getElementById('mostrarParidad');
    mensaje.innerHTML = '';
}

// Ejercicio 2

function mayusMinus(){
    let texto = document.getElementById('cadenaTexto').value;
    let mensaje = document.getElementById('mostrarMayusMinus');
    let [contadorMayus,contadorMinus] = [0,0]

    for(let i=0;i<texto.length;i++){
        if(texto[i] === texto[i].toUpperCase()) contadorMayus++;
        else contadorMinus++;
    }

    if(contadorMayus == texto.length){
        mensaje.innerHTML = `El texto "${texto}", tiene todas sus letras mayúsculas.`;
    } else if(contadorMinus == texto.length){
        mensaje.innerHTML = `El texto "${texto}", tiene todas sus letras minúsculas.`;
    } else mensaje.innerHTML = `El texto "${texto}", tiene letras mayúsculas y minúsculas.`;
}

function borrarCadena(){
    let mensaje = document.getElementById('mostrarMayusMinus');
    mensaje.innerHTML = '';
}