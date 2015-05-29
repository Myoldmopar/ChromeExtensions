
// worker function for striking a string by applying a unicode non-printing character to each character in the string
function strikeString(str, strikeKind) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);
		var r = c+strikeKind;
		result += r;
	}
	return result;
}

// wrapper function to make striking easier
function strike() {
	document.getElementById('strikeOutput').value = strikeString(document.getElementById('strikeInput').value, '\u0336');
}

// things to do when the window loads
window.onload = function () {
	document.getElementById('strikeInput').onkeyup = function() { strike(); }; // set event handler to strike text when the text changes in the input box
	document.getElementById('strikeOutput').onclick = function() { document.getElementById('strikeOutput').select() }; // set event handler to select the entire contents of the output box when clicked
	document.getElementById('strikeInput').select(); // select the text in the input box to get it ready for typing directly into it
	strike(); // and don't forget to strike the text to make it look nice when it opens
};
