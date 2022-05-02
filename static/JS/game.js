const petals = document.querySelectorAll('.petal');

for (let petal of petals) {
   petal.addEventListener('click', () => {
       petal.classList.toggle('petal');
       // petal.remove();
});
    }

/*initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}*/
