/*let spin = new Audio("JavascriptSlotMachine/res/sounds/Do-You-Love-Me.mp3");
let win = new Audio("JavascriptSlotMachine/res/sounds/Loves_You.mp3");
let lose = new Audio("JavascriptSlotMachine/res/sounds/Loves_you_not.mp3");*/
let status = document.querySelector('#status');

export function initSlotMachine() {
	const spinButton = document.querySelector('#spin-button');
	console.log(spinButton);
	spinButton.addEventListener('click', spinCards());
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}

function spinCards() {
	status.textContent = "SPINNING";

	let maxSpinSlot1 = randomInt(10, 15);
	let maxSpinSlot2 = randomInt(16, 20);
	let maxSpinSlot3 = randomInt(21, 25);

	let round = 0;

	let slot1 = setInterval(spin1, 50);
	let slot2 = setInterval(spin2, 50);
	let slot3 = setInterval(spin3, 50);

	function spin1() {
		round++;
		let slotTile = document.querySelector("#slot1");
		if (slotTile.className === "crying-face") {
			slotTile.className = "love-heart";
		} else if (slotTile.className === "love-heart") {
			slotTile.className = "crying-face";
		}
		if (round >= maxSpinSlot1) {
		clearInterval(slot1);
		}
	}

	function spin2() {
		round++;
		let slotTile = document.querySelector("#slot2");
		if (slotTile.className === "crying-face") {
			slotTile.className = "love-heart";
		} else if (slotTile.className === "love-heart") {
			slotTile.className = "crying-face";
		}
		if (round >= maxSpinSlot2) {
			clearInterval(slot2);
		}
	}

	function spin3() {
		round++;
		let slotTile = document.querySelector("#slot3");
		if (slotTile.className === "crying-face") {
			slotTile.className = "love-heart";
		} else if (slotTile.className === "love-heart") {
			slotTile.className = "crying-face";
		}
		if (round >= maxSpinSlot3) {
			clearInterval(slot3);
			checkSpinResult();
		}
	}
}

function checkSpinResult(){
	let card1 = document.querySelector("#slot1").className;
	let card2 = document.querySelector("#slot2").className;
	let card3 = document.querySelector("#slot3").className;
	
	if (card1 === card2 && card2 === card3) {
		if (card1 === "love-heart") {
			status.textContent = "YOU ARE LOVED!";
		} else {
		status.textContent = "LOOSER!"
		}
	}else {
		status.textContent = "LOOSER!"
	}
}
