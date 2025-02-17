var _this = this;
var changeColor = function (button) {
    button.className = button.className === "stack button" ? "stack success" : "stack button";
};
var autoResize = function (textArea) {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
};
var buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        _this.classList.toggle("active");
        var content = _this.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});
