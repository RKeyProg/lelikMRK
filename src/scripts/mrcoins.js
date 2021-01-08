$(document).ready(() => {
	let localStorageDate = localStorage.getItem('date');
	let date = new Date;

	if (date - localStorageDate > 3600000) {
		localStorage.setItem('mrcoins', 0);
		localStorage.setItem('date', date.getTime());
	} else if (date - localStorageDate === NaN) {
		localStorage.setItem('date', date.getTime());
	}
})