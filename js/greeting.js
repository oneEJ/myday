const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDENCLASS = 'hidden';
const USERNAME = 'username';
// const inputUsername = loginInput.value; 이거하면 안돼...

function onLoginSubmit(event){
	event.preventDefault();
	loginForm.classList.add(HIDDENCLASS);
	localStorage.setItem(USERNAME, loginInput.value);

	greeting.classList.remove(HIDDENCLASS);
	greeting.textContent = `안녕, ${loginInput.value}`;
}

const savedUsername = localStorage.getItem(USERNAME); 
//여기 loginInput.value하면 안나옴
//getItem('input'), setItem('input', value) 이런식임

if (savedUsername === null){
	loginForm.classList.remove(HIDDENCLASS);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	greeting.classList.remove(HIDDENCLASS);
	greeting.textContent = `안녕, ${savedUsername}`;
}

//////////////

const logout = document.querySelector('.logout');

function deleteAll() {
	if(localStorage !== null) {
	localStorage.clear();
	location.reload();
	} //window를 붙이지 말아야 하나봐
}

logout.addEventListener('click', deleteAll);
