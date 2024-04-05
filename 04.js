// 4. Validando personas
// Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. 
// Necesitamos una función que VALIDE si un texto es un nombre de persona válido o no. 
// Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.
var ej4;
(function (ej4) {
    function validarNombrePersona(usuario) {
        //caso nombre y apellido
        if (usuario.tipo === "persona") {
            var nombreCompleto = void 0;
            if (usuario.persona.apellido) {
                nombreCompleto = usuario.persona.nombre + " " + usuario.persona.apellido;
            }
            else {
                nombreCompleto = usuario.persona.nombre;
            }
            //regex para validar que el nombre contenga solo letras (mayus y minus)
            //agregué ^ porq indica que la string tiene que comenzar con lo indicado
            //agregué \s que significa espacio en blanco, para cuando haya nombre y apellido
            var nombrePersonaRegex = /^[a-zA-Z\s]+$/;
            if (nombrePersonaRegex.test(nombreCompleto)) {
                return { tipo: "válido" };
            }
            else {
                return { tipo: "inválido", explicacion: "El nombre y/o apellido tiene/n caracteres inválidos." };
            }
            //caso solo nombre
        }
        else {
            //misma regex q antes, solo le saco el espacio xq en este caso es solo nombre. no apellido
            var nombreRegex = /^[a-zA-Z]+$/;
            if (nombreRegex.test(usuario.nombre)) {
                return { tipo: "válido" };
            }
            else {
                return { tipo: "inválido", explicacion: "El nombre tiene caracteres inválidos o tiene más de una palabra." };
            }
        }
    }
    //pruebo la función a ver si funciona con distintos casos
    var usuario1 = { tipo: "persona", persona: { nombre: "Lala", apellido: "Martinez" } };
    var usuario2 = { tipo: "nombre", nombre: "Toto Lopez" };
    var usuario3 = { tipo: "nombre", nombre: "1234" };
    var usuario4 = { tipo: "nombre", nombre: "Pepe Pepito" };
    var usuario5 = { tipo: "persona", persona: { nombre: "Lala", apellido: "Martinez5" } };
    console.log(validarNombrePersona(usuario1));
    console.log(validarNombrePersona(usuario2));
    console.log(validarNombrePersona(usuario3));
    console.log(validarNombrePersona(usuario4));
    console.log(validarNombrePersona(usuario5));
})(ej4 || (ej4 = {}));
