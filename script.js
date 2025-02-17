"use strict";
exports.__esModule = true;
var tanks = new Array();
var dps = new Array();
var supports = new Array();
var rolledHeroes = new Array();
var changeColor = function (button) {
    button.className = button.className === "stack button" ? "stack success" : "stack button";
};
var autoResize = function (textArea) {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
};
