
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

/*
const FontColor = document.querySelector('.fontcolor');

FontColor.addEventListener("hover", function(){
    if (FontColor == 'black') {}
}*/


//https://homzzang.com/b/js-1547
//document.body.style.backgroundColor= "Tomato"; 
//const loginInput = document.querySelector("#login-form input");
/*function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    savedToDos();
}*/