
function cercle(){
	console.log("hi")

const cssObj = window.getComputedStyle(document.getElementById("body"), null);
let bgColor = cssObj.getPropertyValue("background-color");


	if (bgColor === "rgb(32, 32, 32)") {
document.getElementById("body").style.backgroundColor = "#4B97A3";
document.getElementById("cercle").style.backgroundColor = "#FAC73B";
document.getElementById("cercle").style.border = "1px #FAC73B solid";

	}

	else if (bgColor === "rgb(75, 151, 163)")	{
document.getElementById("body").style.backgroundColor = "#FAC73B";
document.getElementById("cercle").style.backgroundColor = "#E7605C";
document.getElementById("cercle").style.border = "1px #E7605C solid";

	}

		else if (bgColor === "rgb(250, 199, 59)")	{
document.getElementById("body").style.backgroundColor = "#E7605C";
document.getElementById("cercle").style.backgroundColor = "#202020";
document.getElementById("cercle").style.border = "1px #202020 solid";

	}

		else if (bgColor === "rgb(231, 96, 92)")	{
document.getElementById("body").style.backgroundColor = "#202020";
document.getElementById("cercle").style.backgroundColor = "#4B97A3";
document.getElementById("cercle").style.border = "1px rgb(32, 32, 32) solid";

	}

}




