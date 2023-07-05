const formReserva = document.querySelector('#formNuevaReserva');
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const fecha_salida = document.querySelector('#fecha_salida')
const fecha_regreso = document.querySelector('#fecha_regreso')
const habitacion = document.querySelector('#destino')
const cantidad_personas = document.querySelector('#cantidad_personas')
const costo_vuelo = document.querySelector('#costo_vuelo')
const telefono = document.querySelector('#telefono')
const email = document.querySelector('#email')


document.addEventListener('DOMContentLoaded', async () => {
    // Traemos la reserva que se va a editar
    const response = await fetch(`/api/${reservaId}`);
    const data = await response.json();

    // Mostrar en el formulario los datos de la reserva que se quiere actualizar
    nombre.value = data.nombre;
    apellido.value = data.apellido;
    fecha_salida.value = data.fecha_salida;
    fecha_regreso.value = data.fecha_regreso;
    destino.value = data.destino;
    cantidad_personas.value = data.cantidad_personas;
    costo_vuelo.value = data.costo_vuelo;
    telefono.value = data.telefono;
    email.value = data.email;
});


formReserva.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    reservaActualizada = {
        nombre: nombre.value,
        apellido: apellido.value,
        fecha_ingreso: fecha_salida.value,
        fecha_salida: fecha_regreso.value,
        habitacion: destino.value,
        cantidad_personas: cantidad_personas.value,
        costo_vuelo: costo_vuelo.value,
        telefono: telefono.value,
        email: email.value,
    }


    // Se envían los nuevos datos editados al servidor express
    const response = await fetch(`/api/${reservaId}`, {
        method: 'PUT',
        body: JSON.stringify(reservaActualizada),
        headers: {
            'Content-Type':'application/json'
        }
    })

    // Mostrar mensajes al usuario
   window.location.href = '/';

})