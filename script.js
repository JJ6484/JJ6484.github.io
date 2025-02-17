var vanguards = [
    { name: "Captain America", imgSrc: "images/vanguards/captain-america.png" },
    { name: "Doctor Strange", imgSrc: "images/vanguards/doctor-strange.png" },
    { name: "Groot", imgSrc: "images/vanguards/groot.png" },
    { name: "Hulk", imgSrc: "images/vanguards/hulk.png" },
    { name: "Magneto", imgSrc: "images/vanguards/magneto.png" },
    { name: "Peni Parker", imgSrc: "images/vanguards/peni-parker.png" },
    { name: "Thor", imgSrc: "images/vanguards/thor.png" },
    { name: "Venom", imgSrc: "images/vanguards/venom.png" },
];
var duelists = [
    { name: "Black Panther", imgSrc: "images/vanguards/black-panther.png" },
    { name: "Black Widow", imgSrc: "images/vanguards/black-widow.png" },
    { name: "Hawkeye", imgSrc: "images/vanguards/hawkeye.png" },
    { name: "Hela", imgSrc: "images/vanguards/hela.png" },
    { name: "Iron Fist", imgSrc: "images/vanguards/iron-fist.png" },
    { name: "Iron Man", imgSrc: "images/vanguards/iron-man.png" },
    { name: "Magik", imgSrc: "images/vanguards/magik.png" },
    { name: "Mister Fantastic", imgSrc: "images/vanguards/mister-fantastic.png" },
    { name: "Moon Knight", imgSrc: "images/vanguards/moon-knight.png" },
    { name: "Namor", imgSrc: "images/vanguards/namor.png" },
    { name: "Psyklocke", imgSrc: "images/vanguards/psylocke.png" },
    { name: "Scarlet Witch", imgSrc: "images/vanguards/scarlet-witch.png" },
    { name: "Spider-man", imgSrc: "images/vanguards/spider-man.png" },
    { name: "Squirrel Girl", imgSrc: "images/vanguards/squirrel-girl.png" },
    { name: "Star Lord", imgSrc: "images/vanguards/star-lord.png" },
    { name: "Storm", imgSrc: "images/vanguards/storm.png" },
    { name: "The Punisher", imgSrc: "images/vanguards/the-punisher.png" },
    { name: "Winter Soldier", imgSrc: "images/vanguards/winter-soldier.png" },
    { name: "Wolverine", imgSrc: "images/vanguards/wolverine.png" },
];
var strategists = [
    { name: "Adam Warlock", imgSrc: "images/vanguards/adam-warlock.png" },
    { name: "Cloak & Dagger", imgSrc: "images/vanguards/cloak-and-dagger.png" },
    { name: "Invisible Woman", imgSrc: "images/vanguards/invisible-woman.png" },
    { name: "Jeff the Land Shark", imgSrc: "images/vanguards/jeff-the-land-shark.png" },
    { name: "Loki", imgSrc: "images/vanguards/loki.png" },
    { name: "Luna Snow", imgSrc: "images/vanguards/luna-snow.png" },
    { name: "Mantis", imgSrc: "images/vanguards/mantis.png" },
    { name: "Rocket Racoon", imgSrc: "images/vanguards/rocket-racoon.png" },
];
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
        button.classList.add("stack", "button");
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
        button.classList.add("stack", "button");
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
        button.classList.add("stack", "button");
        button.textContent = strategist.name;
        button.onclick = function () {
            changeColor(button);
        };
        div.appendChild(img);
        div.appendChild(button);
        strategistList.appendChild(div);
    });
};
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
generateHeroes();
