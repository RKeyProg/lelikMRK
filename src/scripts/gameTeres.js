const teresHandle = $('.teres__handle');
const teresHandleImg = teresHandle.find('.teres__handle-img');
const teresScreenImg = $('.teres__img');

const teresContentImg =  $('.teres__img-content');
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

teresAntennas.click(e => {
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
		alert('+200 MRCoins');
	}, 500);
}