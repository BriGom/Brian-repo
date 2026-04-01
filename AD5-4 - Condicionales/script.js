
// Creamos el array de contactos inicial.
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
    },
    { // Cuarto contacto
        nombre: "Maisie Hailey",
        telefono: "913 531 303",
        email: "risus.Quisque@urna.ca"
    }
];

// Mostramos el menú y almacenamos la opción elegida por el usuario con parseInt().
// parseInt() convierte el valor introducido por el usuario (que es un string) a un número entero.
// Podría haber creado una variable menu, pero de esta manera es más directo, y ahorramos una variable que solo se usarí una vez.
let opcion = parseInt(prompt(`Selecciona una opción:
1. Mostrar el primer contacto.
2. Mostrar el último contacto.
3. Añadir un nuevo contacto.`));

// Usamos el switch para manejar cada opción del menú.
switch (opcion) {
    case 1:
        // Opción 1: Mostrar el primer contacto.
        if (contactos.length > 0) { // Verificamos que el array no esté vacío para evitar errores.
            console.log("Primer contacto: ", contactos[0]);
        } else {
            console.log("Error: No hay contactos disponibles.");
        }
        break;
    case 2:
        // Opción 2: Mostrar el último contacto.
        if (contactos.length > 0) { // Verificamos que el array no esté vacío para evitar errores.
            console.log("Último contacto: ", contactos[contactos.length - 1]);
        } else {
            console.log("Error: No hay contactos disponibles.");
        }
        break;
    case 3:
        // Opción 3: Añadir un nuevo contacto.
        let nuevoNombre = prompt("Ingresa el nombre del nuevo contacto:");
        let nuevoTelefono = prompt("Ingresa el teléfono del nuevo contacto:");
        let nuevoEmail = prompt("Ingresa el email del nuevo contacto:");

        // Validación con && para asegurar que no estén vacíos ni nulos.
        // He separado en varias líneas para mejorar la legibilidad, aunque también se podría escribir todo en una sola línea.
        if (nuevoNombre !== "" && nuevoNombre !== null &&
            nuevoTelefono !== "" && nuevoTelefono !== null &&
            nuevoEmail !== "" && nuevoEmail !== null) {

            // Si todo es correcto, lo añadimos.
            contactos.push({
                nombre: nuevoNombre,
                telefono: nuevoTelefono,
                email: nuevoEmail
            });

            // Mostramos el último usando length - 1.
            console.log("Contacto añadido:", contactos[contactos.length - 1]);

        } else {
            console.log("Error. Faltan datos por introducir");
        }
        break;

    default:
        // Opción no válida.
        console.log("Opción no válida. Por favor, selecciona 1, 2 o 3.");
        break;
}