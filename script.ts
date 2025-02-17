const changeColor = (button: HTMLButtonElement) => {
	button.className = button.className === "stack button" ? "stack success" : "stack button";
}

const autoResize = (textArea: HTMLTextAreaElement) => {
	textArea.style.height = "auto";
	textArea.style.height = textArea.scrollHeight + "px";
}

const toggleSection = (section: string) => {
	const sectionElement = document.getElementById(`${section}Section`);
	const toggleElement = document.getElementById(`${section}Toggle`);
	
	if (sectionElement && toggleElement) {
		sectionElement.classList.toggle("collapsed");
		toggleElement.textContent = sectionElement.classList.contains("collapsed") ? "+" : "-";
	}
}