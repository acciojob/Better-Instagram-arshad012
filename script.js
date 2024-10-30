//your code here
let currentDiv = null;
function drag(e) {
	currentDiv = e.target;
	currentDiv.classList.add('selected');
}

function allowDrop(e) {
	e.preventDefault();
}

function drop(e) {
	let targetDiv = e.currentTarget;
	let tempDiv = targetDiv.id;
	targetDiv.id = currentDiv.id;
	currentDiv.id = tempDiv;
	currentDiv.classList.remove('selected');
}
