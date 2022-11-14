const input = document.querySelector("#font-size-control");
const textResult = document.querySelector("#text");

input.addEventListener("mousemove", onMouseMove);

function onMouseMove(event) {
	textResult.style.fontSize = event.currentTarget.value + "px";
}

