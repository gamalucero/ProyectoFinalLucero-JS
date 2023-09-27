    let puntos = 0
    const pintarCarrito = () =>{
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header'
    modalHeader.innerHTML = `
    <h2 class= "modal-title">Carrito</h2>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement('h3')
    modalbutton.innerText = "X"
    modalbutton.className = 'modal-header-btn'

    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((product) =>{
         let carritoContent = document.createElement('table')
         carritoContent.className = 'modal-content'
         carritoContent.innerHTML += `
         <tr>
             <td><img src="${product.img}" alt="${product.nombre}"></td>
             <td>${product.nombre}</td>
             <td>$${product.precio}</td>
             <td>${product.cantidad}</td>
             <td>$${product.cantidad * product.precio}</td>
             <td><span class="eliminar-producto">X</span></td>
         </tr>
     `;
     modalContainer.append(carritoContent)

     let eliminar = carritoContent.querySelector(".eliminar-producto")

     eliminar.addEventListener("click", ()=>{
        eliminarProducto(product.id);
     })

    }) 

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalCompra = document.createElement('div')
    totalCompra.className = 'total-compra'
    totalCompra.innerHTML = `<p>Total: $${total}</p>`;
    modalContainer.append(totalCompra)

    const botonComprar = document.createElement('div')
    botonComprar.className = "divcomprar"
    botonComprar.innerHTML = `<a href="html/checkin.html" class="btn-comprar" target="_blank">Comprar</a>`
    modalContainer.append(botonComprar)
    if (carrito.length <= 0) {
        botonComprar.style.display= "none"
    }else{
        botonComprar.style.display = "block"
    }
    botonComprar.addEventListener('click', function sumarPuntaje() {
        if (total >= 30000) {
            puntos = 30;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sumas 30 puntos',
                showConfirmButton: true,
                
              })
        } else if (total >= 20000) {
            puntos = 20;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sumas 20 puntos',
                showConfirmButton: true,
                
              })
        } else if (total >= 10000) {
            puntos = 10;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sumas 10 puntos',
                showConfirmButton: true,
                
              })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Recarga la página',
                showConfirmButton: true,
                
              })
        }

         carrito = [];

        pintarCarrito();
        contadorCarrito()

        function mostrarPuntaje() {
            const mostrarPuntos = document.getElementById('mostrarPuntos')
            mostrarPuntos.innerText = `${puntos}`
        }
        mostrarPuntaje()
    })
    
};

verCarrito.addEventListener("click", pintarCarrito);
const eliminarProducto = (id) =>{
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    }) 
    contadorCarrito()
    pintarCarrito()
}


const contadorCarrito = () =>{
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}



