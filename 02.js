// 2. Consulta a la API
// Los inversores se quejan que las tareas tardan mucho en cargarse. 
// Necesitamos adaptar el código anterior para QUE LA CARGA SE MUESTRE DE FORMA ASÍNCRONA.
// Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. 
// Podés usar el ejemplo que hicimos en clase.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ej2;
(function (ej2) {
    //función asíncrona que devuelve una promesa (para simular q obtengo las tareas desde una api)
    function obtenerTareas() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //simulo q estoy llamando a mi falsa api (llamada dura 3 segs)
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 3000); })];
                    case 1:
                        //simulo q estoy llamando a mi falsa api (llamada dura 3 segs)
                        _a.sent();
                        //resuelvo la promesa devolviendo un array de tareas simulado    
                        return [2 /*return*/, [
                                { nombre: "Hacer TP1 progra", estado: "pendiente", prioridad: "alta" },
                                { nombre: "Comprar comida perro", estado: "completada", prioridad: "media" },
                                { nombre: "Pagar pilates", estado: "pendiente", prioridad: "media" },
                                { nombre: "Cargar la sube", estado: "pendiente", prioridad: "baja" },
                                { nombre: "Lavar la ropa", estado: "pendiente", prioridad: "alta" },
                            ]];
                }
            });
        });
    }
    //obtengo las tareas pendientes igual q en el ej1
    function obtenerTareasPendientes(tareas) {
        return tareas
            .filter(function (tarea) { return tarea.estado === "pendiente"; })
            .map(function (tarea) { return ({ nombre: tarea.nombre, prioridad: tarea.prioridad }); });
    }
    //same al ej1
    function mostrarTareasPendientesPorPrioridad(tareasPendientes) {
        var valorPorPrioridad = {
            alta: 1,
            media: 2,
            baja: 3,
        };
        tareasPendientes.sort(function (a, b) {
            return valorPorPrioridad[a.prioridad] - valorPorPrioridad[b.prioridad];
        });
        tareasPendientes.forEach(function (tarea) {
            console.log("Nombre: ".concat(tarea.nombre, ", Prioridad: ").concat(tarea.prioridad));
        });
    }
    //como tardé en obtener las tareas con las que voy a ejecutar mis funciones, 
    function cargarTareasYMostrar() {
        return __awaiter(this, void 0, void 0, function () {
            var tareas, tareasPendientes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //muestro algo mientras tarda en cargar
                        console.log("Cargando tareas...");
                        return [4 /*yield*/, obtenerTareas()];
                    case 1:
                        tareas = _a.sent();
                        //muestro las tareas pendientes
                        console.log("Tareas pendientes:");
                        tareasPendientes = obtenerTareasPendientes(tareas);
                        //las muestro ordenadas x prioridad
                        mostrarTareasPendientesPorPrioridad(tareasPendientes);
                        return [2 /*return*/];
                }
            });
        });
    }
    //llamo a esta función para que se ejecute todo (se inicia el proceso de carga)
    cargarTareasYMostrar();
})(ej2 || (ej2 = {}));
