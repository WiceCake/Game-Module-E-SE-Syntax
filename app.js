tree = document.querySelector('.tree');
canvas = document.querySelector('.canvas');
button = document.querySelector('button');
objectSound = new Audio('sounds/object-sound.wav')
objectSound.volume = 1;

tree.addEventListener('click', function(){
    objectSound.play();
});

button.addEventListener('click', function(){
    canvas.requestFullscreen();
})

window.addEventListener('beforeunload', function(){
    localStorage.setItem(1,'hi')
})