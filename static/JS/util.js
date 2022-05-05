export function heartRainfall(cl) {
    document.addEventListener('mousemove', function (e){
        let body = document.querySelector('body');
        let heart = document.createElement('span');
        heart.classList.add(cl)
        let x = e.offsetX;
        let y = e.offsetY;
        heart.style.left = x+'px';
        heart.style.top = y+'px';
        let size = Math.random() * 100;
        heart.style.width = 45+size+'px';
        heart.style.height = 25+size+'px';
        body.appendChild(heart);

        setTimeout(function (){
            heart.remove();
        },2000);
    })
}

export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function playAudio(source) {
    let song = new Audio(source);
    song.play();
}