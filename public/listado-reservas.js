const obtenerDatos = async () => {
    // Solicitar las reservas al servidor
    const data = await fetch('/api', {
        method: 'GET'
    });
    const reservas = await data.json();
    return reservas;
}


const mostrarReservas = (reservas, tablaElement) => {
let registros = '';
reservas.forEach(reserva => {
    registros += `
        <tr>
            <td>${reserva.codigo}</td>
            <td>${reserva.nombre}</td>
            <td>${reserva.apellido}</td>
            <td>${reserva.fecha_partida}</td>
            <td>${reserva.fecha_regreso}</td>
            <td>${reserva.destino}</td>
            <td>${reserva.cantidad_personas}</td>
            <td>${reserva.costo_vuelo}</td>
            <td>${reserva.telefono}</td>
            <td>${reserva.email}</td>
            <td>
           <div class="row">
           <a href="/actualizar-reserva/${reserva.id}" class="btn btn-sm btn-warning">Editar</a>
           <button class="btn btn-danger btn-sm" data-id="${reserva.id}" onClick=eliminarReserva(event)>Eliminar</button>
           </div>
            </td>
        </tr>
    `
})

tablaElement.innerHTML = registros;

}


const eliminarReserva = async (e) => {

console.log(e)
const id = e.target.dataset.id;


const response = await fetch(`/api/${id}`,{
    method: 'DELETE',
})

const data = await response.json();

alert(data.message);

window.location.href = "/"

}


document.addEventListener('DOMContentLoaded', async () => {
// Mostrar las reservas en la tabla
const tbody = document.querySelector('#listadoReservas');
const reservas = await obtenerDatos() // undefined si no obtenerDatos no retorna nada
mostrarReservas(reservas, tbody)

});