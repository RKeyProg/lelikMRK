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
	if (localStorage.getItem('mrcoins') < 1200) {
		alert('Недостаточно MRCoins. Пройдите все игры и повторите попытку');
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