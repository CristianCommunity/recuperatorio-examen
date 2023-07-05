const formNuevaReserva = document.querySelector('#formNuevaReserva')

formNuevaReserva.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fecha_salida = document.querySelector('#fecha_salida').value;
    const fecha_regreso = document.querySelector('#fecha_regreso').value;
    const destino = document.querySelector('#destino').value;
    const cantidad_personas = document.querySelector('#cantidad_personas').value;
    const costo_vuelo = document.querySelector('#costo_vuelo').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;

    const nuevaReserva = {
        nombre,
        apellido,
        fecha_salida,
        fecha_regreso,
        destino,
        cantidad_personas,
        costo_vuelo,
        telefono, 
        email
       }

    const response = await fetch ('/api', {
        method: 'POST',
        body: JSON.stringify(nuevaReserva),
        headers: {
            'Content-Type': 'application/json' // Cuando se envían datos JSON al servidor
        }
    });

    const data = await response.json()

    alert(data.message)
    window.location.href = "/"


})