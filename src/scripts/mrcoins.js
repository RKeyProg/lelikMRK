$(document).ready(() => {
	let localStorageDate = localStorage.getItem('date');
	let date = new Date;

	if (date - localStorageDate > 3600000) {
		let gamesComplited = [];
		localStorage.setItem('gamesComplited', gamesComplited);

		localStorage.setItem('mrcoins', 0);
		localStorage.setItem('date', date.getTime());
	} else if (date - localStorageDate === NaN) {
		localStorage.setItem('date', date.getTime());
	}

	let gamesComplited = localStorage.getItem('gamesComplited');
	let gamesComplitedNew = gamesComplited.split(',');

	if (gamesComplitedNew.indexOf('micro') !== -1) {
		console.log('micro');
	}

	if (gamesComplitedNew.indexOf('pipres') !== -1) {
		console.log('pipres');
	}

	if (gamesComplitedNew.indexOf('teres') !== -1) {
		console.log('teres');
	}

	if (gamesComplitedNew.indexOf('evs') !== -1) {
		console.log('evs');
	}

	if (gamesComplitedNew.indexOf('pms') !== -1) {
		console.log('pms');
	}

	if (gamesComplitedNew.indexOf('poit') !== -1) {
		console.log('poit');
	}

	const mrcoinsView = $('.personal-balance__number');
	mrcoinsView.text(localStorage.getItem('mrcoins'));
})