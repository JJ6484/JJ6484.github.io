//#region Lists
var players = [];
var vanguards = [
    { name: "Captain America", img: "/images/vanguard/captain-america.png" },
    { name: "Doctor Strange", img: "/images/vanguard/doctor-strange.png" },
    { name: "Groot", img: "/images/vanguard/groot.png" },
    { name: "Hulk", img: "/images/vanguard/hulk.png" },
    { name: "Magneto", img: "/images/vanguard/magneto.png" },
    { name: "Peni Parker", img: "/images/vanguard/peni-parker.png" },
    { name: "Thor", img: "/images/vanguard/thor.png" },
    { name: "Venom", img: "/images/vanguard/venom.png" },
];
var duelists = [
    { name: "Black Panther", img: "/images/duelist/black-panther.png" },
    { name: "Black Widow", img: "/images/duelist/black-widow.png" },
    { name: "Hawkeye", img: "/images/duelist/hawkeye.png" },
    { name: "Hela", img: "/images/duelist/hela.png" },
    { name: "Iron Fist", img: "/images/duelist/iron-fist.png" },
    { name: "Iron Man", img: "/images/duelist/iron-man.png" },
    { name: "Magik", img: "/images/duelist/magik.png" },
    { name: "Mister Fantastic", img: "/images/duelist/mister-fantastic.png" },
    { name: "Moon Knight", img: "/images/duelist/moon-knight.png" },
    { name: "Namor", img: "/images/duelist/namor.png" },
    { name: "Psyklocke", img: "/images/duelist/psylocke.png" },
    { name: "Scarlet Witch", img: "/images/duelist/scarlet-witch.png" },
    { name: "Spider-man", img: "/images/duelist/spider-man.png" },
    { name: "Squirrel Girl", img: "/images/duelist/squirrel-girl.png" },
    { name: "Star Lord", img: "/images/duelist/star-lord.png" },
    { name: "Storm", img: "/images/duelist/storm.png" },
    { name: "The Punisher", img: "/images/duelist/the-punisher.png" },
    { name: "Winter Soldier", img: "/images/duelist/winter-soldier.png" },
    { name: "Wolverine", img: "/images/duelist/wolverine.png" },
];
var strategists = [
    { name: "Adam Warlock", img: "/images/strategist/adam-warlock.png" },
    { name: "Cloak & Dagger", img: "/images/strategist/cloak-and-dagger.png" },
    { name: "Invisible Woman", img: "/images/strategist/invisible-woman.png" },
    { name: "Jeff the Land Shark", img: "/images/strategist/jeff-the-land-shark.png" },
    { name: "Loki", img: "/images/strategist/loki.png" },
    { name: "Luna Snow", img: "/images/strategist/luna-snow.png" },
    { name: "Mantis", img: "/images/strategist/mantis.png" },
    { name: "Rocket Racoon", img: "/images/strategist/rocket-racoon.png" },
];
//#endregion
//#region Regions
var toggleSection = function (region) {
    var sectionElement = document.getElementById("".concat(region, "Section"));
    var toggleElement = document.getElementById("".concat(region, "Toggle"));
    if (sectionElement && toggleElement) {
        sectionElement.classList.toggle("collapsed");
        toggleElement.textContent = sectionElement.classList.contains("collapsed") ? "+" : "-";
    }
};
//#endregion Regions
//#region Names
var autoResize = function (el) {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
    if (!el.textContent)
        return;
    players = el.textContent.split(", ");
};
var addNames = function (el) {
    var textArea = document.getElementById("textNames");
    if (!textArea)
        return;
    textArea.value = el.selectedIndex === 0 ? "" : el.options[el.selectedIndex].text.split(", ").join("\n");
    autoResize(textArea);
};
//#endregion Names
//#region Hero Select
var switchSelection = function (el) {
    var list = el.classList;
    if (list.contains("success")) {
        list.remove("success");
        list.add("button");
    }
    else {
        list.remove("button");
        list.add("success");
    }
};
var changeAllRole = function (role, select) {
    var parent = document.getElementById("".concat(role, "List"));
    var children = parent.querySelectorAll("div");
    children.forEach(function (child) {
        var button = child.querySelector("button");
        if (button.classList.contains("success") !== select) {
            switchSelection(button);
        }
    });
};
var changeAll = function (select) {
    changeAllRole("vanguard", select);
    changeAllRole("duelist", select);
    changeAllRole("strategist", select);
};
//#endregion Hero Select
//#region Run on Load
var generateHeroes = function () {
    var vanguardList = document.getElementById("vanguardList");
    var duelistList = document.getElementById("duelistList");
    var strategistList = document.getElementById("strategistList");
    var addHeroes = function (list, child) {
        var div = document.createElement("div");
        div.classList.add("width110");
        var img = document.createElement("img");
        img.classList.add("stack");
        img.src = child.img;
        img.alt = child.name;
        var button = document.createElement("button");
        button.classList.add("stack", "success");
        button.textContent = child.name;
        button.onclick = function () {
            switchSelection(button);
        };
        div.appendChild(img);
        div.appendChild(button);
        list.appendChild(div);
    };
    vanguards.forEach(function (child) { return addHeroes(vanguardList, child); });
    duelists.forEach(function (child) { return addHeroes(duelistList, child); });
    strategists.forEach(function (child) { return addHeroes(strategistList, child); });
};
generateHeroes();
//#endregion Run on Load
