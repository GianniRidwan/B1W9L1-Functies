var number1 = 10;
var number2 = 12;
var number3 = 58;
var number4 = 34;
var number5 = 6;
var number6 = 7;
var number7 = 144;
var number8 = 1;

function addition(number1, number2){
	return number1 + number2;
}
function addition(number3, number4){
	return number3 + number4;
}
function addition(number5, number6){
	return number5 + number6;
}

var outcomeAdd = addition(number1, number2);
document.write(number1 + " + " + number2 + " = " + outcomeAdd + "<br>");
var outcomeAdd = addition(number3, number4);
document.write(number3 + " + " + number4 + " = " + outcomeAdd + "<br>");
var outcomeAdd = addition(number5, number6);
document.write(number5 + " + " + number6 + " = " + outcomeAdd + "<br>");

function subtraction(number3, number4){
	return number3 - number4;
}
function subtraction(number2, number1){
	return number2 - number1;
}
function subtraction(number6, number5){
	return number6 - number5;
}

var outcomeSub = subtraction(number3, number4);
document.write(number3 + " - " + number4 + " = " + outcomeSub + "<br>");
var outcomeSub = subtraction(number2, number1);
document.write(number2 + " - " + number1 + " = " + outcomeSub + "<br>");
var outcomeSub = subtraction(number6, number5);
document.write(number6 + " - " + number5 + " = " + outcomeSub + "<br>");

function multiplication(number5, number6){
	return number5 * number6;
}
function multiplication(number3, number7){
	return number3 * number7;
}
function multiplication(number1, number2){
	return number1 * number2;
}

var outcomeMult = multiplication(number5, number6);
document.write(number5 + " x " + number6 + " = " + outcomeMult + "<br>");
var outcomeMult = multiplication(number3, number7);
document.write(number3 + " x " + number7 + " = " + outcomeMult + "<br>");
var outcomeMult = multiplication(number1, number2);
document.write(number1 + " x " + number2 + " = " + outcomeMult + "<br>");

function division(number7, number2){
	return number7 / number2;
}
function division(number2, number1){
	return number2 / number1;
}
function division(number6, number8){
	return number6 / number8;
}

var outcomeDiv = division(number7, number2);
document.write(number7 + " : " + number2 + " = " + outcomeDiv + "<br>");
var outcomeDiv = division(number2, number1);
document.write(number2 + " : " + number1 + " = " + outcomeDiv + "<br>");
var outcomeDiv = division(number6, number8);
document.write(number6 + " : " + number8 + " = " + outcomeDiv + "<br>");

function increment(number2){
	return number2++;
}
function increment(number5){
	return number5++;
}
function increment(number7){
	return number7++;
}

var outcomeInc = increment(number2);
document.write(number2 + " + " + number8 + " = " + outcomeInc + "<br>");
var outcomeInc = increment(number5);
document.write(number5 + " + " + number8 + " = " + outcomeInc + "<br>");
var outcomeInc = increment(number7);
document.write(number7 + " + " + number8 + " = " + outcomeInc + "<br>");

function decrement(number4){
	return number4--;
}
function decrement(number2){
	return number2--;
}
function decrement(number3){
	return number3--;
}

var outcomeDec = decrement(number4);
document.write(number4 + " - " + number8 + " = " + outcomeDec + "<br>");
var outcomeDec = decrement(number2);
document.write(number2 + " - " + number8 + " = " + outcomeDec + "<br>");
var outcomeDec = decrement(number3);
document.write(number3 + " - " + number8 + " = " + outcomeDec + "<br>");