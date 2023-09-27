const shopContent = document.getElementById('shopContent');
const verCarrito = document.getElementById('vercarrito');
const modalContainer = document.getElementById('modal-container');
const cantidadCarrito = document.getElementById('cantidadCarrito')
const canjePuntos = document.getElementById('canjepuntos');



let carrito = []

const getProductos = async()=>{
    
    const resp = await fetch("json/productos.json")
    const data = await resp.json()


    data.forEach((product) =>{
        let content = document.createElement('div');
    
        content.className = 'producto';
        content.innerHTML = `
        <img class="preview" src="${product.img}">
        <h3 class="nombre">${product.nombre}</h3>
        <p class="descripcion">$${product.precio}</p>
        `;
    
        shopContent.append(content);
    
    
        let comprar = document.createElement('button');
        comprar.innerText = 'Agregar al carrito';
        comprar.className = 'comprar'
    
        content.append(comprar);

        comprar.addEventListener("click", () =>{
            try{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Producto "${product.nombre}" agregado`,
                    showConfirmButton: false,
                    timer: 1000
                  })
        const repeticion = carrito.some((repetirProducto) => repetirProducto.id === product.id)
        
        if(repeticion){
            carrito.map((prod) =>{
                if(prod.id === product.id){
                    prod.cantidad++
                }
            })
        }else{
    
        carrito.push({
                id : product.id,
                img : product.img,
                nombre: product.nombre,
                precio : product.precio,
                cantidad : product.cantidad
            });
        }
        contadorCarrito()
    }catch{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No pude cargar los productos, recargá la página',
            showConfirmButton: false,
            timer: 1500
          })
    }
        })
    });
}

getProductos()
function restarPuntaje() {
    const mostrarPuntos = document.getElementById('mostrarPuntos')
    mostrarPuntos.innerText = `0`
}


canjePuntos.addEventListener('click', function canje(){
    if (puntos == 10) {
        Swal.fire({
            title: '<h2>¡Canjeá tus puntos!</h2>',
            icon: 'info',
            html:
            '<p>CD de artista de preferencia</p>',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Canjear',
            denyButtonText: `No canjear`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Canjeado exitosamente!', '', 'success')
              puntos = 0
              restarPuntaje()
            } else if (result.isDenied) {
              Swal.fire('Elemento no canjeado', '', 'info')
            }
          })
    }else if (puntos == 20) {
        Swal.fire({
            title: '<h2>¡Canjeá tus puntos!</h2>',
            icon: 'info',
            html:
            '<p>Remera de artista de preferencia</p>',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Canjear',
            denyButtonText: `No canjear`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Canjeado exitosamente!', '', 'success')
              puntos = 0
              restarPuntaje()
            } else if (result.isDenied) {
              Swal.fire('Elemento no canjeado', '', 'info')
            }
          })
    } else if (puntos == 30) {
        Swal.fire({
            title: '<h2>¡Canjeá tus puntos!</h2>',
            icon: 'info',
            html:
            '<p>Ingresar a sorteo entrada The Rose Argentina</p>',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Canjear',
            denyButtonText: `No canjear`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Canjeado exitosamente!', '', 'success')
              puntos = 0
              restarPuntaje()
            } else if (result.isDenied) {
              Swal.fire('Elemento no canjeado', '', 'info')
            }
          })
    }else{
        Swal.fire({
            title: '<h2>No hay puntos</h2>',
            icon: 'info',
            html:
              '<h3>Todavía no tenés puntos para canjear</h3>',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!'
          })
    }
   
   
})



