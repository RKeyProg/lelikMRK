const modal = $('#modal');
const modalContent = modal.find('.overlay__content');


$('.overlay__btn').click(() => {
	modalContent.stop(true, false).animate({
		'top': '-2%'
	}, 200).animate({
		'top': '100%'
	}, 300);
	modal.stop(true, false).animate({
		'opacity': '0'
	}, 500);
	setTimeout(() => {
		modal.css('display', 'none');
	}, 500);

	wasScroll++;
})

$('.hero__open-overlay').click(() => {
	modal.css('display', 'flex');
	modalContent.stop(true, false).animate({
		'top': '-2%'
	}, 400).animate({
		'top': '0'
	}, 100);
	modal.stop(true, false).animate({
		'opacity': '1'
	}, 300);

	wasScroll--;
})