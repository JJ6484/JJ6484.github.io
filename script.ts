const vanguards = [
	{name: "Captain America", imgSrc: "/images/vanguard/captain-america.png"},
	{name: "Doctor Strange", imgSrc: "/images/vanguard/doctor-strange.png"},
	{name: "Groot", imgSrc: "/images/vanguard/groot.png"},
	{name: "Hulk", imgSrc: "/images/vanguard/hulk.png"},
	{name: "Magneto", imgSrc: "/images/vanguard/magneto.png"},
	{name: "Peni Parker", imgSrc: "/images/vanguard/peni-parker.png"},
	{name: "Thor", imgSrc: "/images/vanguard/thor.png"},
	{name: "Venom", imgSrc: "/images/vanguard/venom.png"},
];

const duelists = [
	{name: "Black Panther", imgSrc: "/images/duelist/black-panther.png"},
	{name: "Black Widow", imgSrc: "/images/duelist/black-widow.png"},
	{name: "Hawkeye", imgSrc: "/images/duelist/hawkeye.png"},
	{name: "Hela", imgSrc: "/images/duelist/hela.png"},
	{name: "Iron Fist", imgSrc: "/images/duelist/iron-fist.png"},
	{name: "Iron Man", imgSrc: "/images/duelist/iron-man.png"},
	{name: "Magik", imgSrc: "/images/duelist/magik.png"},
	{name: "Mister Fantastic", imgSrc: "/images/duelist/mister-fantastic.png"},
	{name: "Moon Knight", imgSrc: "/images/duelist/moon-knight.png"},
	{name: "Namor", imgSrc: "/images/duelist/namor.png"},
	{name: "Psyklocke", imgSrc: "/images/duelist/psylocke.png"},
	{name: "Scarlet Witch", imgSrc: "/images/duelist/scarlet-witch.png"},
	{name: "Spider-man", imgSrc: "/images/duelist/spider-man.png"},
	{name: "Squirrel Girl", imgSrc: "/images/duelist/squirrel-girl.png"},
	{name: "Star Lord", imgSrc: "/images/duelist/star-lord.png"},
	{name: "Storm", imgSrc: "/images/duelist/storm.png"},
	{name: "The Punisher", imgSrc: "/images/duelist/the-punisher.png"},
	{name: "Winter Soldier", imgSrc: "/images/duelist/winter-soldier.png"},
	{name: "Wolverine", imgSrc: "/images/duelist/wolverine.png"},
];

const strategists = [
	{name: "Adam Warlock", imgSrc: "/images/strategist/adam-warlock.png"},
	{name: "Cloak & Dagger", imgSrc: "/images/strategist/cloak-and-dagger.png"},
	{name: "Invisible Woman", imgSrc: "/images/strategist/invisible-woman.png"},
	{name: "Jeff the Land Shark", imgSrc: "/images/strategist/jeff-the-land-shark.png"},
	{name: "Loki", imgSrc: "/images/strategist/loki.png"},
	{name: "Luna Snow", imgSrc: "/images/strategist/luna-snow.png"},
	{name: "Mantis", imgSrc: "/images/strategist/mantis.png"},
	{name: "Rocket Racoon", imgSrc: "/images/strategist/rocket-racoon.png"},
];

let players: string[] = [];

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
		button.classList.add("stack", "success");
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
		button.classList.add("stack", "success");
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
		button.classList.add("stack", "success");
		button.textContent = strategist.name;
		button.onclick = () => {
			changeColor(button);
		};

		div.appendChild(img);
		div.appendChild(button);

		strategistList.appendChild(div);
	});
}

const addNames = (input: HTMLInputElement) => {
	deselectButton(input);

	const label = document.querySelector("label[for=" + input.id + "]") as HTMLLabelElement;
	const textArea = document.getElementById("textNames") as HTMLTextAreaElement;

	if (!textArea || !label.textContent)
		return;

	textArea.textContent = input.checked ? label.textContent.split(", ").join("\n") : null; 
	autoResize(textArea);
}

const changeColor = (button: HTMLButtonElement) => {
	button.className = button.className === "stack success" ? "stack button" : "stack success";
}

const autoResize = (textArea: HTMLTextAreaElement) => {
	textArea.style.height = "auto";
	textArea.style.height = textArea.scrollHeight + "px";

	if (!textArea.textContent)
		return;

	players = textArea.textContent?.split(", ");
}

const toggleSection = (section: string) => {
	const sectionElement = document.getElementById(`${section}Section`);
	const toggleElement = document.getElementById(`${section}Toggle`);
	
	if (sectionElement && toggleElement) {
		sectionElement.classList.toggle("collapsed");
		toggleElement.textContent = sectionElement.classList.contains("collapsed") ? "+" : "-";
	}
}

const changeAllVanguards = (select: boolean) => {
	const vanguardParent = document.getElementById("vanguardList") as HTMLDivElement;
	const vanguardChildren = vanguardParent.querySelectorAll("div");

	vanguardChildren.forEach(vanguard => {
		const button = vanguard.querySelector("button") as HTMLButtonElement;
		
		if (button.classList.contains("success") !== select) {
			changeColor(button);
		}
	});
}

const changeAllDuelists = (select: boolean) => {
	const duelistParent = document.getElementById("duelistList") as HTMLDivElement;
	const duelistChildren = duelistParent.querySelectorAll("div");

	duelistChildren.forEach(duelist => {
		const button = duelist.querySelector("button") as HTMLButtonElement;
		
		if (button.classList.contains("success") !== select) {
			changeColor(button);
		}
	});
}

const changeAllStrategists = (select: boolean) => {
	const strategistParent = document.getElementById("strategistList") as HTMLDivElement;
	const strategistChildren = strategistParent.querySelectorAll("div");

	strategistChildren.forEach(strategist => {
		const button = strategist.querySelector("button") as HTMLButtonElement;
		
		if (button.classList.contains("success") !== select) {
			changeColor(button);
		}
	});
}

const changeAll = (select: boolean) => {
	changeAllVanguards(select);
	changeAllDuelists(select);
	changeAllStrategists(select);
}

const deselectButton = (input: HTMLInputElement) => {
	if (input.checked) {
		input.checked = false;
	}
}

generateHeroes();