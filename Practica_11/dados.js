function dadoAlumno(){
    let opcion;
    let resultado;

    opcion=parseInt(prompt("Ingresa una opcion:\n1. Dado 6 caras\n2. Dado 20 caras\n3. dado 100 caras\nOpcion: "));
    switch(opcion){
        case 1:
            resultado=Math.floor(Math.random()*6)+1;
            break;
        case 2:
            resultado=Math.floor(Math.random()*6)+1;
            break;
        case 3:
            resultado=Math.floor(Math.random()*100)+1;
            break;
        default:
            alert("La opcion ingresada no fue correcta.");
    }
    alert(`El resultado del dado fue ${resultado}`);
}
dadoAlumno();