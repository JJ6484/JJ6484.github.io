const vanguards = [
	{name: "Captain America", imgSrc: "images/vanguards/captain-america.png"},
	{name: "Doctor Strange", imgSrc: "images/vanguards/doctor-strange.png"},
	{name: "Groot", imgSrc: "images/vanguards/groot.png"},
	{name: "Hulk", imgSrc: "images/vanguards/hulk.png"},
	{name: "Magneto", imgSrc: "images/vanguards/magneto.png"},
	{name: "Peni Parker", imgSrc: "images/vanguards/peni-parker.png"},
	{name: "Thor", imgSrc: "images/vanguards/thor.png"},
	{name: "Venom", imgSrc: "images/vanguards/venom.png"},
];

const duelists = [
	{name: "Black Panther", imgSrc: "images/vanguards/black-panther.png"},
	{name: "Black Widow", imgSrc: "images/vanguards/black-widow.png"},
	{name: "Hawkeye", imgSrc: "images/vanguards/hawkeye.png"},
	{name: "Hela", imgSrc: "images/vanguards/hela.png"},
	{name: "Iron Fist", imgSrc: "images/vanguards/iron-fist.png"},
	{name: "Iron Man", imgSrc: "images/vanguards/iron-man.png"},
	{name: "Magik", imgSrc: "images/vanguards/magik.png"},
	{name: "Mister Fantastic", imgSrc: "images/vanguards/mister-fantastic.png"},
	{name: "Moon Knight", imgSrc: "images/vanguards/moon-knight.png"},
	{name: "Namor", imgSrc: "images/vanguards/namor.png"},
	{name: "Psyklocke", imgSrc: "images/vanguards/psylocke.png"},
	{name: "Scarlet Witch", imgSrc: "images/vanguards/scarlet-witch.png"},
	{name: "Spider-man", imgSrc: "images/vanguards/spider-man.png"},
	{name: "Squirrel Girl", imgSrc: "images/vanguards/squirrel-girl.png"},
	{name: "Star Lord", imgSrc: "images/vanguards/star-lord.png"},
	{name: "Storm", imgSrc: "images/vanguards/storm.png"},
	{name: "The Punisher", imgSrc: "images/vanguards/the-punisher.png"},
	{name: "Winter Soldier", imgSrc: "images/vanguards/winter-soldier.png"},
	{name: "Wolverine", imgSrc: "images/vanguards/wolverine.png"},
];

const strategists = [
	{name: "Adam Warlock", imgSrc: "images/vanguards/adam-warlock.png"},
	{name: "Cloak & Dagger", imgSrc: "images/vanguards/cloak-and-dagger.png"},
	{name: "Invisible Woman", imgSrc: "images/vanguards/invisible-woman.png"},
	{name: "Jeff the Land Shark", imgSrc: "images/vanguards/jeff-the-land-shark.png"},
	{name: "Loki", imgSrc: "images/vanguards/loki.png"},
	{name: "Luna Snow", imgSrc: "images/vanguards/luna-snow.png"},
	{name: "Mantis", imgSrc: "images/vanguards/mantis.png"},
	{name: "Rocket Racoon", imgSrc: "images/vanguards/rocket-racoon.png"},
];

const generateHeroes = () => {
	const vanguardList = document.getElementById("vanguardList") as HTMLDivElement;
	const duelistList = document.getElementById("duelistList") as HTMLDivElement;
	const strategistList = document.getElementById("strategistList") as HTMLDivElement;

	vanguards.forEach(vanguard => {
		const div = document.createElement("div");
		div.classList.add("width110");

		const img = document.createElement("img");
		img.classList.add("stack");
		img.src = vanguard.imgSrc;
		img.alt = vanguard.name;

		const button = document.createElement("button");
		button.classList.add("stack", "button");
		button.textContent = vanguard.name;
		button.onclick = () => {
			changeColor(button);
		};

		div.appendChild(img);
		div.appendChild(button);

		vanguardList.appendChild(div);
	});

	duelists.forEach(duelist => {
		const div = document.createElement("div");
		div.classList.add("width110");

		const img = document.createElement("img");
		img.classList.add("stack");
		img.src = duelist.imgSrc;
		img.alt = duelist.name;

		const button = document.createElement("button");
		button.classList.add("stack", "button");
		button.textContent = duelist.name;
		button.onclick = () => {
			changeColor(button);
		};

		div.appendChild(img);
		div.appendChild(button);

		duelistList.appendChild(div);
	});

	strategists.forEach(strategist => {
		const div = document.createElement("div");
		div.classList.add("width110");

		const img = document.createElement("img");
		img.classList.add("stack");
		img.src = strategist.imgSrc;
		img.alt = strategist.name;

		const button = document.createElement("button");
		button.classList.add("stack", "button");
		button.textContent = strategist.name;
		button.onclick = () => {
			changeColor(button);
		};

		div.appendChild(img);
		div.appendChild(button);

		strategistList.appendChild(div);
	});
}

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

generateHeroes();