// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require("express").Router();

const {
  renderNuevaReserva,
  renderListaReservas,
  renderEditarReserva,
  obtenerReserva,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
  obtenerUnaReserva,
} = require("../controllers/reserva.controllers.js");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================
// Obtener todas las reservas
router.get("/", renderListaReservas);

// Formulario para crear una reserva
router.get("/crear-reserva", renderNuevaReserva);

// Formulario para actualizar una reserva
router.get("/actualizar-reserva/:id", renderEditarReserva);


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

//Obtener una reserva

router.get("/api/:id", obtenerUnaReserva);

// Obtener todas las reservas
router.get("/api/", obtenerReserva);

// Crear una reserva
router.post("/api/", crearReserva);

// Actualizar una reserva
router.put("/api/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/:id", eliminarReserva);

 
 module.exports = router;