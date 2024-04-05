// 1. Mostrar tareas (3 puntos)
// MOSTRAR en consola todas las tareas que tiene pendientes (no terminadas) el usuario. 
// ORDENARLAS por prioridad (Alta, Media, Baja).

namespace ej1{
    //no necesito usar type xq sé que solo me va a ingresar un tipo de datos: Tarea, que va a tener nombre, estado y prioridad
    //para definir mi tipo de tarea. este es un conjunto nuevo de datos
    interface Tarea {
        nombre: string;
        estado: string;
        //completada?:string;
        prioridad: string;
    }

    interface TareaPendiente {
        nombre: string;
        prioridad: string;
    }

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
    function obtenerTareasPendientes(tareas: Tarea[]): TareaPendiente[] {
        return tareas
            //tarea = cada elemento del array tareas
            .filter(tarea => tarea.estado === "pendiente") //encuentro las tareas pendientes
            .map(tarea => ({ nombre: tarea.nombre, prioridad: tarea.prioridad })); //mapeo el nombre y la prioridad de las tareas pendientes
    }

    //declaro tareas como un array de objetos que cumplen con la interfaz Tarea
    const tareas: Tarea[] = [
        { nombre:"Hacer TP1 progra", estado:"pendiente", prioridad:"alta" },
        { nombre:"Comprar comida perro", estado:"completada",  prioridad:"media" },
        { nombre:"Pagar pilates", estado:"pendiente", prioridad:"media" },
        { nombre:"Cargar la sube", estado:"pendiente",  prioridad:"baja" },
        { nombre:"Lavar la ropa", estado:"pendiente", prioridad:"alta" },
    ];
    
    //obtengo las tareas pendientes
    const tareasPendientes: TareaPendiente[] = obtenerTareasPendientes(tareas);

    //función q ordena tareas pendientes por prioridad y las muestra ordenadas
    function mostrarTareasPendientesPorPrioridad(tareasPendientes: TareaPendiente[]){

        //para poder ordenarlas x prioridades, le asigno valores numéricos a cada prioridad a través de un objeto
        //defino mi tipo de datos que va a tener este objeto: la prioridad - que es un string - con su valor asociado de tipo number
        const valorPorPrioridad: { [prioridad: string]: number } = {
            alta: 1,
            media: 2,
            baja: 3,
        };
    
        //uso función sort, q me devuelve el arreglo (tareasPendientes) ordenado según lo que le pido, que es que 
        tareasPendientes.sort((a, b) => {
            //valorPorPrioridad[a.prioridad] acá accedo al valor numérico de la prioridad de una tarea a
            //con esta resta voy comparando los valores de prioridad de cada tarea para ordenarlos con sort
            //si resta da negativa --> a.prioridad < b.prioridad --> entonces se ordena a, b
            //si resta da positiva --> a.prioridad > b.prioridad --> entonces se ordena b, a
            return valorPorPrioridad[a.prioridad] - valorPorPrioridad[b.prioridad];
        });
    
        //muestro cada tarea en su orden, tomando el tareasPendientes ya modificado x el sort
        tareasPendientes.forEach(tarea => {
            console.log(`Tarea: ${tarea.nombre}, Prioridad: ${tarea.prioridad}`);
        });
    }

    //muestro
    console.log("Tareas pendientes ordenadas por prioridad:");
    //llamo a la función mostrar
    mostrarTareasPendientesPorPrioridad(tareasPendientes);
}