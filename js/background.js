
const first= document.querySelector('.first');
const second= document.querySelector('.second');
const third= document.querySelector('.third');

first.addEventListener('click', changeBgA);
function changeBgA(){
    document.body.style.backgroundImage= 'url("images/Almost.jpg")';
}

second.addEventListener('click', changeBgB);
function changeBgB(){
    document.body.style.backgroundImage= 'url("images/Lush.jpg")';
}

third.addEventListener('click', changeBgC);
function changeBgC(){
    document.body.style.backgroundImage= 'url("images/Stellar.jpg")';
}

const fourth = document.querySelector('.fourth');
const randomImage = [
    'Pastel Orange at the Sun.jpg',
    'PiggyPink.jpg',
    'Tranquil.jpg',
    'Ultra Voilet.jpg',
    'Pizelex.jpg',
    'DIMIGO.jpg',
    'Peach.jpg',
    'Deep Purple.jpg',
    'Amin.jpg',
    'EasyMed.jpg'
];

fourth.addEventListener('click', changeBgD);
function changeBgD(){
    document.body.style.backgroundImage= 'url("images/' + randomImage[Math.floor(Math.random()*randomImage.length)] + '")';
    fourth.style.backgroundImage = document.body.style.backgroundImage;
}
