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
		const game = $('.game__micro');
		game.addClass('game_complited');
	}

	if (gamesComplitedNew.indexOf('pipres') !== -1) {
		const game = $('.game__pipres');
		game.addClass('game_complited');
	}

	if (gamesComplitedNew.indexOf('teres') !== -1) {
		const game = $('.game__teres');
		game.addClass('game_complited');
	}

	if (gamesComplitedNew.indexOf('evs') !== -1) {
		const game = $('.game__evs');
		game.addClass('game_complited');
	}

	if (gamesComplitedNew.indexOf('pms') !== -1) {
		const game = $('.game__pms');
		game.addClass('game_complited');
	}

	if (gamesComplitedNew.indexOf('poit') !== -1) {
		const game = $('.game__poit');
		game.addClass('game_complited');
	}

	const mrcoinsView = $('.personal-balance__number');
	mrcoinsView.text(localStorage.getItem('mrcoins'));
})