EJERCICIO 1
* Primero pensé una función if que agarrara las tareas.estado === pendiente y otra función que las ordene. Pero cuando pensé en cómo relacionar ambas se me ocurrió plantear las funciones de manera diferente: una función que mapee el array de tareas y genere un nuevo array de tareas pendientes y otra función que, asignándole valores numéricos a las prioridades y usando la función sort, ordene ese array de tareas pendientes y lo muestre.

EJERCICIO 2
* Al ej 1 le agregué una función async await que me da la promesa de que va a obtener el arrray de tareas de una api (es simulado porque en realidad yo le estoy diciendo qué retornar, solo que le digo que se tome 3 segs)
* Después al final agregué otra función para que mi código espere a la promesa de obtener el array tareas que hice al principio.

EJERCICIO 3
* No sé si lo pensé bien y me enredé bastante. Entendí como que lo que pedía era que hay que devolver las tareas pendientes de una persona determinada, ordenadas según prioridad (como en el 1). Para eso arranqué copiando lo que había hecho para el uno y fui agregando cosas.
* Primero agregué una nueva interfaz PersonaAsignada (a la que solo le puse la propiedad nombre para simplificar) y a la interfaz Tarea le agregué la propiedad persona, para conectarla con la nueva interfaz PersonaAsignada.
* Después intenté copiar lo que vimos en clase de Map en la solución 4 del ejercicio 1 de la clase 2 y usar eso mismo pero cambiando lo que fuera necesario para que funcione con mi modelo.
* Agregué algo que me faltó en el ej 1 que es el undefined para cuando una persona no tiene tareas pendientes.

EJERCICIO 4
* Empecé a encararlo como uno que habíamos visto en clase en el que el usuario podía ser un objeto interfaz Persona (con nombre y, quizás apellido con el ?) o el tipo de dato string (pensando en el nombre solamente).
* Usé regex para validar, como el ej 4 de la clase 2.
* Agregué otro tipo de datos para indicar si algo era válido o no, algo medio booleano.
* Indiqué los diferentes casos (nombre o nombre apellido)
* Fui devolviendo válido/inválido según cumplía las condiciones.
* Lo probé en el console con diferentes casos.