function addImgs(){
    let perros=document.querySelector("#idPerros");
    let gatos=document.querySelector("#idGatos");

    let imgPerro=document.createElement("img");
    imgPerro.src="https://www.vitakraft.com/fileadmin/_processed_/1/3/csm_el_origen_del_perro_3cc21c0da1.jpg";

    let imgGato=document.createElement("img");
    imgGato.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg";

    document.querySelector("#idPerros").insertAdjacentElement("beforeend",imgPerro);

    document.querySelector("#idGatos").insertAdjacentElement("beforeend",imgGato);
}

function toggleClass(){
        let imagenes=document.querySelectorAll("img");
        for(let img of imagenes){
            img.classList.toggle("roundImg");
        }
}