const puzzle = $('.poit__puzzle');
const puzzleBlocks = $('.poit__puzzle-block');
const puzzleBlockEmpty = $('.poit__puzzle-block_empty');
const puzzleStartButton = $('.poit__puzzle-btn');

let puzzleIsAnimate = false;
let puzzleIsStart = false;
let puzzleIsComplited = false;
let puzzleDataPositionArray = [];
let mixedPuzzleDataPositionArray = [];

// перемещка массива из data
function shuffleArray(array) {
	let sortedArray = array.slice();

	for (let i = 0; i < 100; i++) {
		let dataPosition = [];

		dataPosition.push(sortedArray[15][0]);
		dataPosition.push(sortedArray[15][1]);

		let colOrRow = Math.floor(Math.random() * 2);

		// только если элемент соседний с пустым блоком
		let similarColsOrRowsArray = sortedArray.filter(item => {
			return item[colOrRow] === dataPosition[colOrRow] && (+item[item.length - 1 - colOrRow] + 1 === +dataPosition[dataPosition.length - 1 - colOrRow] || +item[item.length - 1 - colOrRow] - 1 === +dataPosition[dataPosition.length - 1 - colOrRow]);
		})

		dataPosition = [];

		let direction = Math.floor(Math.random() * similarColsOrRowsArray.length);

		let whereWeGoIndex = sortedArray.indexOf(similarColsOrRowsArray[direction]);

		sortedArray[whereWeGoIndex] = sortedArray[15];
		sortedArray[15] = similarColsOrRowsArray[direction];
	}

	return sortedArray;
}

// создание массива из data
function getPoitDataPosition() {
	for (let i = 0; i < puzzleBlocks.length; i++) {
		let rowStart = puzzleBlocks[i].getAttribute('data-row');
		let colStart = puzzleBlocks[i].getAttribute('data-col');

		puzzleDataPositionArray.push([rowStart, colStart]);
	}
}

// установка каждому блоку его позиции после перемешки. Смена data у блока
function settingBlocksPositionsInThePoitGame() {
	for (let i = 0; i < puzzleBlocks.length; i++) {
		$(puzzleBlocks[i]).css('grid-row-start', `${mixedPuzzleDataPositionArray[i][0]}`);
		$(puzzleBlocks[i]).css('grid-column-start', `${mixedPuzzleDataPositionArray[i][1]}`);
		$(puzzleBlocks[i]).attr('data-row', `${mixedPuzzleDataPositionArray[i][0]}`);
		$(puzzleBlocks[i]).attr('data-col', `${mixedPuzzleDataPositionArray[i][1]}`);
	}
}

// кнопка "Начать"
puzzleStartButton.click(() => {
	if (!puzzleIsStart && !puzzleIsComplited) {
		puzzleIsStart = true;
		getPoitDataPosition();

		mixedPuzzleDataPositionArray = shuffleArray(puzzleDataPositionArray);

		settingBlocksPositionsInThePoitGame();
	}
})

// Нажатие на блок
puzzleBlocks.click(e => {
	if (!puzzleIsAnimate && puzzleIsStart) {
		puzzleIsAnimate = true;
		let m = e.currentTarget.getAttribute('data-row') - 1;
		let n = e.currentTarget.getAttribute('data-col') - 1;

		movePazzleElement(e.currentTarget, m, n);
	}
})

// Перемещение блока после нажатия
function movePazzleElement(block, m, n) {
	let emptyM = puzzleBlockEmpty.attr('data-row');
	let emptyN = puzzleBlockEmpty.attr('data-col');

	if (m + 1 == emptyM - 1 && n + 1 == emptyN) {
		let blockHeight = $(block).height() + 2;

		$(block).stop(true, false).animate({
			'top': blockHeight,
		}, 500);
		setTimeout(() => {
			$(block).css('top', '0');
			changeGridParameters(block, m, n, emptyM, emptyN);
		}, 520);
	} else if (m == emptyM && n + 1 == emptyN) {
		let blockHeight = $(block).height() + 2;

		$(block).stop(true, false).animate({
			'top': -blockHeight,
		}, 500);
		setTimeout(() => {
			$(block).css('top', '0');
			changeGridParameters(block, m, n, emptyM, emptyN);
		}, 520);
	} else if (m + 1 == emptyM && n + 1 == emptyN - 1) {
		let blockHeight = $(block).width() + 2;

		$(block).stop(true, false).animate({
			'left': blockHeight,
		}, 500);
		setTimeout(() => {
			$(block).css('left', '0');
			changeGridParameters(block, m, n, emptyM, emptyN);
		}, 520);
	} else if (m + 1 == emptyM && n == emptyN) {
		let blockHeight = $(block).width() + 2;

		$(block).stop(true, false).animate({
			'left': -blockHeight,
		}, 500);
		setTimeout(() => {
			$(block).css('left', '0');
			changeGridParameters(block, m, n, emptyM, emptyN);
		}, 520);
	} else {
		setTimeout(() => {
			puzzleIsAnimate = false;
		}, 520);
	}
}

// Изменение позиции и data блока после перемещения
function changeGridParameters(block, m, n, emptyM, emptyN) {
	$(block).css('grid-row-start', `${emptyM}`);
	$(block).css('grid-column-start', `${emptyN}`);
	$(puzzleBlockEmpty).css('grid-row-start', `${m+1}`);
	$(puzzleBlockEmpty).css('grid-column-start', `${n+1}`);

	$(block).attr('data-row', `${emptyM}`);
	$(block).attr('data-col', `${emptyN}`);
	puzzleBlockEmpty.attr('data-row', `${m+1}`);
	puzzleBlockEmpty.attr('data-col', `${n+1}`);

	puzzleIsAnimate = false;

	puzzleIsCorrectlyAssembled();
}

// Проверка правильности сборки пятнашек

function puzzleIsCorrectlyAssembled() {
	mixedPuzzleDataPositionArray = [];

	for (let i = 0; i < puzzleBlocks.length; i++) {
		let rowStart = puzzleBlocks[i].getAttribute('data-row');
		let colStart = puzzleBlocks[i].getAttribute('data-col');

		mixedPuzzleDataPositionArray.push([rowStart, colStart]);
	}

	if (isArraysTheSame()) {
		let mrcoins = +localStorage.getItem('mrcoins');
		mrcoins += 200;
		localStorage.setItem('mrcoins', mrcoins);

		const mrcoinsView = $('.personal-balance__number');
		mrcoinsView.text(localStorage.getItem('mrcoins'));

		let gamesComplited = localStorage.getItem('gamesComplited');
		let gamesComplitedNew = gamesComplited.split(',');
		gamesComplitedNew.push('poit');
		localStorage.setItem('gamesComplited', gamesComplitedNew);

		alert('+200 MRCoins');
		puzzleIsStart = false;
		puzzleIsComplited = true;
		puzzleStartButton.addClass('poit__puzzle-btn_disabled');
	}
}

function isArraysTheSame() {
	for (let i = 0; i < puzzleDataPositionArray.length; i++) {
		if (puzzleDataPositionArray[i][0] !== mixedPuzzleDataPositionArray[i][0] || puzzleDataPositionArray[i][1] !== mixedPuzzleDataPositionArray[i][1]) {
			return false;
		}
	}

	return true;
}