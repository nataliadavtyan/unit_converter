let unitEl = document.getElementById("unit-el")
const buttonEl = document.getElementById("button-el")
let lengthEl = document.getElementById("length-el")
let temperatureEl = document.getElementById("temperature-el")
let massEl = document.getElementById("mass-el")


const metersToFeet = 3.281
const kilogramsToPounds = 2.204

buttonEl.addEventListener("click", function(){
    let baseValue = unitEl.value
    lengthEl.textContent = `
        ${baseValue} meters = ${(baseValue * metersToFeet).toFixed(3)} feet 
        | ${baseValue} feet = ${(baseValue / metersToFeet).toFixed(3)} meters
    `
    temperatureEl.textContent = `
        ${baseValue} °C = ${((baseValue * 9 / 5) + 32).toFixed(1)} °F 
        | ${baseValue} °F = ${((baseValue - 32) * 5/9).toFixed(1)} °C
    `
    massEl.textContent = `
        ${baseValue} kilograms = ${(baseValue * kilogramsToPounds).toFixed(3)} pounds 
        | ${baseValue} pounds = ${(baseValue / kilogramsToPounds).toFixed(3)} kilograms
    `
})

unitEl.addEventListener("click", function(){
    unitEl.value = ""
})