// 1. Mostrar tareas (3 puntos)
// MOSTRAR en consola todas las tareas que tiene pendientes (no terminadas) el usuario. 
// ORDENARLAS por prioridad (Alta, Media, Baja).
var ej1;
(function (ej1) {
    // interface ValorPorPrioridad {
    //     [prioridad: string]: number;
    // }
    // //la función espera un array de objetos que cumplen con la interfaz Tarea
    // function mostrarTareasPendientesPorPrioridad(tareas: Tarea[]){
    //     for (let i = 0; i < tareas.length; i++) {
    //         const tarea = tareas[i];
    //         if (tarea.estado === "pendiente")
    //             //acá ordenar prioridades y mostrar según orden
    //             //ordenar puede ser otra función que la llamo acá
    //             //console.log(`${tarea.nombre} tiene ${tarea.edad} años`);    
    //     }
    // }
    //creo nuevo array de tareas pendientes para luego mostrarlas en orden con otra función
    function obtenerTareasPendientes(tareas) {
        return tareas
            //tarea = cada elemento del array tareas
            .filter(function (tarea) { return tarea.estado === "pendiente"; }) //encuentro las tareas pendientes
            .map(function (tarea) { return ({ nombre: tarea.nombre, prioridad: tarea.prioridad }); }); //mapeo el nombre y la prioridad de las tareas pendientes
    }
    //declaro tareas como un array de objetos que cumplen con la interfaz Tarea
    var tareas = [
        { nombre: "Hacer TP1 progra", estado: "pendiente", prioridad: "alta" },
        { nombre: "Comprar comida perro", estado: "completada", prioridad: "media" },
        { nombre: "Pagar pilates", estado: "pendiente", prioridad: "media" },
        { nombre: "Cargar la sube", estado: "pendiente", prioridad: "baja" },
        { nombre: "Lavar la ropa", estado: "pendiente", prioridad: "alta" },
    ];
    //obtengo las tareas pendientes
    var tareasPendientes = obtenerTareasPendientes(tareas);
    //función q ordena tareas pendientes por prioridad y las muestra ordenadas
    function mostrarTareasPendientesPorPrioridad(tareasPendientes) {
        //para poder ordenarlas x prioridades, le asigno valores numéricos a cada prioridad a través de un objeto
        //defino mi tipo de datos que va a tener este objeto: la prioridad - que es un string - con su valor asociado de tipo number
        var valorPorPrioridad = {
            alta: 1,
            media: 2,
            baja: 3,
        };
        //uso función sort, q me devuelve el arreglo (tareasPendientes) ordenado según lo que le pido, que es que 
        tareasPendientes.sort(function (a, b) {
            //valorPorPrioridad[a.prioridad] acá accedo al valor numérico de la prioridad de una tarea a
            //con esta resta voy comparando los valores de prioridad de cada tarea para ordenarlos con sort
            //si resta da negativa --> a.prioridad < b.prioridad --> entonces se ordena a, b
            //si resta da positiva --> a.prioridad > b.prioridad --> entonces se ordena b, a
            return valorPorPrioridad[a.prioridad] - valorPorPrioridad[b.prioridad];
        });
        //muestro cada tarea en su orden, tomando el tareasPendientes ya modificado x el sort
        tareasPendientes.forEach(function (tarea) {
            console.log("Tarea: ".concat(tarea.nombre, ", Prioridad: ").concat(tarea.prioridad));
        });
    }
    //muestro
    console.log("Tareas pendientes ordenadas por prioridad:");
    //llamo a la función mostrar
    mostrarTareasPendientesPorPrioridad(tareasPendientes);
})(ej1 || (ej1 = {}));
