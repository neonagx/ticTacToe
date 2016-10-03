var currentPlayer = 'xes'
var gameFinish = false

function switchPlayer() {
	if(currentPlayer === 'xes'){
		currentPlayer = 'oes'
	} else {
		currentPlayer = 'xes'
	}
}

function changeBoxClass(box, player) {
	document.getElementById(box).className = player
	// elem.className = symbol
	isWinner();
	if(gameFinish == false){switchPlayer();}
}

document.getElementById('box1').addEventListener('click', function() {
	changeBoxClass('box1', currentPlayer)
})
document.getElementById('box2').addEventListener('click', function() {
	changeBoxClass('box2', currentPlayer)
})
document.getElementById('box3').addEventListener('click',  function() {
	changeBoxClass('box3', currentPlayer)
})
document.getElementById('box4').addEventListener('click',  function() {
	changeBoxClass('box4', currentPlayer)
})
document.getElementById('box5').addEventListener('click',  function() {
	changeBoxClass('box5', currentPlayer)
})
document.getElementById('box6').addEventListener('click',  function() {
	changeBoxClass('box6', currentPlayer)
})
document.getElementById('box7').addEventListener('click',  function() {
	changeBoxClass('box7', currentPlayer)
})
document.getElementById('box8').addEventListener('click',  function() {
	changeBoxClass('box8', currentPlayer)
})
document.getElementById('box9').addEventListener('click',  function() {
	changeBoxClass('box9', currentPlayer)
})

function isWinner(){
	var elem1 = document.getElementById('box1').className
	var elem2 = document.getElementById('box2').className
	var elem3 = document.getElementById('box3').className
	var elem4 = document.getElementById('box4').className
	var elem5 = document.getElementById('box5').className
	var elem6 = document.getElementById('box6').className
	var elem7 = document.getElementById('box7').className
	var elem8 = document.getElementById('box8').className
	var elem9 = document.getElementById('box9').className
	if(elem1 === elem2 && elem2 === elem3) {
		if(elem1 != "" && elem2 != "" && elem3 != ""){
			alert("You Won!")
			gameFinish = true
		}
	} else if(elem1 === elem5 && elem5 === elem9) {
		if(elem1 != "" && elem5 != "" && elem9 != ""){
			alert("You Won!");
			gameFinish = true;
		}
	} else if(elem1 === elem4 && elem4 === elem7) {
		if(elem1 != "" && elem4 != "" && elem7 != ""){
		alert("You Won!");
		gameFinish = true;
		}
	} else if(elem2 === elem5 && elem5 === elem8) {
		if(elem2 != "" && elem5 != "" && elem8 != ""){
		alert("You Won!");
		gameFinish = true;
		}
	} else if(elem3 === elem6 && elem6 === elem9) {
		if(elem3 != "" && elem6 != "" && elem9 != ""){
		alert("You Won!");
		gameFinish = true;
		}
	} else if(elem3 === elem5 && elem5 === elem7) {
		if(elem3 != "" && elem5 != "" && elem7 != ""){
		alert("You Won!");
		gameFinish = true;
		}
	}
}
