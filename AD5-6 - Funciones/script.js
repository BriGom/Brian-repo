// 1. Array de contactos original
let contactos = [
  {
    nombre: "Maxwell Wright",
    telefono: "(0191) 719 6495",
    email: "curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    nombre: "Raja Villareal",
    telefono: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    nombre: "Helen Richards",
    telefono: "0800 1111",
    email: "libero@convallis.edu",
  },
];

// 2. Funciones exigidas por la AD5.6
function mostrarPrimerContacto() {
  console.log(
    "Primer contacto: " +
      contactos[0].nombre +
      " / " +
      contactos[0].telefono +
      " / " +
      contactos[0].email,
  );
}

function mostrarUltimoContacto() {
  let ultimo = contactos.length - 1;
  console.log(
    "Último contacto: " +
      contactos[ultimo].nombre +
      " / " +
      contactos[ultimo].telefono +
      " / " +
      contactos[ultimo].email,
  );
}

function listarContactos() {
  // Listamos los contactos actuales
  for (let i = 0; i < contactos.length; i++) {
    console.log(
      "Contacto " +
        (i + 1) +
        ": " +
        contactos[i].nombre +
        " / " +
        contactos[i].telefono +
        " / " +
        contactos[i].email,
    );
  }
}

function agregarContacto() {
  contactos.push({
    nombre: "Maisie Hailey",
    telefono: "913 531 303",
    email: "risus.Quisque@urna.ca",
  });
  console.log("Contacto añadido correctamente.");
}

// 3. Función principal con el menú interactivo exigido en la AD5.6
function iniciarAgenda() {
  let opcion;
  
  do {
    opcion = parseInt(
      prompt(`Selecciona una opción:
            1. Mostrar el primer contacto
            2. Mostrar el último contacto
            3. Listar contactos
            4. Añadir un nuevo contacto
            0. Salir`),
    );
    // Llamamos a la función correspondiente según la opción seleccionada
    switch (opcion) {
      case 1:
        mostrarPrimerContacto();
        break;
      case 2:
        mostrarUltimoContacto();
        break;
      case 3:
        listarContactos();
        break;
      case 4:
        agregarContacto();
        break;
      case 0:
        console.log("Saliendo de la agenda...");
        break;
      default:
        console.log("Opción no válida.");
        break;
    }
  } while (opcion !== 0 && !isNaN(opcion)); // Continuamos mostrando el menú hasta que el usuario decida salir o ingrese un valor no numérico
}

// 4. Llamada automática al iniciar
iniciarAgenda();
