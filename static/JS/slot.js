import { heartRainfall } from "./util.js";
import { getRandomIntInclusive } from "./util.js";
import { playAudio } from "./util.js";

const STATUS = document.querySelector('#status');
const WIN_TEXT = "TOTALLY LOVES YOU!!!";
const LOOSE_TEXT = "IS NOT INTO YOU!";
const SPIN_TEXT = "ANALYZING...";


export function initSlotMachine() {
	const spinButton = document.querySelector('#spin-button');
	spinButton.addEventListener('click', spinCards);
}

function spinCards() {
	STATUS.textContent = SPIN_TEXT;

	const maxSpinSlot1 = getRandomIntInclusive(10, 15);
	const maxSpinSlot2 = getRandomIntInclusive(16, 20);
	const maxSpinSlot3 = getRandomIntInclusive(21, 25);

	let round = 0;

	let slot1 = setInterval(spin1, 50);
	let slot2 = setInterval(spin2, 50);
	let slot3 = setInterval(spin3, 50);

	function spin1() {
		round++;
		const slotTile = document.querySelector("#slot1");
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
		const slotTile = document.querySelector("#slot2");
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
		const slotTile = document.querySelector("#slot3");
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
	const card1 = document.querySelector("#slot1").className;
	const card2 = document.querySelector("#slot2").className;
	const card3 = document.querySelector("#slot3").className;
	
	if (card1 === card2 && card2 === card3) {
		if (card1 === "love-heart") {
			STATUS.textContent = WIN_TEXT;
			heartRainfall('heart-icon');
			playAudio('/static/AUDIO/Loves_You.mp3');
		} else {
			STATUS.textContent = LOOSE_TEXT;
			heartRainfall('broken-heart-icon');
			playAudio('/static/AUDIO/The_Sound_of_Silence.mp3');
		}
	}else {
		STATUS.textContent = LOOSE_TEXT;
		heartRainfall('broken-heart-icon');
		playAudio('/static/AUDIO/The_Sound_of_Silence.mp3');
	}
	const spinButton = document.querySelector('#spin-button');
	spinButton.removeEventListener('click', spinCards);
}
