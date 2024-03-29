const { where } = require("sequelize");
const Reserva = require("../models/Reserva");
const ctrl = {};

ctrl.renderListaReservas = (req, res) => {
  res.render("listado-reservas");
};

ctrl.renderNuevaReserva = (req, res) => {
  res.render("nueva-reserva");
};

ctrl.renderEditarReserva = (req, res) => {
  const { id } = req.params;
  res.render("editar-reserva", { id });
};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.obtenerReserva = async (req, res) => {
    try {
      const reservas = await Reserva.findAll({
        where: {
          estado: true,
        },
      });
      return res.json(reservas);
    } catch (error) {
      console.log("Error al obtener las reservas", error);
      return res.status(500).json({
        message: "Error al obtener las reservas",
      });
    }
  };

// Obtener una reserva
ctrl.obtenerUnaReserva = async (req, res) => {
    const { id } = req.params;
    try {
      const reserva = await Reserva.findByPk(id);
      return res.json(reserva);
    } catch (error) {
      console.log("Error al obtener la reserva", error);
      return res.status(500).json({
        message: "Error al obtener la reserva",
      });
    }
  };
  

// Crear una reserva
ctrl.crearReserva = async (req, res) => {
    try {
      const {
        nombre,
        apellido,
        fecha_partida,
        fecha_regreso,
        destino,
        cantidad_personas,
        costo_vuelo,
        telefono,
        email,
      } = req.body;
  
      const nuevaReserva = new Reserva({
        nombre,
        apellido,
        fecha_partida,
        fecha_regreso,
        destino,
        cantidad_personas,
        costo_vuelo,
        telefono,
        email,
      });

      //Se guarda en la BD
      await nuevaReserva.save();
      return res.status(201).json({
        message: "Reserva guardada en la BD",
      });
    } catch (error) {
      console.log("Error al crear la reserva", error);
      return res.status(500).json({
        message: "Error al crear la reserva",
      });
    }
  };
  

// Actualizar una reserva
ctrl.actualizarReserva = async (req, res) => {
    try {
      const { id } = req.params;
      const reserva = await Reserva.findByPk(id);
      await reserva.update(req.body);
      return res.json({
        message: "Reserva actualizada exitosamente",
      });
    } catch (error) {
      console.log("Error al actualizar la reserva", error);
      return res.status(500).json({
        message: "Error al actualizar la reserva",
      });
    }
  };
  
// Eliminar una reserva de forma lógica
ctrl.eliminarReserva = async (req, res) => {
    const { id } = req.params;
    try {
      const reserva = await Reserva.findByPk(id);
      await reserva.update({ estado: false });
      return res.json({ message: "Reserva se eliminó correctamente" });
    } catch (error) {
      console.log("Error al eliminar la reserva", error);
      return res.status(500).json({
        message: "Error al eliminar la reserva",
      });
    }
  };
  
module.exports = ctrl;