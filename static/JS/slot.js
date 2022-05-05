import { heartRainfall } from "./util.js";
import { getRandomIntInclusive } from "./util.js";

let status = document.querySelector('#status');
export function initSlotMachine() {
	const spinButton = document.querySelector('#spin-button');
	spinButton.addEventListener('click', spinCards);
}


function spinCards() {
	status.textContent = "SPINNING";

	let maxSpinSlot1 = getRandomIntInclusive(10, 15);
	let maxSpinSlot2 = getRandomIntInclusive(16, 20);
	let maxSpinSlot3 = getRandomIntInclusive(21, 25);

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
			heartRainfall('heart-icon');
		} else {
		status.textContent = "LOOSER!";
		heartRainfall('broken-heart-icon');
		}
	}else {
		status.textContent = "LOOSER!";
		heartRainfall('broken-heart-icon');
	}
	let spinButton = document.querySelector('#spin-button');
	spinButton.removeEventListener('click', spinCards);
}
