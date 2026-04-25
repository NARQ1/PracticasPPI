const p1 = {
	score: 0,
	button: document.querySelector("#p1Button"),
	display: document.querySelector("#p1Score"),
};
const p2 = {
	score: 0,
	button: document.querySelector("#p2Button"),
	display: document.querySelector("#p2Score"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#maxPoints");
let winningScore;
let isGameOver = false;

window.addEventListener("load", function () {
	winningScore = parseInt(winningScoreSelect.value);
	isGameOver = false;
});

//agregar a la propiedad button de p1 la función updateScores al hacer click
p1.button.addEventListener("click", () => updateScores(p1,p2));

//agregar a la propiedad button de p2 la función updateScores al hacer click
p2.button.addEventListener("click",() => updateScores(p2,p1));

function updateScores(player, opponent) {
	if(!isGameOver){
		player.score++;
	}
	
	if(player.score==winningScore){
		isGameOver=true;

		player.display.classList.add("won");
		opponent.display.classList.add("lost");

		player.button.disabled=true;
		opponent.button.disabled=true;
	}

	player.display.textContent=player.score;

}

winningScoreSelect.addEventListener("change", function () {
	winningScore=parseInt(this.value);
	
	reset();
});

resetButton.addEventListener("click",() => reset())
//Agregar a resetButton la función reset al dar click

function reset() {
	isGameOver=false;
	for(let i of [p1,p2]){
		i.score=0;
		i.display.textContent=0;
		i.display.classList.remove("ganar");
		i.display.classList.remove("perder");
		i.button.disabled=false;
	}
}

/*Calificación
	20-Al presionar los botones de los jugadores aumenta el contador.
	20-Se termina el juego al llegar a las rondas seleccionadas.
	20-Al ganar se agregan las clases a los jugadores y se bloquean los botones
	20-Al reiniciar se cambian los textos y se habilitan los botones
	20-Si se cambian las rondas se reinicia el juego y el puntaje necesario para ganar
*/
