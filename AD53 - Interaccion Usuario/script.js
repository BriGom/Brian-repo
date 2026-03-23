let contactos = [{
  nombre: "Maxwell Wright",
  telefono: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  nombre: "Raja Villarreal",
  telefono: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
}, {
  nombre: "Helen Richards",
  telefono: "0800 1111",
  email: "libero@convallis.edu"
},  {
  nombre: "Maisie Haley",
  telefono:"0913 531 3030",
  email: "risus.Quisque@urna.ca"
}];

let nombre = prompt("Introduce el nombre del nuevo contacto: ");
let telefono = prompt("Introduce el número de teléfono del nuevo contacto: ");
let email = prompt("Introduce el email del nuevo contacto: ");

let nuevoContacto = {
    nombre: nombre,
    telefono: telefono,
    email: email
}

contactos.push(nuevoContacto);
let ultimoContacto = contactos.length - 1;

alert(`Datos del contacto:\n${contactos[0].nombre}\nTeléfono: ${contactos[0].telefono}\n Email: ${contactos[0].email}`);
alert(`Datos del contacto:\n${contactos[ultimoContacto].nombre}\nTeléfono: ${contactos[ultimoContacto].telefono}\n Email: ${contactos[ultimoContacto].email}`);

console.log(`Datos del contacto:\n${contactos[ultimoContacto].nombre}\nTeléfono: ${contactos[ultimoContacto].telefono}\n Email: ${contactos[ultimoContacto].email}`);