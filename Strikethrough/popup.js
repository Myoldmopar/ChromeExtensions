window.onload = function () {
	document.getElementById('strikeInput').onkeyup = function() { strike(); }; 
	document.getElementById('strikeOutput').onclick = function() { document.getElementById('strikeOutput').select() }; 
	document.getElementById('strikeInput').focus();
};
function strike() {
	document.getElementById('strikeOutput').value = strikeString(document.getElementById('strikeInput').value, '\u0336');
}
function strikeString(str, strikeKind) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);
		var r = c+strikeKind;
		result += r;
	}
	return result;
}
