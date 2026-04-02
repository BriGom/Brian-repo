
let contactos = [
  { 
    nombre: "Maxwell Wright",
    telefono: "(0191) 719 6495",
    email: "curabitur.egestas.nunc@nonummyac.co.uk"
  },
  { 
    nombre: "Raja Villareal",
    telefono: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  { 
    nombre: "Helen Richards",
    telefono: "0800 1111",
    email: "libero@convallis.edu"
  }
];

let opcion;
let ultimo;

do { // Mostramos el menú de opciones al usuario utilizando prompt() y parseInt() para convertir la entrada a un número entero
    opcion = parseInt(prompt(`Selecciona una opción:
1. Mostrar el primer contacto
2. Mostrar el último contacto
3. Mostrar todos los contactos
4. Añadir un nuevo contacto
0. Salir`));

    switch (opcion) {
        case 1: // Mostramos el primer contacto utilizando su índice (0)
            console.log("Primer contacto: " + contactos[0].nombre + " / " + contactos[0].telefono + " / " + contactos[0].email);
            break;

        case 2: // Calculamos el índice del último contacto y lo mostramos
            ultimo = contactos.length - 1;
            console.log("Último contacto: " + contactos[ultimo].nombre + " / " + contactos[ultimo].telefono + " / " + contactos[ultimo].email);
            break;

        case 3:
            case 3: // Recorremos el array de contactos utilizando un bucle for...of
            for (let contacto of contactos) {
                console.log("Contacto: " + contacto.nombre + " / " + contacto.telefono + " / " + contacto.email);
            }
            break;

        case 4: // Añadimos un nuevo contacto al array utilizando el método push()
            contactos.push({ 
              nombre: "Maisie Hailey",
              telefono: "913 531 303",
              email: "risus.Quisque@urna.ca"
            });
            console.log("Contacto añadido (Maisie Hailey).");
            break;

        case 0:
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción no válida.");
            break;
    }
} while (opcion !== 0 && !isNaN(opcion) // Continuamos mostrando el menú hasta que el usuario decida salir o ingrese un valor no numérico
);