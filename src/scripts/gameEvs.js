$(document).ready(function() {
  startEvsGame();
});

const evsColors = {
	yellow: '#EEEE53',
	red: '#FA1819',
	green: '#298B41',
	blue: '#2A43D6',
}

const outputRect = {
	yellow: [48, 23],
	red: [48, 123],
	green: [48, 223],
	blue: [48, 323],
}

const inputRect = {
	yellow: [452, 225],
	red: [452, 25],
	green: [452, 325],
	blue: [452, 125],
}

let evsConnectionHistory = [];

function startEvsGame() {
	let canvas = document.getElementById("evs__canvas");
	let context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawOutput(context);

	let isAciveClearButton = true;

	$('.evs__btn-clear').click(() => {
		if (isAciveClearButton) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			coordOutput = [];
			drawOutput(context);
			$('.evs__output-rect').removeClass('clicked');
			evsConnectionHistory = [];
		}
	})

	let coordOutput = [];
	let dataColorOutput = '';
	let outputButton;
	$('.evs__output-rect').click(e => {
		outputButton = e.target;
		if (outputButton.getAttribute('class').indexOf('clicked') < 0) {
			dataColorOutput = outputButton.getAttribute("data-color");
			coordOutput = outputRect[dataColorOutput];
			evsConnectionHistory.push(dataColorOutput);
		} else {
			coordOutput = [];
		}
	})
	
	$('.evs__input-rect').click(e => {
		let data = e.target.getAttribute("data-color");
		let coord = inputRect[data];
		if (coordOutput.length > 0) {
			outputButton.classList.add('clicked');
			evsConnectionHistory.push(data);
			drawLines(context, coordOutput[0], coordOutput[1], coord[0], coord[1], evsColors[dataColorOutput]);
			drawOutput(context);
			coordOutput = [];
			coord = "";
			setTimeout(() => {
				if (checkCorrectConnection()) {
					alert('+200 MRCoins');
					isAciveClearButton = false;
					$('.evs__btn-clear').css('background-color', '#757575')
				}
			}, 100);
		}
	})
}

function drawOutput(ctx) {
	// желтый провод
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.fillStyle="#EEEE53"
	ctx.rect(5,5,50,40); 
	ctx.fill();

	// желтый провод 2
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.fillStyle="#EEEE53"
	ctx.rect(448,205,50,40); 
	ctx.fill();

	// красный провод
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.fillStyle="#FA1819"
	ctx.rect(5,105,50,40);
	ctx.fill();

	// красный провод 2
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.fillStyle="#FA1819"
	ctx.rect(448,5,50,40);
	ctx.fill();

	// зеленый провод
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.fillStyle="#298B41"
	ctx.rect(5,205,50,40);
	ctx.fill();

	// зеленый провод 2
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.fillStyle="#298B41"
	ctx.rect(448,305,50,40);
	ctx.fill();

	// голубой провод
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.fillStyle="#2A43D6"
	ctx.rect(5,305,50,40);
	ctx.fill();

	// голубой провод 2
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.fillStyle="#2A43D6"
	ctx.rect(448,105,50,40);
	ctx.fill();
}

function drawLines(ctx, outputX, outputY, inputX, inputY, color) {
	ctx.beginPath();
	ctx.lineWidth="15";
	ctx.strokeStyle=color;
	ctx.moveTo(outputX,outputY);
	ctx.lineTo(inputX, inputY);
	ctx.stroke();
}

function checkCorrectConnection() {
	let isCorrectConnection = false;
	if (evsConnectionHistory.length == 8) {
		for(let i = 0; i < evsConnectionHistory.length; i += 2) {
			if (evsConnectionHistory[i] === evsConnectionHistory[i+1]) {
				isCorrectConnection = true;
			} else {
				isCorrectConnection = false;
			}
		}
	}
	return isCorrectConnection;
}