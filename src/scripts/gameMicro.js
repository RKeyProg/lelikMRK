let isCompliteProc = false;
let isCompliteChip = false;

$('.micro__processor').draggable({
	containment: '.specialties__games',
	cursor: 'move',
	snap: '.micro__processor-snap',
	snapMode: 'inner',
	snapTolerance: 1,
});

$(".micro__processor-snap").droppable({
	drop: function (event, ui) {
		$('.micro__processor').draggable('disable');
		isCompliteProc = true;
		checkMicroComplite();
	},
	tolerance: "fit",
	activate: function () {
		$('.micro__processor-snap').css({
			border: "2px solid #FF5252",
			backgroundColor: "rgba(178, 235, 242, .5);"
		});
	},
	deactivate: function () {
		$('.micro__processor-snap').css("border", "").css("background-color", "");
	}
});

$('.micro__chip').draggable({
	containment: '.specialties__games',
	cursor: 'move',
	snap: '.micro__chip-snap',
	snapMode: 'inner',
	snapTolerance: 1,
});

$(".micro__chip-snap").droppable({
	drop: function (event, ui) {
		$('.micro__chip').draggable('disable');
		isCompliteChip = true;
		checkMicroComplite();
	},
	tolerance: "fit",
	activate: function () {
		$('.micro__chip-snap').css({
			border: "2px solid #FF5252",
			backgroundColor: "rgba(178, 235, 242, .5);"
		});
	},
	deactivate: function () {
		$('.micro__chip-snap').css("border", "").css("background-color", "");
	}
});

function checkMicroComplite() {
	if (isCompliteProc && isCompliteChip) {
		alert('+200 MRCoins');
	}
}