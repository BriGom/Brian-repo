//creamos el array
let ciudades = ["Madrid","Las Palmas", "La Laguna", "New York","Birmingham", "Berlin", "Oslo", "Jaén", "Almería","Valencia"];

//recorremos dicho array
for (let i of ciudades){
    // Pedimos que lo recorra al revés
    for (i = 10; i >= 0 ; i--)
    console.log(ciudades[i]);
}