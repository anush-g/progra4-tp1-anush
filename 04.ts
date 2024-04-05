// 4. Validando personas
// Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. 
// Necesitamos una función que VALIDE si un texto es un nombre de persona válido o no. 
// Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.
namespace ej4 {

    //ahora que lo pienso, creo que no hacía falta type Usuario
    type Usuario =
        | { tipo: "persona", persona: Persona }
        | { tipo: "nombre", nombre: string }

    interface Persona {
        nombre: string,
        apellido?: string,
    }

    type Validacion =
        | { tipo: "válido" }
        | { tipo: "inválido", explicacion: string }

    function validarNombrePersona(usuario: Usuario): Validacion {

        //caso nombre y apellido
        if (usuario.tipo === "persona") {
            let nombreCompleto: string;
            if (usuario.persona.apellido) {
                nombreCompleto = usuario.persona.nombre + " " + usuario.persona.apellido;
            } else {
                nombreCompleto = usuario.persona.nombre;
            }

            //regex para validar que el nombre contenga solo letras (mayus y minus)
            //agregué ^ porq indica que la string tiene que comenzar con lo indicado
            //agregué \s que significa espacio en blanco, para cuando haya nombre y apellido
            const nombrePersonaRegex = /^[a-zA-Z\s]+$/;
            if (nombrePersonaRegex.test(nombreCompleto)) {
                return { tipo: "válido" };
            } else {
                return { tipo: "inválido", explicacion: "El nombre y/o apellido tiene/n caracteres inválidos." };
            }

            //caso solo nombre
        } else {

            //misma regex q antes, solo le saco el espacio xq en este caso es solo nombre. no apellido
            const nombreRegex = /^[a-zA-Z]+$/;
            if (nombreRegex.test(usuario.nombre)) {
                return { tipo: "válido" };
            } else {
                return { tipo: "inválido", explicacion: "El nombre tiene caracteres inválidos o tiene más de una palabra." };
            }
        }
    }

    //pruebo la función a ver si funciona con distintos casos
    const usuario1: Usuario = { tipo: "persona", persona: { nombre: "Lala", apellido: "Martinez" } };
    const usuario2: Usuario = { tipo: "nombre", nombre: "Toto Lopez" };
    const usuario3: Usuario = { tipo: "nombre", nombre: "1234" };
    const usuario4: Usuario = { tipo: "nombre", nombre: "Pepe Pepito" };
    const usuario5: Usuario = { tipo: "persona", persona: { nombre: "Lala", apellido: "Martinez5" } };


    console.log(validarNombrePersona(usuario1));
    console.log(validarNombrePersona(usuario2)); 
    console.log(validarNombrePersona(usuario3)); 
    console.log(validarNombrePersona(usuario4)); 
    console.log(validarNombrePersona(usuario5)); 
}