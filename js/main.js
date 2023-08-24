// Define un objeto Estudiante
function Estudiante(nombre, edad, grado) {
    this.nombre = nombre;
    this.edad = edad;
    this.grado = grado;
}

// Array para almacenar a los estudiantes
let estudiantes = [];

// Función para agregar un estudiante
function agregarEstudiante() {
    let nombre = prompt("Introduce el nombre del estudiante:");
    let edad = parseInt(prompt("Introduce la edad del estudiante:"));
    let grado = prompt("Introduce el grado del estudiante:");

    let estudiante = new Estudiante(nombre, edad, grado);
    estudiantes.push(estudiante);
}

// Función para listar a los estudiantes
function listarEstudiantes() {
    if (estudiantes.length === 0) {
        alert("No hay estudiantes registrados.");
        return;
    }

    let lista = "Lista de estudiantes:\n";
    for (let i = 0; i < estudiantes.length; i++) {
        lista += `Nombre: ${estudiantes[i].nombre}, Edad: ${estudiantes[i].edad}, Grado: ${estudiantes[i].grado}\n`;
    }

    alert(lista);
}

// Función principal del simulador
function simulador() {
    let opcion;

    do {
        opcion = prompt("SIMULADOR DE ESTUDIANTES\n\nElige una opción:\n1. Agregar estudiante\n2. Listar estudiantes\n3. Salir");

        switch (opcion) {
            case "1":
                agregarEstudiante();
                break;
            case "2":
                listarEstudiantes();
                break;
            case "3":
                alert("Gracias por utilizar el simulador.");
                break;
            default:
                alert("Opción inválida. Inténtalo nuevamente.");
        }

    } while (opcion !== "3");
}

// Ejecuta el simulador
simulador();
