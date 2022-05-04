const FLOWERSVG = document.querySelector('#flower');

let allPetals = [
    `<path d="M 200,100
                c 100,50 150,50 200,0
                c -50,-50 -100,-50 -200,0"
          class="petal"></path>`,
    `<path d="M 198,120
                c 98,60 148,60 198,20
                c -54,-60 -104,-60 -198,-20"
          class="petal"></path>`,
    `<path d="M 190,140
                c 94,70 144,70 194,40
                c -58,-70 -108,-70 -194,-40"
          class="petal"></path>`,
    `<path d="M 181,160
                c 90,100 140,110 188,80
                c -50,-90 -100,-90 -188,-80"
          class="petal"></path>`,
    `<path d="M 170,170
                c 60,160 110,150 145,135
                c -5,-100 -60,-95 -145,-135"
          class="petal"></path>`,
    `<path d="M 150,188
                c 40,150 105,165 132,157
                c -15,-100 -50,-100 -132,-157"
          class="petal"></path>`,
    `<path d="M 135,195
                c 30,210 70,160 85,180
                c 25,-80 -10,-120 -85,-180"
          class="petal"></path>`,
    `<path d="M 115,198
                c -10,210 40,160 50,200
                c 70,-80 -10,-120 -50,-200"
          class="petal"></path>`,
    `<path d="M 100,200
                c 50,100 50,150 0,200
                c -50,-50 -50,-100 0,-200"
          class="petal"></path>`,
    `<path d="M 0,100
                c -100,-50 -150,-50 -200,0
                c 50,40 100,40 200,0"
          class="petal"></path>`,
    `<path d="M 0,120
                c -100,-50 -150,-50 -200,15
                c 50,50 100,50 200,-15"
          class="petal"></path>`,
    `<path d="M 5,140
                c -40,30 -50,90 -190,50
                c 20,-30 90,-90 190,-50"
          class="petal"></path>`,
    `<path d="M 10,160
                c 2,50 -10,100 -170,100
                c 40,-50 100,-110 170,-100"
          class="petal"></path>`,
    `<path d="M 25,170
                c -30,60 -40,120 -145,130
                c 5,-60 5,-80 145,-130"
          class="petal"></path>`,
    `<path d="M 45,188
                c -10,170 -20,120 -80,185
                c -10,-180 -10,-120 80,-185"
          class="petal"></path>`,
    `<path d="M 70,195
                c -70,94 -80,100 -50,194
                c 75,-10 70,-10 50,-194"
          class="petal"></path>`,
    `<path d="M 85,198
                c -60,120 -60,124, -30,198
                c 40,-50 70,-60 30,-198"
          class="petal"></path>`,
    `<path d="M 100,0
                c -50,-100 -50,-150 0,-200
                c 50,50 50,100 0,200"
          class="petal"></path>`,
    `<path d="M 115,0
                c 60,-120 60,-124, 30,-198
                c -40,50 -70,60 -30,198"
          class="petal"></path>`,
    `<path d="M 130,5
                c 70,-94 80,-144 50,-194
                c -75,58 -70,108 -50,194"
          class="petal"></path>`,
    `<path d="M 155,10
                c 10,-170 20,-120 80,-185
                c 10,80 30,120 -80,185"
          class="petal"></path>`,
    `<path d="M 170,25
                c -10,-5 40,-160 145,-135
                c 5,40 30,75 -145,135"
          class="petal"></path>`,
    `<path d="M 185,45
                c 15,-50 50,-120 170,-100
                c -40,90 -105,125 -170,100"
          class="petal"></path>`,
    `<path d="M 190,55
                c 40,10 50,70 195,-40
                c -20,10 -90,-70 -195,40"
          class="petal"></path>`,
    `<path d="M 196,75
                c 100,50 150,50 200,-15
                -50,-50 -100,-50 -200,15"
          class="petal"></path>`,
    `<path d="M 85,0
                c -60,-120 -60,-124, -30,-198
                c 40,50 70,60 30,198"
          class="petal"></path>`,
    `<path d="M 70,5
                c -70,-94 -80,-144 -50,-194
                c 75,58 70,108 50,194"
          class="petal"></path>`,
    `<path d="M 45,15
                c -10,-170 -20,-120 -80,-185
                c -30,80 10,120 80,185"
          class="petal"></path>`,
    `<path d="M 25,30
                c -30,-5 40,-140 -145,-135
                c -10,50 30,100 145,135"
          class="petal"></path>`,
    `<path d="M 15,50
                c -30,-50 30,-50 -170,-100
                c -40,90 70,100 170,100"
          class="petal"></path>`,
    `<path d="M 5,65
                c -40,10 -50,70 -195,-40
                c 20,-10 90,-70 195,40"
          class="petal"></path>`,
    `<path d="M 0,80
                c -100,-50 -150,-50 -200,-15
                50,50 100,50 200,15"
          class="petal"></path>`
]


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectRandomPetals(min, max) {
    let randomNumber = getRandomIntInclusive(min, max);
    let shuffledPetals = allPetals.sort(() => 0.5 - Math.random());
    return shuffledPetals.slice(0, randomNumber);
}

function placePetals() {
    let selectedPetals = selectRandomPetals(20, 32);
    for (let petal of selectedPetals) {
        let petalContainer = document.createElementNS("http://www.w3.org/2000/svg",'g');
        FLOWERSVG.appendChild(petalContainer);
        petalContainer.innerHTML = petal;
    }
}

function deletePetal() {
    const petals = document.querySelectorAll('.petal');

    for (let petal of petals) {
       petal.addEventListener('click', () => {
           if (FLOWERSVG.children.length > 3){
               petal.parentElement.remove();
               changeLoveText();
           }
    });
        }
}

function changeLoveText() {
    const lovesYouText = document.querySelector('.loves-you-text');
    let lovesYou = 'LOVES YOU';
    let lovesYouNot = 'LOVES YOU NOT';
    if (FLOWERSVG.children.length % 2 === 0) {
        lovesYouText.textContent = lovesYou;
    }else {
        lovesYouText.textContent = lovesYouNot;
    }
}

/*function playSound(source) {
    let audio = new Audio(source);
    audio.play();
}

function playSoundOnSubmit() {
    const submitForm = document.querySelector('form');
    submitForm.addEventListener('submit', playSound('static/AUDIO/The-Contours-Do-You-Love-Me.mp3'));
}*/

function initGame() {
    // playSoundOnSubmit();
    placePetals();
    deletePetal();

}

initGame();