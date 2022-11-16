const unitEl = document.getElementById("unit-el")
const buttonEl = document.getElementById("button-el")
const lengthEl = document.getElementById("length-el")
const temperatureEl = document.getElementById("temperature-el")
const massEl = document.getElementById("mass-el")

const metersToFeet = 3.281
const kilogramsToPounds = 2.204
const zeroValue = "0"

render(zeroValue)

function render(value){
      if (value) {
        lengthEl.textContent = `
        ${value} meters = ${(value * metersToFeet).toFixed(3)} feet 
        | ${value} feet = ${(value / metersToFeet).toFixed(3)} meters
    `
    temperatureEl.textContent = `
        ${value} °C = ${((value * 9 / 5) + 32).toFixed(1)} °F 
        | ${value} °F = ${((value - 32) * 5/9).toFixed(1)} °C
    `
    massEl.textContent = `
        ${value} kilograms = ${(value * kilogramsToPounds).toFixed(3)} pounds 
        | ${value} pounds = ${(value / kilogramsToPounds).toFixed(3)} kilograms
    `
    }
}

buttonEl.addEventListener("click", function(){
    let baseValue = unitEl.value
    render(baseValue)
})

unitEl.addEventListener("click", function(){
    unitEl.value = ""
    render(zeroValue)
})