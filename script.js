var changeColor = function (button) {
    button.className = button.className === "stack button" ? "stack success" : "stack button";
};
var autoResize = function (textArea) {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
};
var toggleSection = function (section) {
    var sectionElement = document.getElementById("".concat(section, "Section"));
    if (sectionElement) {
        sectionElement.classList.toggle("collapsed");
    }
};
