const teresHandle = $('.teres__handle');
const teresHandleImg = teresHandle.find('.teres__handle-img');
const teresScreenImg = $('.teres__img');

const teresContentImg = $('.teres__img-content');
const teresAntennas = $('.teres__antennas');
const teresAntennasImg = teresAntennas.find('.teres__antennas-img');

let teresIsOn = false;
let teresAntennasIsUp = false;
let teresIsComplited = false;

teresHandle.click(e => {
	if (!teresIsComplited) {
		teresHandleImg.toggleClass('teres__handle-img_clicked');

		setTimeout(() => {
			teresScreenImg.toggleClass('teres__handle-img_active');
		}, 300);

		if (teresAntennasIsUp) {
			teresChangeComplitedStatus();
		}

		teresIsOn = !teresIsOn;
	}
})

teresAntennasImg.click(e => {
	if (!teresIsComplited) {
		teresAntennasImg.toggleClass('teres__antennas-img_clicked');

		if (teresIsOn) {
			teresChangeComplitedStatus();
		}

		teresAntennasIsUp = !teresAntennasIsUp;
	}
})

function teresChangeComplitedStatus() {
	teresContentImg.addClass('teres__img-content_active');
	teresIsComplited = true;
	setTimeout(() => {
		let mrcoins = +localStorage.getItem('mrcoins');
		mrcoins += 200;
		localStorage.setItem('mrcoins', mrcoins);

		const mrcoinsView = $('.personal-balance__number');
		mrcoinsView.text(localStorage.getItem('mrcoins'));

		let gamesComplited = localStorage.getItem('gamesComplited');
		let gamesComplitedNew = gamesComplited.split(',');
		gamesComplitedNew.push('teres');
		localStorage.setItem('gamesComplited', gamesComplitedNew);

		alert('+200 MRCoins');
	}, 500);
}