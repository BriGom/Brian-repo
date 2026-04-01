
// Creamos el array de objetos con los contactos
let contactos = [
  { // Cada objeto representa un contacto con su nombre, teléfono y email
    // Primer contacto
    nombre: "Maxwell Wright",
    telefono: "(0191) 719 6495",
    email: "curabitur.egestas.nunc@nonummyac.co.uk"
  },
  { // Segundo contacto
    nombre: "Raja Villareal",
    telefono: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  { // Tercer contacto
    nombre: "Helen Richards",
    telefono: "0800 1111",
    email: "libero@convallis.edu"
  }
];

let ultimo;

// Agregamos un nuevo contacto al array
contactos.push({ 
  nombre: "Maisie Hailey",
  telefono: "913 531 303",
  email: "risus.Quisque@urna.ca"
});

ultimo = contactos.length - 1; // Calculamos el índice del último contacto agregado

console.log("Primer contacto: " + contactos[0].nombre + " / " + contactos[0].telefono + " / " + contactos[0].email);
console.log("Tercer contacto: " + contactos[2].nombre + " / " + contactos[2].telefono + " / " + contactos[2].email);
console.log("Último contacto: " + contactos[ultimo].nombre + " / " + contactos[ultimo].telefono + " / " + contactos[ultimo].email);

// Cambiamos el teléfono del segundo contacto
contactos[1].telefono = "111 222 3333";
console.log("Cambio telefono segundo contacto: " + contactos[1].nombre + " / " + contactos[1].telefono + " / " + contactos[1].email);

// Probamos a acceder a un contacto que no existe
console.log("Contacto 10: " + contactos[10]);

contactos.splice(2,1); // Eliminamos el tercer contacto del array
console.log("Contacto 3 eliminado. Contacto 3 ahora es: " + contactos[2].nombre );
