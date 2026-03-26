//Creamos el array con sus propiedades
let animales = {
    tipo: "gato",
    raza: "siamés",
    edad: 5
};

// creamos el bucle sobre el elemento animales y mostramos su nombre y propiedades
for (let i in animales){
    console.log(i + ": " + animales[i]);
}