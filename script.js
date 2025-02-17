var changeColor = function (button) {
    button.className = button.className === "stack button" ? "stack success" : "stack button";
};
var autoResize = function (textArea) {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
};
var toggleSection = function (section) {
    var sectionElement = document.getElementById("".concat(section, "Section"));
    var toggleElement = document.getElementById("".concat(section, "Toggle"));
    if (sectionElement && toggleElement) {
        sectionElement.classList.toggle("collapsed");
        toggleElement.textContent = sectionElement.classList.contains("collapsed") ? "+" : "-";
    }
};
