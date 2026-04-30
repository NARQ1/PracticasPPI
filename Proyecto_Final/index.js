const discos = [
{
    id: 1,
    nombre:"Thiller",
    artista: "Michael Jackson",
    precio:529,
    stock: 10,
    genero: "Pop",
    img: "imagenes/Thriller.png",
},
{
    id: 2,
    nombre:"Angel Face",
    artista: "Stephen Sanchez",
    precio:716,
    stock: 27,
    genero: "Pop",
    img: "imagenes/Angel_face.png",
},
{
    id: 3,
    nombre: "Volcan",
    artista: "Jose Jose",
    precio: 600,
    stock: 42,
    genero: "Latino",
    img: "imagenes/Volcan.png",
},
{
    id: 4,
    nombre:"The Dark Side Of The Moon",
    artista: "Pink floyd",
    precio:500,
    stock: 47,
    genero: "Rock",
    img: "imagenes/TDSOTM.png",
},
{
    id: 5,
    nombre:"Nevermind",
    artista: "Nirvana",
    precio: 729,
    stock: 87,
    genero:"Rock",
    img: "imagenes/nevermind.png",
},
{
    id: 6,
    nombre:"A night of Opera",
    artista: "Queen",
    precio:459,
    stock: 63,
    genero: "Rock",
    img: "imagenes/anightofopera.png",
},
{
    id: 7,
    nombre:"Help!",
    artista: "The beatles",
    precio:620,
    stock: 58,
    genero: "Pop",
    img: "imagenes/help!.png",
},
{
    id: 8,
    nombre: "Random Acces Memories",
    artista: 'Daft Punk',
    precio: 650,
    stock: 76,
    genero: "Pop",
    img: "imagenes/RAM.png",
},
{
    id: 9,
    nombre: "The Romantic",
    artista: "Bruno Mars",
    precio: 500,
    stock: 17,
    genero: "Rock",
    img: "imagenes/theromantic.png",
},
{
    id: 10,
    nombre: "Romance",
    artista: "Luis Miguel",
    precio: 729,
    stock: 57,
    genero: "Latino",
    img: "imagenes/romance.png",
},
{
    id: 11,
    nombre: "DTMF",
    artista: "BadBunny",
    precio: 899,
    stock: 20,
    genero: "Latino",
    img: "imagenes/DTMF.png",
},
{
    id: 12,
    nombre: "Wannabewithu",
    artista: "Cuco",
    precio: 799,
    stock: 30,
    genero: "Latino",
    img: "imagenes/WBWU.png",
},

];


let carro = [];

const contenedorAlbumes=document.querySelector("#seccion-albumes");
const listaCarrito=document.querySelector("#elementos-carrito");
const cuentaCarrito=document.querySelector("#cuenta-carrito");
const totalCarrito=document.querySelector("#carrito-total");
const seleccionarGenero=document.querySelector("#sel-categoria");

function cargarDiscos(discosAFiltrar){
    contenedorAlbumes.innerHTML="";
    discosAFiltrar.forEach(disco =>{
        const div = document.createElement("div");
        div.classList.add("thriller");
        div.innerHTML=`
        <img src="${disco.img}" alt="${disco.nombre}">
        <p><strong>${disco.nombre}</strong></p>
        <p>${disco.artista}</p>
        <legend>${disco.stock} en stock</legend>
        <p><strong>$${disco.precio}</strong></p>
        <button class="agregar_carrito" data-id="${disco.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                </svg>
                </button>
                `;
        contenedorAlbumes.appendChild(div);
        const boton = div.querySelector(".agregar_carrito");
        boton.addEventListener("click", () => {
            agregarAlCarrito(disco.id);
        });
        
    });
}

let carritoBoton=document.querySelector("#carrito");
let mostrarCarrito=document.querySelector("#mostrar-carrito");
let pagarCarrito=document.querySelector("#pagar-boton");
let filtroGenero=document.querySelector("#filtrar-genero");

carritoBoton.addEventListener('click', ()=>{
    mostrarCarrito.classList.toggle('oculto');

});
pagarCarrito.addEventListener('click', ()=>{
    const total=totalCarrito.innerText;
    if(carro.length>0){
        alert(`Compra exitosa!\n\nCargo: $${total}`);
        reiniciarCarrito();
    }
    
});

function agregarAlCarrito (id){
    const discoEncontrado = discos.find(d => d.id==id);

    if(discoEncontrado){
        carro.push({
            nombre: discoEncontrado.nombre,
            precio: discoEncontrado.precio
        })
        actualizarCarrito();
    }
}

function actualizarCarrito(){
    listaCarrito.innerHTML = "";
    if (carro.length === 0) {
        listaCarrito.innerHTML = '<li class="carrito_vacio">El carrito está vacío</li>';
    } else {
        carro.forEach((item, index) => {
            const li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.marginBottom = "5px";
            li.innerHTML = `
                <span>${item.nombre} - <strong>$${item.precio}</b></span>
                <button onclick="eliminarCarrito(${index})" class="eliminar-carrito";"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg></button>
            `;
            listaCarrito.appendChild(li);
        });
    }
    cuentaCarrito.innerText = carro.length;
    const total = carro.reduce((suma, item) => suma + item.precio, 0);
    totalCarrito.innerText=total.toFixed(2)+" MXN";
}

function eliminarCarrito(index){
    carro.splice(index,1);

    actualizarCarrito();
}

function reiniciarCarrito(){
    carro=[];
    actualizarCarrito();
}

filtroGenero.addEventListener('change', (e)=>{
    const genero = e.target.value;
    const tendencias=discos.filter(disco => disco.stock<50);

    if(genero===""){
        cargarDiscos(discos);
    }else{
        const discosFiltrados=discos.filter(disco => {
            return disco.genero===genero;
        });
        cargarDiscos(discosFiltrados);
    }
});

const discosTendencias=discos.filter(disco=>disco.stock<50);
cargarDiscos(discosTendencias);


