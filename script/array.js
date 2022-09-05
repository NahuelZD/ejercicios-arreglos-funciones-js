// Ejercicio 1

function mostrarMeses() {
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let lista = document.getElementById("listaMeses");
  lista.innerHTML = "";
  meses.forEach((mes) => {
    lista.innerHTML += `<li>${mes}</li>`;
  });
}

function borrarMeses() {
  let lista = document.getElementById("listaMeses");
  lista.innerHTML = "";
}

// Ejercicio 2

function ciudades() {
  let mensaje = document.getElementById("mostrarCiudades");
  let arrayCiudades = [];
  mensaje.innerHTML = "";

  do {
    arrayCiudades.push(prompt("Ingresá una ciudad."));
  } while (arrayCiudades[arrayCiudades.length - 1] !== null);

  arrayCiudades.forEach((ciudad) => {
    if (ciudad !== null) mensaje.innerHTML += `<li>${ciudad}</li>`;
  });

  mensaje.innerHTML += `<br>La longitud del array es de ${
    arrayCiudades.length - 1
  }`;
  mensaje.innerHTML += `<br>En la primera posición está ${
    arrayCiudades[0]
  }, en la tercera ${arrayCiudades[2]} y en la última ${
    arrayCiudades[arrayCiudades.length - 2]
  }<br><br>`;

  arrayCiudades.pop();
  arrayCiudades.push("Paris");

  recorrer(arrayCiudades, mensaje);

  mensaje.innerHTML += `<br>En la segunda posición está ${arrayCiudades[1]}<br><br>`;

  arrayCiudades[1] = "Barcelona";

  recorrer(arrayCiudades, mensaje);
}

function recorrer(array, escribir) {
  array.forEach((elemento) => {
    if (elemento !== null) escribir.innerHTML += `<li>${elemento}</li>`;
  });
}

function borrarCiudades() {
  let mensaje = document.getElementById("mostrarCiudades");
  mensaje.innerHTML = "";
}

// Ejercicio 3

function funcionDados() {
  let lanzamientos = [];
  let [dado1, dado2, resultado] = [0, 0, 0];
  let arrAux = [];
  let arrAux2 = [];
  let total = [];
  let tabla = document.getElementById('tablaDados');
  let mostrar = document.getElementById('lanza');
  function lanzarDados() {
    return Math.floor(Math.random() * 6 + 1);
  }
  tabla.innerHTML = '';
  mostrar.innerHTML = '';

  for (let i = 1; i <= 50; i++) {
    dado1 = lanzarDados();
    dado2 = lanzarDados();
    resultado = dado1 + dado2;
    lanzamientos.push(resultado);
  }

  lanzamientos.forEach((lanzada, i) => {
    mostrar.innerHTML += ` - [${lanzada}] `
  })

  lanzamientos.sort()

  for (let i = 0; i < lanzamientos.length; i++) {
    arrAux = lanzamientos.filter(tirada => tirada === lanzamientos[i])
    arrAux2 = lanzamientos.filter(tirada => tirada === lanzamientos[i+1])
    if(arrAux[0] !== arrAux2[0]){
      total.push([arrAux[0],arrAux.length])
    }
  }

  for(let i = 0; i<total.length ; i++){
    let tr = document.createElement('tr');
    let tdRes = document.createElement('td');
    let tdCantidad = document.createElement('td');
    tdRes.innerHTML = `${total[i][0]}`;
    tdCantidad.innerHTML = `${total[i][1]}`;
    tr.appendChild(tdRes);
    tr.appendChild(tdCantidad);
    tabla.appendChild(tr);
  }
} 
