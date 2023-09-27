const enviar = document.getElementById('botoncheck');
let nombreUsuario = document.getElementById('nombre-frm');
let dni = document.getElementById('dni-frm');
let tarjeta = document.getElementById('credito');
let cvv = document.getElementById('cvv-frm');
const realizado = document.getElementById('realizado');
const formulario = document.querySelector('form');
let mensajeError = document.getElementById('mensajeerror');

let venta = () => {
    let cvvValue = parseInt(cvv.value);
    let tarjetaValue = parseInt(tarjeta.value);
    let dniValue = parseInt(dni.value);

    if (cvvValue < 100 || cvvValue > 999  || tarjetaValue < 1000000 || tarjetaValue > 9999999 || dniValue < 10000000 || dniValue >99999999 || !isNaN(nombreUsuario.value)) {
        mensajeError.innerText = 'Error al validar los datos'
    } else {
        mensajeError.style.display = "none"; 
        formulario.style.display = "none"; 
        realizado.innerHTML = "";
        realizado.style.display = "flex";
        const modalHeader = document.createElement('div');
        realizado.className = 'ventadiv';
        modalHeader.innerHTML = `
            <h2 class="ventahecha">Pago realizado!</h2>
        `;
        realizado.append(modalHeader);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pago realizado!',
            showConfirmButton: false,
            timer: 1000
          }).then(() => {
            window.close();
          });
          
    }
};

enviar.addEventListener("click", venta);
