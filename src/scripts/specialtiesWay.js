const character = $('.specialties__way-character');
const title = $('.specialties__title');
const games = $('.game');

const points = [
	[-9, 13],
	[-8.5, 27],
	[-7.5, 41],
	[-6.5, 55],
	[-4, 69.5],
	[-1, 82.5],
	[9, 88],
	[13, 74.5],
	[14, 60.5],
	[15, 47],
	[15.5, 32.5],
	[16.5, 18.5],
	[19, 4.5],
	[28, -5],
	[35.5, 6],
	[37.5, 20],
	[38.5, 34],
	[39, 48.5],
	[40, 62.5],
	[43, 76.5],
	[46, 90],
	[57, 90.5],
	[62, 77.5],
	[64, 63.5],
	[65, 49.5],
	[66, 35.5],
	[66, 21],
	[69, 7],
	[79, 2],
	[85, 15],
	[87, 29],
	[87, 43],
	[87, 57],
	[87, 72],
];
const specialties = [
	"Микро- и наноэлектронные технологии и системы",
	"Проектирование и производство радиоэлектронных средств",
	"Техническая эксплуатация радиоэлектронных средств",
	"Электронные вычислительные средства",
	"Программируемые мобильные системы",
	"Программное обеспечение информационных технологий",
]
let checkPoint = 0;
let checkText = 0;
let checkGame = 0;
let checkAnimExist = 0;

function resetCheckAnimExist() {
	checkAnimExist = 0;
}

function changeGame(type) {
	if (checkGame === 6 && type === "next") {
		games.eq(checkGame - 1).css('opacity', '0');
		setTimeout(() => {
			games.eq(checkGame - 1).css('display', 'none');
			checkGame++;
		}, 300);
	} else if (type === "next") {
		games.eq(checkGame - 1).css('opacity', '0');
		setTimeout(() => {
			games.eq(checkGame - 1).css('display', 'none');
			games.eq(checkGame).css('display', 'flex');
			games.eq(checkGame).css('opacity', '1');
			checkGame++;
		}, 300);
	}

	if (checkGame === 1 && type === "prev") {
		games.eq(checkGame - 1).css('opacity', '0');
		setTimeout(() => {
			games.eq(checkGame - 1).css('display', 'none');
			checkGame--;
		}, 300);
	} else if (type === "prev") {
		games.eq(checkGame - 1).css('opacity', '0');
		setTimeout(() => {
			games.eq(checkGame - 1).css('display', 'none');
			games.eq(checkGame - 2).css('display', 'flex');
			games.eq(checkGame - 2).css('opacity', '1');
			checkGame--;
		}, 300);
	}
}

function changeText(type) {
	if (checkText > 5 && type === "next") {
		title.css('opacity', '0');
		setTimeout(() => {
			title.text("А всее, специальности закончились");
			title.css('opacity', '1');
			checkText++;
		}, 300);
	} else if (type === "next") {
		title.css('opacity', '0');
		setTimeout(() => {
			title.text(specialties[checkText++]);
			title.css('opacity', '1');
		}, 300);
	}

	if (checkText <= 1 && type === "prev") {
		title.css('opacity', '0');
		setTimeout(() => {
			title.text("Хотешь еще раз посмотреть? Крути!");
			title.css('opacity', '1');
			checkText--;
		}, 300);
	} else if (type === "prev") {
		title.css('opacity', '0');
		setTimeout(() => {
			title.text(specialties[--checkText - 1]);
			title.css('opacity', '1');
		}, 300);
	}
}

const puskAnimation = () => {
	return {
		next() {
			if (checkPoint < 33) {
				checkAnimExist = 1;
				if (checkPoint === 0) {
					character.stop(true, false).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500);
					setTimeout(() => {
						resetCheckAnimExist();
						changeText('next');
						changeGame('next');
					}, 2300);
				} else if (checkPoint === 24) {
					character.stop(true, false).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500);
					setTimeout(() => {
						resetCheckAnimExist();
						changeText('next');
						changeGame('next');
					}, 3300);
				} else if (checkPoint === 30) {
					character.stop(true, false).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500);
					setTimeout(() => {
						resetCheckAnimExist();
						changeText('next');
						changeGame('next');
						wasScroll++;
					}, 1800);
				} else {
					character.stop(true, false).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[++checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500);
					setTimeout(() => {
						resetCheckAnimExist();
						changeText('next');
						changeGame('next');
					}, 2800);
				}
			}
		},
		prev() {
			if (checkPoint > 0) {
				checkAnimExist = 1;
				if (checkPoint === 4) {
					character.stop(true, false).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500);
					setTimeout(() => {
						resetCheckAnimExist();
						changeText('prev');
						changeGame('prev');
					}, 2300);
				} else if (checkPoint === 30) {
					character.stop(true, false).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500);
					setTimeout(() => {
						resetCheckAnimExist();
						changeText('prev');
						changeGame('prev');
					}, 3300);
				} else if (checkPoint === 33) {
					character.stop(true, false).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500);
					setTimeout(() => {
						resetCheckAnimExist();
						changeText('prev');
						changeGame('prev');
					}, 1800);
				} else {
					character.stop(true, false).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500).animate({
						'left': `${points[--checkPoint][1]}%`,
						'top': `${points[checkPoint][0]}%`
					}, 500);
					setTimeout(() => {
						resetCheckAnimExist();
						changeText('prev');
						changeGame('prev');
					}, 2800);
				}
			}
		}
	};
}

$(window).on('wheel', e => {
	const deltaY = e.originalEvent.deltaY;

	if (sectionSpecialties.hasClass('specialites_active')) {
		const action = puskAnimation();

		if (deltaY > 0 && checkAnimExist === 0) {
			action.next();
		}

		if (deltaY < 0 && checkAnimExist === 0) {
			action.prev();
		}
	}
})