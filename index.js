const unitEl = document.getElementById("unit-el")
const buttonEl = document.getElementById("button-el")
const lengthEl = document.getElementById("length-el")
const temperatureEl = document.getElementById("temperature-el")
const massEl = document.getElementById("mass-el")

const metersToFeet = 3.281
const kilogramsToPounds = 2.204

basicState()

function basicState(){
    lengthEl.textContent = "0 meters = 0 feet | 0 feet = 0 meters"
    temperatureEl.textContent = "0 °C = 32 °F | 0 °F = -17.8 °C"
    massEl.textContent = "0 kilograms = 0 pounds | 0 pounds = 0 kilograms"
}

buttonEl.addEventListener("click", function(){
    let baseValue = unitEl.value
    if (baseValue) {
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
    }
})

unitEl.addEventListener("click", function(){
    unitEl.value = ""
    basicState()
})
