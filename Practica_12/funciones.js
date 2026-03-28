 let signosChinos = ["Mono","Gallo","Perro","Cerdo","Rata","Buey","Tigre","Conejo","Dragón","Serpiente","Caballo","Cabra"];

  let calculaSigno=function (){
    let anio=parseInt(prompt("Cual es tu anio de naciento chino?: "));
    let signo=signosChinos[anio%12];
    console.log(`Tu signo chino es: ${signo}`);
  }

  let adivinaNum=function(){
    let aleatorio=Math.floor(Math.random()*100+1);
    let entero;
    for(let i=0;i<10;i++){
        entero=parseInt(prompt("Adivina un numero entre 1 y 100: "));
        if(aleatorio>entero){
            alert(`El numero a adivinar es mayor, te quedan ${10-i-1} intentos.\n`);
        }
        else if(aleatorio<entero){
            alert(`El numero a adivinar es menor, te quedan ${10-i-1} intentos.\n`)
        }
        else{
            alert(`Felicidades! te tomo ${i+1} intentos adivinar el numero.\n`)
            break;
        }

    }
  }
