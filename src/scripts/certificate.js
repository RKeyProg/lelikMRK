const certificationForm = $('.certification__form');

certificationForm.submit(e => {
	e.preventDefault();

	let personName = e.currentTarget.elements.name.value;
	let personSurname = e.currentTarget.elements.surname.value;
	let specialtiesArray = e.currentTarget.elements.formSpecialties;
	let specialtiesNameArray = [];

	specialtiesArray.forEach(element => {
		if (element.checked) {
			specialtiesNameArray.push($(element).siblings('span')[0].outerText);
		}
	});

	setSertigicate(personName, personSurname, specialtiesNameArray);
})

function setSertigicate(name, surname, specialties) {
	if (localStorage.getItem('mrcoins') < 600) {
		alert('Недостаточно MRCoins. Пройдите 3 любые игры, чтобы получить сертификат');
		return;
	}

	const windowInnerWidth = window.innerWidth;

	if (windowInnerWidth <= 1024) {
		const modal = $('#certificate__modal');
		const modalContent = modal.find('.overlay__content');

		const sertificateName = modal.find('.certificate__name');
		const sertificateSurname = modal.find('.certificate__surname');
		const sertificateSpecialties = modal.find('.certificate__specialties-list');

		sertificateSpecialties.empty();

		sertificateName[0].lastElementChild.textContent = name;
		sertificateSurname[0].lastElementChild.textContent = surname;
		specialties.forEach(el => {
			let li = document.createElement("li");
			li.textContent = el;
			sertificateSpecialties.append(li);
		})

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

		return;
	}

	const sertificateName = $('.certificate__name');
	const sertificateSurname = $('.certificate__surname');
	const sertificateSpecialties = $('.certificate__specialties-list');

	sertificateSpecialties.empty();

	sertificateName[0].lastElementChild.textContent = name;
	sertificateSurname[0].lastElementChild.textContent = surname;
	specialties.forEach(el => {
		let li = document.createElement("li");
		li.textContent = el;
		sertificateSpecialties.append(li);
	})
}

$('.overlay-certificate__btn').click(() => {
	const modal = $('#certificate__modal');
	const modalContent = modal.find('.overlay__content');

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