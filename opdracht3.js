function vraag(name, year){
	document.write("Hallo " + name + ", uw leeftijd is " + year + " jaar.");
}

var name = prompt("Hallo, wat is uw naam?");
	var year = prompt("Hoe oud bent u?");

while(name != "stop"){
	vraag(name, year);
	name = prompt("Hallo, wat is uw naam?");
	year = prompt("Hoe oud bent u?");
}
