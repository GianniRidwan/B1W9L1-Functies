var number1 = 1;
var i = 1;
var a = 1;

var tafels = Number(prompt("Hoeveel tafels wilt u? Kies van 1 t/m 10."));
if (tafels >= 1 && tafels <= 10 && !isNaN(tafels)){

	function multiplication(i, number1){
		return i * number1;
	}

		for (var a = 1; a <= tafels; a++){

			for (var i = 1; i <= 10; i++){
			var outcomeMult= multiplication(i, number1);
				document.write(i + " x " + number1 + " = " + outcomeMult + "<br>");
			}

			number1 == number1++;
		}

}

else {
	document.write("U dient een getal in te vullen van 1 t/m 10.");
}