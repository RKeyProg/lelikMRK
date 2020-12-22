const colors = {
	green: ['4CE636', '13993C'],
	darkGreen: ['298B41', '225E41'],
	white: ['D9E3F1', '8FA0C5'],
	purple: ['7941C3', '4C2789'],
	orange: ['F08A1E', 'BB5025'],
	darkBlue: ['2A43D6', '212C99'],
	blue: ['4AFDDF', '35B3C5'],
	pink: ['EF63C0', 'B53DB6'],
	brown: ['80592F', '6C3724'],
	black: ['262E31', '121217'],
	red: ['FA1819', 'A00937'],
	yellow: ['EEEE53', 'B78427'],
}

$('.character-color__btn').click(e => {
	let newColors = colors[e.target.getAttribute('data-color')];
	$('body').css('--color-1', `#${newColors[0]}`);
	$('body').css('--color-2', `#${newColors[1]}`);
})