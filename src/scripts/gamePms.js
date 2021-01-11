const pmsButton = $('.pms__game-btn');
const pmsStartGameButton = $('.pms__game-start-btn');

const pmsCombinationArray = shuffle([3, 7, 2, 1, 4, 6, 8, 5]);
let pmsClicksArray = [];

let pmsNumberOfImpressions = 1;
let pmsEditMode = false;
let pmsWasComplited = false;

pmsStartGameButton.click((e) => {
	if (!pmsWasComplited) {
		setTimeout(() => {
			pmsStartGame();
		}, 500);
	}
})

pmsButton.click((e) => {
	if (pmsEditMode) {
		e.target.classList.toggle('pms__game-btn_active');
		pmsClicksArray.push(pmsButton.index(e.target) + 1);
		if (pmsClicksArray.length === pmsNumberOfImpressions) {
			pmsCheckComplite();
		}
	}
})

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function pmsCheckComplite() {
	pmsEditMode = false;

	for (let i = 0; i < pmsClicksArray.length; i++) {
		if (pmsClicksArray[i] !== pmsCombinationArray[i]) {
			pmsButton.addClass('pms__game-btn_active');
			setTimeout(() => {
				pmsReset();
			}, 500);
			pmsNumberOfImpressions = 1;
			return;
		}
	}

	if (pmsClicksArray.length === 8) {
		let mrcoins = +localStorage.getItem('mrcoins');
		mrcoins += 200;
		localStorage.setItem('mrcoins', mrcoins);

		const mrcoinsView = $('.personal-balance__number');
		mrcoinsView.text(localStorage.getItem('mrcoins'));

		let gamesComplited = localStorage.getItem('gamesComplited');
		let gamesComplitedNew = gamesComplited.split(',');
		gamesComplitedNew.push('pms');
		localStorage.setItem('gamesComplited', gamesComplitedNew);

		alert('+200 MRCoins');
		pmsWasComplited = true;
		return;
	}

	setTimeout(() => {
		pmsReset();
	}, 500);
	setTimeout(() => {
		pmsStartGame();
	}, 1000);
	pmsNumberOfImpressions++;
	return;
}

function pmsStartGame() {
	let time = 0;
	for (let i = 0; i < pmsNumberOfImpressions; i++) {
		setTimeout(function () {
			pmsButton[pmsCombinationArray[i] - 1].classList.add('pms__game-btn_active');
		}, 500 * time++)
	}
	setTimeout(() => {
		pmsReset();
		pmsEditMode = true;
	}, 500 * pmsNumberOfImpressions);
}

function pmsReset() {
	pmsClicksArray = [];
	pmsButton.removeClass('pms__game-btn_active');
}