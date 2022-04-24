
const today = new Date();

const summerbirthday = new Date(`${new Date().getFullYear()}-07-21:00:00:00-0900`);
const between = new Date(summerbirthday - today);
const summerDay = Math.round(between/(24*60*60*1000));

document.querySelector('#main_right li:nth-child(1) span').textContent = `-${summerDay}일`;


const fallbirthday = new Date(`${new Date().getFullYear()}-11-22:00:00:00-0900`);
const between2 = new Date(fallbirthday - today);
const fallDay = Math.round(between2/(24*60*60*1000));

document.querySelector('#main_right li:nth-child(2) span').textContent = `-${fallDay}일`



const newYear = new Date(`${new Date().getFullYear()}-12-31:00:00:00-0900`);
const between3 = new Date(newYear - today);
const newYearDay = Math.round(between3/(24*60*60*1000));

document.querySelector('#main_right li:nth-child(3) span').textContent = `-${newYearDay}일`;