
/* Carrito de compras */

const cantProductos = document.querySelector('.counter_cart')//cantidad de productos en el carrito
const btnBuy = document.querySelector('.btn_buy')//boton comprar del carrito
const precioTotal = document.getElementById('precio_total')//precio total del carrito
const subTotal = document.getElementById('sub_cart')//precio subtotal
const sellCart = document.getElementById('sell_cart')// LO MAS IMPORTANTE , es donde se renderiza los objetos en el carrito
const overlay = document.querySelector('.overlay');//overlay
const cartMenu = document.querySelector('.cart');//carrito en general
const btnClose = document.querySelector('.btn_close');//boton que cierra el carrito 
const cartBtn = document.getElementById('button-card');// icom carrito del navbar
//const botonesAgregar = document.querySelectorAll('.btn_card');

/* login**/

const loginConainer= document.getElementById('login-container');//login en general
const loginUsuario= document.querySelector('.login-usuario');//boton iniciar sesion
const btnLogin = document.querySelector('.btn-login');// boton cerrar
const usuarioIcons=document.querySelector('.usuario-icons'); //icons de usuario
//btn-login
/******categorias */

const categoriasContainer = document.getElementById('categorias-container');//caja donde se renderiza los productos de categoria 
const renderContainer = document.getElementById('categorias-render');//donde se va a rasterizar los productos 
const navMenu=document.getElementById('nav-menu');//aca estas las obciones de categorias

/***nueva coleccion */

const coleccionContainer = document.getElementById('nueva-coleccion-container') // aca se renderiza nueva coleccion




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
                <button class = "btn btn_card buttonAgregar" data-id = ${producto.id} data-resta="resta">-</button>
                <span id = "cant_item" data-id = ${producto.id}>${producto.cant}</span>
                <button class = "btn btn_card buttonAgregar" data-id = ${producto.id} data-suma="suma">+</button>
            </div> 
            `
}

const renderCarrito = () => {
    //sellCart.innerHTML = "hola arranco";
    sellCart.innerHTML = carrito.map(renderCompra).join('');
}

const checkCarrito = (carrito) => {//si no hay productos , desabilitar compra
    
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
    //  sellCart.addEventListener('click', buyItems)//para aumentar o disminuir la cantidad de productos
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
        cantProductos.textContent = cantTotalproductos();
    }
};
/******************** login ******************** */


// loginConainer
// loginUsuario
// btnLogin
// usuarioIcons


const abrirLogin= (e)=>{

    loginConainer.classList.remove('hidden');

}

const CerrarLogin = (e) =>{
    loginConainer.classList.add('hidden');
}




/*************************************** */
//render por categorias

const renderCardPruducto = (objeto) =>{
    const { id,name,precio,data,img,cat} = objeto;
    return `
    <div class="card-coleccion">
        <img class="img-coleccion" src=${img} alt="">
        <h3 class="card-title"> ${name}</h3>
        <p>${data}</p>
        <span>$ ${precio}</span>
        <button class="buttonAgregar" data-id=${id} data-category=${cat} >AGREGAR AL CARRITO</button>
    </div>
    `
}

const renderCategoria = (e) =>{
    const producto = e.target.dataset.cat;
    if(producto){
        categoriasContainer.classList.remove('hidden');
    }else{
        return;
    }

    const filtrado = products.filter(product => product.cat == producto );
    console.log(filtrado);
    renderContainer.innerHTML=filtrado.map(renderCardPruducto).join('');

}

const cerrarRenderCategorias = (e)=>{
    if(e.target.classList.contains('btn-categories')){
        categoriasContainer.classList.add('hidden');
    }
    
}

/***************************************************/
//renderizar nueva coleccion 



const renderNuevaColeccion = () =>{
    const filtrado = products.filter(product => product.nuevoColeccion )
    coleccionContainer.innerHTML=filtrado.map(renderCardPruducto).join('');
    

}


/********************************/
//calcular precio total de un producto 
const cantTotalproductos = () => {//devuelve la cant total de todos los productos
    let totalProductos = 0
    carrito.forEach(prod =>
        totalProductos = totalProductos + prod.cant)
    return totalProductos
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
        
        tag = e.target.getAttribute('data-id');//devuelve lo que tiene data id
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

const sumarProductos = (e) =>{
    if(e.target.dataset.suma=="suma"){
       
        const idTarjeta = e.target.getAttribute('data-id');
        //let producto = carrito.find(prod => prod.id == Number( idTarjeta));//producto encontrado
        
        carrito = carrito.map(prod => {
            return prod.id == idTarjeta
              ? { ...prod, cant: prod.cant + 1 }
              : prod;
          }
        )
        saveCarrito(carrito);
        subTotal.textContent = setPrecio(carrito);
        precioTotal.textContent = setPrecio(carrito);
        renderCarrito();
        cantProductos.textContent = cantTotalproductos();
    };

    }


const restarProductos = (e) =>{
    if(e.target.dataset.resta=="resta"){
        const idTarjeta = e.target.getAttribute('data-id');
        const objetoEncontrado = carrito.find(product => product.id == idTarjeta);
        if(objetoEncontrado.cant == 1 ){
            
            carrito=carrito.filter( producto => producto.id != objetoEncontrado.id);
            cantProductos.textContent = cantTotalproductos();
            saveCarrito(carrito);
            subTotal.textContent = setPrecio(carrito);
            precioTotal.textContent = setPrecio(carrito);
            renderCarrito();
            checkCarrito(carrito);
            
        }else{
            carrito = carrito.map(prod => {
                return prod.id == idTarjeta
                  ? { ...prod, cant: prod.cant - 1 }
                  : prod;
              }
            )
            cantProductos.textContent = cantTotalproductos();
            saveCarrito(carrito);
            subTotal.textContent = setPrecio(carrito);
            precioTotal.textContent = setPrecio(carrito);
            renderCarrito();         
        }       
    }

};


const modificarCantDeProducts= (e) =>{
    sumarProductos(e);
    restarProductos(e);

}

/******************************/


const renderPage = () => {

    renderCarrito();//renderiza el carrito vacio o lo que este en el LS
    renderNuevaColeccion();
    coleccionContainer.addEventListener('click', addCarrito)//agregar en el carrito
    cartMenu.addEventListener("click",modificarCantDeProducts)
 

}


init = () => {
  
  

     window.addEventListener('DOMContentLoaded', renderPage);//renderizar la pagina en general , incluyendo carrito 
     cantProductos.textContent = cantTotalproductos();
    cartBtn.addEventListener('click', toggleCart);
    btnClose.addEventListener('click', closeCart);
    window.addEventListener('scroll', closeOnScroll);
    btnBuy.addEventListener('click', compraFinal);
    navMenu.addEventListener('click',renderCategoria);
    categoriasContainer.addEventListener('click',cerrarRenderCategorias);
    usuarioIcons.addEventListener('click',abrirLogin);
    btnLogin.addEventListener('click', CerrarLogin);
    console.log("hasta aqui bien 7");
}

// loginConainer
// loginUsuario
// btnLogin
// usuarioIcons
init();