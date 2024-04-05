// 2. Consulta a la API
// Los inversores se quejan que las tareas tardan mucho en cargarse. 
// Necesitamos adaptar el código anterior para QUE LA CARGA SE MUESTRE DE FORMA ASÍNCRONA.
// Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. 
// Podés usar el ejemplo que hicimos en clase.

namespace ej2{
    interface Tarea {
        nombre: string;
        estado: string;
        prioridad: string;
    }
    
    interface TareaPendiente {
        nombre: string;
        prioridad: string;
    }
    
    //función asíncrona que devuelve una promesa (para simular q obtengo las tareas desde una api)
    async function obtenerTareas(): Promise<Tarea[]> {
        //simulo q estoy llamando a mi falsa api (llamada dura 3 segs)
        await new Promise(resolve => setTimeout(resolve, 3000));
    
        //resuelvo la promesa devolviendo un array de tareas simulado    
        return [
            { nombre:"Hacer TP1 progra", estado:"pendiente", prioridad:"alta" },
            { nombre:"Comprar comida perro", estado:"completada",  prioridad:"media" },
            { nombre:"Pagar pilates", estado:"pendiente", prioridad:"media" },
            { nombre:"Cargar la sube", estado:"pendiente",  prioridad:"baja" },
            { nombre:"Lavar la ropa", estado:"pendiente", prioridad:"alta" },
        ];
    }
    
    //obtengo las tareas pendientes igual q en el ej1
    function obtenerTareasPendientes(tareas: Tarea[]): TareaPendiente[] {
        return tareas
            .filter(tarea => tarea.estado === "pendiente")
            .map(tarea => ({ nombre: tarea.nombre, prioridad: tarea.prioridad }));
    }
    
    //same al ej1
    function mostrarTareasPendientesPorPrioridad(tareasPendientes: TareaPendiente[]){
        const valorPorPrioridad: { [prioridad: string]: number } = {
            alta: 1,
            media: 2,
            baja: 3,
        };
    
        tareasPendientes.sort((a, b) => {
            return valorPorPrioridad[a.prioridad] - valorPorPrioridad[b.prioridad];
        });
    
        tareasPendientes.forEach(tarea => {
            console.log(`Nombre: ${tarea.nombre}, Prioridad: ${tarea.prioridad}`);
        });
    }
    
    //como tardé en obtener las tareas con las que voy a ejecutar mis funciones, 
    async function cargarTareasYMostrar() {
        //muestro algo mientras tarda en cargar
        console.log("Cargando tareas...");
    
        //espero de manera asíncrona hasta q se cumpla la promesa hecha x obtenerTareas
        //declaro const tareas que va a contener el resultado de la promesa cuando se cumpla (en 3 segs)
        const tareas: Tarea[] = await obtenerTareas();
    
        //muestro las tareas pendientes
        console.log("Tareas pendientes:");

        //las obtengo
        const tareasPendientes: TareaPendiente[] = obtenerTareasPendientes(tareas);
    
        //las muestro ordenadas x prioridad
        mostrarTareasPendientesPorPrioridad(tareasPendientes);
    }
    
    //llamo a esta función para que se ejecute todo (se inicia el proceso de carga)
    cargarTareasYMostrar();
    
}