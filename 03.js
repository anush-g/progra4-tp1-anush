// 3. Asignaciones
// Ahora los inversores nos piden ver las tareas que tiene persona cada persona. 
// Así que necesitamos que, dado una persona, se muestren solo sus tareas de igual manera que en el punto 1. 
// ¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!
// agrego la interfaz persona
var ej3;
(function (ej3) {
    //mapeo array de tareas pa convertirlo en un array donde almacene las tareas pendientes x persona
    function armarMapaTareas(tareas) {
        //creo el mapa donde voy a almacenar las tareas
        var mapaTareas = new Map();
        //recorro el array de tareas
        tareas.forEach(function (tarea) {
            //chequeo si la tarea está pendiente (estado === "pendiente")
            if (tarea.estado === "pendiente") {
                //creo un objeto TareaPendiente con el nombre y la prioridad de la tarea, como en el ej1
                var tareaPendiente = { nombre: tarea.nombre, prioridad: tarea.prioridad };
                //verifico si ya se registraron tareas pendientes para la persona en cuestión
                if (!mapaTareas.has(tarea.persona.nombre)) {
                    //si no se registró nada todavía, creo una nueva entrada con el nombre de la persona como clave
                    //y un array que contiene la tarea pendiente como valor
                    mapaTareas.set(tarea.persona.nombre, [tareaPendiente]);
                }
                else {
                    //si ya se había registrado alguna tarea a esta persona, obtengo el array de tareas pendientes q le corresponde
                    var tareasPendientes_1 = mapaTareas.get(tarea.persona.nombre);
                    //me aseguro de q no sea undefined antes de operar con él
                    if (tareasPendientes_1 !== undefined) {
                        //agrego la tarea pendiente al array de tareas pendientes
                        tareasPendientes_1.push(tareaPendiente);
                        //actualizo la entrada en el mapa con el nuevo array de tareas pendientes
                        mapaTareas.set(tarea.persona.nombre, tareasPendientes_1);
                    }
                }
            }
        });
        //devuelvo el mapa de tareas organizado
        return mapaTareas;
    }
    //busco las tareas pendientes de una persona en el mapa
    function buscarTareasPendientesPorPersona(nombrePersona, mapaTareas) {
        return mapaTareas.get(nombrePersona);
    }
    //list de tareas
    var tareas = [
        { nombre: "Hacer TP1 progra", estado: "pendiente", prioridad: "alta", persona: { nombre: "Pepe" } },
        { nombre: "Comprar comida perro", estado: "completada", prioridad: "media", persona: { nombre: "Lala" } },
        { nombre: "Pagar pilates", estado: "pendiente", prioridad: "media", persona: { nombre: "Pepe" } },
        { nombre: "Cargar la sube", estado: "pendiente", prioridad: "baja", persona: { nombre: "Pepe" } },
        { nombre: "Lavar la ropa", estado: "pendiente", prioridad: "alta", persona: { nombre: "Toto" } },
    ];
    //convierto las tareas a un mapa
    var mapaTareas = armarMapaTareas(tareas);
    //nombre de la persona para la q quiero mostrar las tareas pendientes
    var nombrePersona = "Pepe";
    //busco las tareas pendientes de la persona en el mapa
    var tareasPendientes = buscarTareasPendientesPorPersona(nombrePersona, mapaTareas);
    //muestro sus tareas pendientes si existen
    if (tareasPendientes !== undefined) {
        console.log("Tareas pendientes de ".concat(nombrePersona, ":"));
        tareasPendientes.forEach(function (tarea) {
            console.log("Tarea: ".concat(tarea.nombre, ", Prioridad: ").concat(tarea.prioridad));
        });
    }
    else {
        console.log("No se encontraron tareas pendientes para ".concat(nombrePersona));
    }
})(ej3 || (ej3 = {}));
