/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let unitEl = document.getElementById("unit-el")
const buttonEl = document.getElementById("button-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const metersToFeet = 3.281
const literToGallons = 0.264
const kilogramsToPounds = 2.204

buttonEl.addEventListener("click", function(){
    let baseValue = unitEl.value
    lengthEl.textContent = `
        ${baseValue} meters = ${(baseValue * metersToFeet).toFixed(3)} feet 
        | ${baseValue} feet = ${(baseValue / metersToFeet).toFixed(3)} meters
    `
    volumeEl.textContent = `
        ${baseValue} liters = ${(baseValue * literToGallons).toFixed(3)} gallons 
        | ${baseValue} gallons = ${(baseValue / literToGallons).toFixed(3)} meters
    `
    massEl.textContent = `
        ${baseValue} kilograms = ${(baseValue * kilogramsToPounds).toFixed(3)} pounds 
        | ${baseValue} pounds = ${(baseValue / kilogramsToPounds).toFixed(3)} kilograms
    `
})