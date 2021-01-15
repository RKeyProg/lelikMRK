const sections = $('section');
const display = $('.maincontent');
const sectionSpecialties = $('.section__specialties');

let wasScroll = 0;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

sections.first().addClass('active');

let inScroll = false;

const countSectionPosition = sectionEq => {
	const position = sectionEq * -100;

	if (isNaN(position)) {
		console.error('передано не верное значение в countSectionPosition');
		return 0;
	}

	return position;
}

const resetActiveClassForItem = (items, itemEq, activeClass) => {
	items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

function scrollDisplayNone(scroll) {
	setTimeout(() => {
		scroll.css('display', 'none');
	}, 500);
}

const perfomTransition = (sectionEq, direction) => {
	if (inScroll) return;
	const scrollButtons = $('.scroll__buttons');

	if (sectionEq - 1 === 0 && direction === 'next') {
		scrollButtons.css('display', 'flex').stop(true, true).animate({
			'opacity': '1'
		}, 300);
	} else if (sectionEq + 1 === sections.length && direction === 'next') {
		scrollButtons.stop(true, true).animate({
			'opacity': '0'
		}, 300, scrollDisplayNone(scrollButtons));
	}

	if (sectionEq + 2 === sections.length && direction === 'prev') {
		scrollButtons.css('display', 'flex').stop(true, true).animate({
			'opacity': '1'
		}, 300);
	} else if (sectionEq === 0 && direction === 'prev') {
		scrollButtons.stop(true, true).animate({
			'opacity': '0'
		}, 300, scrollDisplayNone(scrollButtons));
	}

	const transitionOver = 1000;
	const mouseInertionOver = 300;

	inScroll = true;

	const position = countSectionPosition(sectionEq);

	display.css({
		transform: `translateY(${position}%)`
	});

	resetActiveClassForItem(sections, sectionEq, 'active');

	setTimeout(() => {
		inScroll = false;

	}, transitionOver + mouseInertionOver);
}

const viewportScroller = () => {
	const activeSection = sections.filter('.active');
	const nextSection = activeSection.next('section');
	const prevSection = activeSection.prev('section');

	return {
		next() {
			if (nextSection.length) {
				perfomTransition(nextSection.index(), 'next');
			}
		},
		prev() {
			if (prevSection.length) {
				perfomTransition(prevSection.index(), 'prev');
			}
		}
	};
}

$(window).on('wheel', e => {
	const deltaY = e.originalEvent.deltaY;
	const scroller = viewportScroller();
	
	if (sectionSpecialties.hasClass('active')) {
		if ((checkPoint >= 0 && checkPoint < 33 && deltaY > 0) || (checkPoint <= 33 && checkPoint > 0 && deltaY < 0)) {
			sectionSpecialties.addClass('specialites_active');
		} else if ((checkPoint === 0 && deltaY < 0) || (checkPoint === 33 && deltaY > 0)) {
			sectionSpecialties.removeClass('specialites_active');
		}
	}

	if (!sectionSpecialties.hasClass('specialites_active') && wasScroll !== 0) {
		if (deltaY > 0) {
			scroller.next();
		}
		if (deltaY < 0) {
			scroller.prev();
		}
	}
})

$('.scroll__btn').click(e => {
	const scroller = viewportScroller();
	sectionSpecialties.removeClass('specialites_active');

	if (e.currentTarget.getAttribute('data-way') === 'next') {
		scroller.next();
	} else {
		scroller.prev();
	}
})

$('.wrapper').on('touchmove', e => e.preventDefault());

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();

    const $this = $(e.currentTarget);

    const target = $this.attr('data-scroll-to');
    const reqSection = $(`[data-section-id=${target}]`);

    perfomTransition(reqSection.index());
})

if (isMobile) {
	// https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

	$("body").swipe({
			swipe: function (event, direction) {
					const scroller = viewportScroller();
					let scrollDirection;

					if (direction === "up") scrollDirection = 'next';
					if (direction === "down") scrollDirection = 'prev';

					scroller[scrollDirection]();
			}
	});
}