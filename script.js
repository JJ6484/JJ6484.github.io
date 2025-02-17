var vanguards = [
    { name: "Captain America", imgSrc: "/images/vanguard/captain-america.png" },
    { name: "Doctor Strange", imgSrc: "/images/vanguard/doctor-strange.png" },
    { name: "Groot", imgSrc: "/images/vanguard/groot.png" },
    { name: "Hulk", imgSrc: "/images/vanguard/hulk.png" },
    { name: "Magneto", imgSrc: "/images/vanguard/magneto.png" },
    { name: "Peni Parker", imgSrc: "/images/vanguard/peni-parker.png" },
    { name: "Thor", imgSrc: "/images/vanguard/thor.png" },
    { name: "Venom", imgSrc: "/images/vanguard/venom.png" },
];
var duelists = [
    { name: "Black Panther", imgSrc: "/images/duelist/black-panther.png" },
    { name: "Black Widow", imgSrc: "/images/duelist/black-widow.png" },
    { name: "Hawkeye", imgSrc: "/images/duelist/hawkeye.png" },
    { name: "Hela", imgSrc: "/images/duelist/hela.png" },
    { name: "Iron Fist", imgSrc: "/images/duelist/iron-fist.png" },
    { name: "Iron Man", imgSrc: "/images/duelist/iron-man.png" },
    { name: "Magik", imgSrc: "/images/duelist/magik.png" },
    { name: "Mister Fantastic", imgSrc: "/images/duelist/mister-fantastic.png" },
    { name: "Moon Knight", imgSrc: "/images/duelist/moon-knight.png" },
    { name: "Namor", imgSrc: "/images/duelist/namor.png" },
    { name: "Psyklocke", imgSrc: "/images/duelist/psylocke.png" },
    { name: "Scarlet Witch", imgSrc: "/images/duelist/scarlet-witch.png" },
    { name: "Spider-man", imgSrc: "/images/duelist/spider-man.png" },
    { name: "Squirrel Girl", imgSrc: "/images/duelist/squirrel-girl.png" },
    { name: "Star Lord", imgSrc: "/images/duelist/star-lord.png" },
    { name: "Storm", imgSrc: "/images/duelist/storm.png" },
    { name: "The Punisher", imgSrc: "/images/duelist/the-punisher.png" },
    { name: "Winter Soldier", imgSrc: "/images/duelist/winter-soldier.png" },
    { name: "Wolverine", imgSrc: "/images/duelist/wolverine.png" },
];
var strategists = [
    { name: "Adam Warlock", imgSrc: "/images/strategist/adam-warlock.png" },
    { name: "Cloak & Dagger", imgSrc: "/images/strategist/cloak-and-dagger.png" },
    { name: "Invisible Woman", imgSrc: "/images/strategist/invisible-woman.png" },
    { name: "Jeff the Land Shark", imgSrc: "/images/strategist/jeff-the-land-shark.png" },
    { name: "Loki", imgSrc: "/images/strategist/loki.png" },
    { name: "Luna Snow", imgSrc: "/images/strategist/luna-snow.png" },
    { name: "Mantis", imgSrc: "/images/strategist/mantis.png" },
    { name: "Rocket Racoon", imgSrc: "/images/strategist/rocket-racoon.png" },
];
var players = [];
var generateHeroes = function () {
    var vanguardList = document.getElementById("vanguardList");
    var duelistList = document.getElementById("duelistList");
    var strategistList = document.getElementById("strategistList");
    vanguards.forEach(function (vanguard) {
        var div = document.createElement("div");
        div.classList.add("width110");
        var img = document.createElement("img");
        img.classList.add("stack");
        img.src = vanguard.imgSrc;
        img.alt = vanguard.name;
        var button = document.createElement("button");
        button.classList.add("stack", "success");
        button.textContent = vanguard.name;
        button.onclick = function () {
            changeColor(button);
        };
        div.appendChild(img);
        div.appendChild(button);
        vanguardList.appendChild(div);
    });
    duelists.forEach(function (duelist) {
        var div = document.createElement("div");
        div.classList.add("width110");
        var img = document.createElement("img");
        img.classList.add("stack");
        img.src = duelist.imgSrc;
        img.alt = duelist.name;
        var button = document.createElement("button");
        button.classList.add("stack", "success");
        button.textContent = duelist.name;
        button.onclick = function () {
            changeColor(button);
        };
        div.appendChild(img);
        div.appendChild(button);
        duelistList.appendChild(div);
    });
    strategists.forEach(function (strategist) {
        var div = document.createElement("div");
        div.classList.add("width110");
        var img = document.createElement("img");
        img.classList.add("stack");
        img.src = strategist.imgSrc;
        img.alt = strategist.name;
        var button = document.createElement("button");
        button.classList.add("stack", "success");
        button.textContent = strategist.name;
        button.onclick = function () {
            changeColor(button);
        };
        div.appendChild(img);
        div.appendChild(button);
        strategistList.appendChild(div);
    });
};
var addNames = function (input) {
    deselectButton(input);
    var label = document.querySelector("label[for=" + input.id + "]");
    var textArea = document.getElementById("textNames");
    if (!textArea || !label.textContent)
        return;
    textArea.textContent = input.checked ? label.textContent.split(", ").join("\n") : null;
    autoResize(textArea);
};
var changeColor = function (button) {
    button.className = button.className === "stack success" ? "stack button" : "stack success";
};
var autoResize = function (textArea) {
    var _a;
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
    if (!textArea.textContent)
        return;
    players = (_a = textArea.textContent) === null || _a === void 0 ? void 0 : _a.split(", ");
};
var toggleSection = function (section) {
    var sectionElement = document.getElementById("".concat(section, "Section"));
    var toggleElement = document.getElementById("".concat(section, "Toggle"));
    if (sectionElement && toggleElement) {
        sectionElement.classList.toggle("collapsed");
        toggleElement.textContent = sectionElement.classList.contains("collapsed") ? "+" : "-";
    }
};
var changeAllVanguards = function (select) {
    var vanguardParent = document.getElementById("vanguardList");
    var vanguardChildren = vanguardParent.querySelectorAll("div");
    vanguardChildren.forEach(function (vanguard) {
        var button = vanguard.querySelector("button");
        if (button.classList.contains("success") !== select) {
            changeColor(button);
        }
    });
};
var changeAllDuelists = function (select) {
    var duelistParent = document.getElementById("duelistList");
    var duelistChildren = duelistParent.querySelectorAll("div");
    duelistChildren.forEach(function (duelist) {
        var button = duelist.querySelector("button");
        if (button.classList.contains("success") !== select) {
            changeColor(button);
        }
    });
};
var changeAllStrategists = function (select) {
    var strategistParent = document.getElementById("strategistList");
    var strategistChildren = strategistParent.querySelectorAll("div");
    strategistChildren.forEach(function (strategist) {
        var button = strategist.querySelector("button");
        if (button.classList.contains("success") !== select) {
            changeColor(button);
        }
    });
};
var changeAll = function (select) {
    changeAllVanguards(select);
    changeAllDuelists(select);
    changeAllStrategists(select);
};
var deselectButton = function (input) {
    if (input.checked) {
        input.checked = false;
    }
};
generateHeroes();
