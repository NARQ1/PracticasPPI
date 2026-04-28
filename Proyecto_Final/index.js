const discos = [
{
    id: 1,
    nombre:"Thiller",
    artista: "Michael Jackson",
    precio:529,
    stock: 10,
    genero: "pop",
    img: "thriller.png",
},
{
    id: 2,
    nombre:"Angel Face",
    artista: "Stephen Sanchez",
    precio:716,
    stock: 27,
    genero: "pop",
    img: "thriller.png",
},
{
    id: 3,
    nombre: "Volcan",
    artista: "Jose Jose",
    precio: 600,
    stock: 42,
    genero: "latino",
    img: "thriller.png",
},
{
    id: 4,
    nombre:"The Dark Side Of The Moon",
    artista: "Pink floyd",
    precio:500,
    stock: 37,
    genero: "rock",
    img: "thriller.png",
},
{
    id: 5,
    nombre:"Nevermind",
    artista: "Nirvana",
    precio: 729,
    stock: 87,
    genero:"Rock",
    img: "thriller.png",
},
{
    id: 6,
    nombre:"A night of Opera",
    artista: "Queen",
    precio:459,
    stock: 63,
    genero: "Rock",
    img: "thriller.png",
},
{
    id: 7,
    nombre:"Help!",
    artista: "The beatles",
    precio:620,
    stock: 48,
    genero: "pop",
    img: "thriller.png",
},
{
    id: 8,
    nombre: "Random Acces Memories",
    artista: 'Daft Punk',
    precio: 650,
    stock: 76,
    genero: "pop",
    img: "thriller.png",
},
{
    id: 9,
    nombre: "The Romantic",
    artista: "Bruno Mars",
    precio: 500,
    stock: 17,
    genero: "rock",
    img: "thriller.png",
},
{
    id: 10,
    nombre: "Romance",
    artista: "Luis Miguel",
    precio: 729,
    stock: 57,
    genero: "latino",
    img: "thriller.png",
},
{
    id: 11,
    nombre: "DTMF",
    artista: "BadBunny",
    precio: 899,
    stock: 20,
    genero: "latino",
    img: "thriller.png",
},
{
    id: 12,
    nombre: "Ultra Sodade",
    artista: "Kevin Kaarl",
    precio: 599,
    stock: 30,
    genero: "latino",
    img: "thriller.png",
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
        if(disco.stock<50){
            const div = document.createElement("div");
            div.classList.add("thriller");
            div.innerHTML=`
            <img src="${disco.img}" alt="${disco.nombre}">
            <p><strong>${disco.nombre}</strong></p>
            <p>${disco.artista}</p>
            <legend>${disco.stock} en stock</legend>
            <p><strong>$${disco.precio}</p>
            <button class="agregar_carrito">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                    </svg>
                    </button>
                    `;
            contenedorAlbumes.appendChild(div);
        }
        
    });
}

let carritoBoton=document.querySelector("#carrito");
let mostrarCarrito=document.querySelector("#mostrar-carrito");

carritoBoton.addEventListener('click', ()=>{
    mostrarCarrito.classList.toggle('oculto');

});




cargarDiscos(discos); 