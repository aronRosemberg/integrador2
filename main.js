

const cantProductos = document.querySelector('.counter_cart')//cantidad de productos en el carrito
const btnBuy = document.querySelector('.btn_buy')//boton comprar del carrito
const precioTotal = document.getElementById('precio_total')//precio total del carrito
const subTotal = document.getElementById('sub_cart')//precio subtotal
const sellCart = document.getElementById('sell_cart')// LO MAS IMPORTANTE , es donde se renderiza los objetos en el carrito
const coleccionContainer = document.getElementById('nueva-coleccion-container') // aca se renderiza nueva coleccion


/* Carrito de compras */


const overlay = document.querySelector('.overlay');//overlay
const cartMenu = document.querySelector('.cart');//carrito en general
const btnClose = document.querySelector('.btn_close');//boton que cierra el carrito 
// const cartBtn = document.querySelector('.cart_container');// icom carrito del navbar

const cartBtn = document.getElementById('button-card');// icom carrito del navbar

let carrito = JSON.parse(localStorage.getItem("compras")) || [];

const saveCarrito = (carritoList) => {
    localStorage.setItem("compras", JSON.stringify(carritoList))
}

/*CARRITO FUNCIONES*/

const renderCompra = (producto) => {//se renderiza objeto en el carrito de compra

    return `<div class = "card buy_cart" >
                <img  class = "img" src = ${producto.img} >
                <div class = "text_card" >
                    <span class = "tittle_card" > ${producto.name} </span> 
                    <p class = "subtitle_card" >${producto.data}</p> 
                    <span class="price_card">$ ${producto.precio} </span> 
                </div> 
                <button class = "btn btn_card" data-id = ${producto.id} data-resta = "resta">-</button>
                <span id = "cant_item" data-id = ${producto.id}>${producto.cant}</span>
                <button class = "btn btn_card" data-id = ${producto.id} >+</button>
            </div> 
            `
}

const renderCarrito = () => {
    //sellCart.innerHTML = "hola arranco";
    sellCart.innerHTML = carrito.map(renderCompra).join('');
}

const checkCarrito = (carrito) => {//si no hay productos , desabilitar compra
    console.log("hasta desavilitar bien")
    if (carrito.length === 0) {
        btnBuy.classList.remove( 'btn_buy')//aca retire algo    
        btnBuy.classList.add('disable_buy')
        sellCart.innerHTML = `<h4 class = "cart_empty">No hay productos en el carrito</h4>`
    } else {
        btnBuy.classList.remove('disable_buy')
        btnBuy.classList.add('btn_buy')
    }
}

const toggleCart = () => {
    checkCarrito(carrito);//renderiza mensaje no hay productos en el carrito
    cartMenu.classList.remove('hidden');//mostrar todo el carrito 
    //cartMenu.classList.toggle('open_cart');//muestra el carrito
    overlay.classList.add('show_overlay');//muestra el overlay
    //sellCart.addEventListener('click', buyItems)//para aumentar o disminuir la cantidad de productos
    precioTotal.textContent = setPrecio(carrito)//renderiza el precio total
    subTotal.textContent = setPrecio(carrito)//renderiza el precio total

}

const closeCart = () => {
    //cartMenu.classList.remove('open_cart');
    cartMenu.classList.add('hidden');
    overlay.classList.remove('show_overlay');
    
};

const closeOnScroll = () => {
    if (cartMenu.classList.contains('hidden'))
        return;

    cartMenu.classList.add('hidden');
    overlay.classList.remove('show_overlay');
};

const compraFinal = () => {
    if (!carrito.length) return;
    if (window.confirm('Desea completar su compra?')) {
        carrito = [];
        saveCarrito(carrito);
        alert('Compra exitosa');
        precioTotal.textContent = setPrecio(carrito);
        subTotal.textContent = setPrecio(carrito);
        renderCarrito();
        cantProductos.textContent = cantTotalproductos()
    }
};

/***************************************************/
//renderizar nueva coleccion 

const renderCardNuevaColeccion = (objeto) =>{
    const { id,name,precio,data,img,cat} = objeto;
    return `
    <div class="card-coleccion">
        <img class="img-coleccion" src=${img} alt="">
        <h3 class="card-title"> ${name}</h3>
        <p>${data}</p>
        <span>${precio}</span>
        <button class="buttonAgregar" data-id=${id} data-category=${cat} >AGREGAR AL CARRITO</button>
    </div>
    `
}

const renderNuevaColeccion = () =>{
    const filtrado = products.filter(product => product.nuevoColeccion )
    coleccionContainer.innerHTML=filtrado.map(renderCardNuevaColeccion).join('');
    

}


/********************************/
//calcular precio total de un producto 
const cantTotalproductos = () => {//devuelve la cant total de todos los productos
    let totalProductos = 0
    carrito.forEach(prod =>
        totalProductos = totalProductos + prod.cant)
  
}        
//calcular precio 
const setPrecio = (carrito) => {//devuelve el precio total de todos los productos
    pTotal = 0
    carrito.forEach(prod => pTotal += (prod.precio * prod.cant))
   
    return pTotal
}


/*********************************************** */
//aniadir productos al carrito
const addCarrito = (e) => {
    
   

    if (e.target.classList.contains("buttonAgregar")) {//node nodeName devuleve la etiqueta html 
        
        tag = e.target.getAttribute('data-id');

        
       
        const producto = products.find(item => item.id == tag)//devuelve el objeto
        let existente = carrito.find(prod => prod.id == producto.id)//devuelve la card del carrito
        
        if (!existente ) {//si no existe el elemnto en el carrito
           
            //cart = [...cart, { ...product, quantity: 1 }];
            carrito = [...carrito, {...producto , cant: 1}];
            
            saveCarrito(carrito);
            renderCarrito();            
            console.log("bien hasta aca");
            subTotal.textContent = setPrecio(carrito);
            precioTotal.textContent = setPrecio(carrito);
            
        }else{

            existente.cant = existente.cant + 1 ;
             //carrito = [...carrito, { ...existente , cant: (existente.cant + 2)}];
           
            saveCarrito(carrito);
            subTotal.textContent = setPrecio(carrito);
            precioTotal.textContent = setPrecio(carrito);
            renderCarrito();
                
        }
        
         cantProductos.textContent = cantTotalproductos();//actualiza el contador con la cant total de productos
    }else {
        return;
    }


}

/******************************/


const renderPage = () => {

    renderCarrito();//renderiza el carrito vacio o lo que este en el LS
    renderNuevaColeccion();
    coleccionContainer.addEventListener('click', addCarrito)//agregar en el carrito
    
 

}

const prueba = (e) => {

    
    if (e.target.classList.contains("buttonAgregar")) {//node nodeName devuleve la etiqueta html 
        
        tag = e.target.getAttribute('data-id');

        // tag = e.target.getAttribute('data-id')
       
        const producto = products.find(item => item.id == tag)//devuelve el objeto
        let existente = carrito.find(prod => prod.id == producto.id)//devuelve la card del carrito
        
        if (!existente ) {//si no existe el elemnto en el carrito
           
            //cart = [...cart, { ...product, quantity: 1 }];
            carrito = [...carrito, {...producto , cant: 1}];
            
            saveCarrito(carrito);
            renderCarrito();            
            console.log("bien hasta aca");
            subTotal.textContent = setPrecio(carrito);
            precioTotal.textContent = setPrecio(carrito);
            
        }else{

            existente.cant = existente.cant + 1 ;
             //carrito = [...carrito, { ...existente , cant: (existente.cant + 2)}];
           
            saveCarrito(carrito);
            subTotal.textContent = setPrecio(carrito);
            precioTotal.textContent = setPrecio(carrito);
            renderCarrito();
                
        }
        
         cantProductos.textContent = cantTotalproductos();//actualiza el contador con la cant total de productos
    }else {
        console.log("no encontro el boton agregar")
    }

}

init = () => {
  
  

     window.addEventListener('DOMContentLoaded', renderPage);//renderizar la pagina en general , incluyendo carrito 
   
    cartBtn.addEventListener('click', toggleCart);
   
    btnClose.addEventListener('click', closeCart);
 
    window.addEventListener('scroll', closeOnScroll);
 
    cantProductos.textContent = cantTotalproductos();

    btnBuy.addEventListener('click', compraFinal);
    
    //coleccionContainer.addEventListener('click', prueba);
    //console.log(carrito);
    console.log("hasta aqui bien 7");
}


init();