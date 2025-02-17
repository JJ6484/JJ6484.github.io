const changeColor = (button: HTMLButtonElement) => {
	button.className = button.className === "stack button" ? "stack success" : "stack button";
}

const autoResize = (textArea: HTMLTextAreaElement) => {
	textArea.style.height = "auto";
	textArea.style.height = textArea.scrollHeight + "px";
}

const buttons = document.querySelectorAll('.button') as NodeListOf<HTMLElement>;
buttons.forEach(button => {
	button.addEventListener('click', () => {
		this.classList.toggle("active");
		var content = this.nextElementSibling;

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		}
		else {
			content.style.maxHeight = content.scrollHeight + "px"
		}
	});
});