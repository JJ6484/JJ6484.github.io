const tanks = new Array<HTMLInputElement>();
const dps = new Array<HTMLInputElement>();
const supports = new Array<HTMLInputElement>();
var rolledHeroes = new Array<string>();

const changeColor = (button: HTMLAnchorElement) => {
	button.className = button.className === "stack button" ? "stack success" : "stack button";
}

const autoResize = (textArea: HTMLTextAreaElement) => {
	textArea.style.height = "auto";
	textArea.style.height = textArea.scrollHeight + "px";
}