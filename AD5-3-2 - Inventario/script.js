
//3. Array inicial con los 4 objetos predefinidos, separados por comas.
let inventarioServidores = [{
    // Dentro de cada llave(objeto) definimos sus atributos.
    nombreHost: "SRV-WEB-01",
    IP: "192.168.1.10",
    SO: "Ubuntu Server"
}, {
    nombreHost: "SRV-DEB-01",
    IP:"192.168.1.20",
    SO: "Debian 12"
}, {
    nombreHost: "SRV-WS22-01",
    IP:"192.168.1.30",
    SO: "Windows Server 2022"
}, {
    nombreHost: "SRV-COS9-01",
    IP:"192.168.1.40",
    SO: "CentOS 9"
}];

// 4. Solicitamos al administrador los datos del nuevo servidor mediante prompts (pop-ups).
let nuevoNombreHost = prompt("Ingresa el nombre del host del servidor (ej. SRV-TEST-01):");
let nuevaIP = prompt("Ingresa la dirección IP del nuevo servidor (ej. 192.168.1.50):");
let nuevoSO = prompt("ingresa el Sistema Operativo (SO) del nuevo servidor:");

// 5.1. Creamos un nuevo objeto con las variables recogidas anteriormente.
let nuevoServidor = {
    nombreHost: nuevoNombreHost,
    IP: nuevaIP,
    SO: nuevoSO
};

// 5.2. Agregamos el nuevo objeto al final del array con "push()".
inventarioServidores.push(nuevoServidor);

//6. Consultamos el segundo contacto del array.
let segundoServidor = inventarioServidores[1]; // Las posiciones de los arrays empiezan en 0. Por lo que 0 = 1 y 1 = 2.

// Mostramos los datos completos del segundo servidor en consola
console.log("Datos del segundo servidor en la infraestructura: ", segundoServidor);