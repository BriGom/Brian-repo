// creamos el array de objetos vacío.
let personas =[];

// Pedimos al usuario
let nombre = prompt("Nombre");
let edad = prompt("Edad");
let ciudad = prompt("Ciudad");

// creamos un nuevo array en función de la información del usuario.
let nuevaPersona = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad
}

//Insertamos la información del nuevo array en el original.
personas.push(nuevaPersona);

// Cremos un bucle que recorre el Array original
for (let i in personas){
    alert (personas[i].nombre+ ", " + personas[i].edad + ", "+ personas[i].ciudad);
}