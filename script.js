/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let number = 0;
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function(){
    number = inputEl.value;
    length(number)
    volume(number)
    mass(number)
    console.log(number)
    
})

function length(num){
    let length = `${num} meters = ${((num*3.281).toFixed(3))} feet | ${num} feet = ${((num/3.281).toFixed(3))} meters`
    lengthEl.textContent = length
    
}

function volume(num) {
    let volume = `${num} liters = ${((num*0.264).toFixed(3))} gallons | ${num} gallons = ${((num/0.264).toFixed(3))} liters`
    volumeEl.textContent = volume;
}

function mass(num) {
    let mass = `${num} kilos = ${((num*2.204).toFixed(3))} pounds | ${num} pounds = ${((num/2.204).toFixed(3))} kilos`
    massEl.textContent = mass;
}