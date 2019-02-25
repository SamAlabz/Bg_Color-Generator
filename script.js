//Applied different forms of DOM selectors in selecting various elements on purpose
var firstColor = document.getElementById("color1");
var secondColor = document.getElementsByClassName("color2")[0];
var body = document.getElementsByTagName('body')[0];
var h3 = document.querySelector("h3");


//Function that runs according to user color selections/inputs
function changeBodyGradient() {
	body.style.background = "linear-gradient(to right, "+ firstColor.value + "," + secondColor.value + ")";

	h3.textContent = body.style.background;
}


//DOM event listeners
firstColor.addEventListener("input", changeBodyGradient);

secondColor.addEventListener("input", changeBodyGradient);
