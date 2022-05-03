let inputNumberEl = document.getElementById("input-number")
let convertBtnEl = document.getElementById("convert-btn")
let mainNumberElements = document.getElementsByClassName("number")
let metersToFeetEl = document.getElementById("meters-to-feet")
let feetToMetersEl = document.getElementById("feet-to-meters")
let litersToGallonsEl = document.getElementById("liters-to-gallons")
let gallonsToLitersEl = document.getElementById("gallons-to-liters")
let kilosToPoundsEl = document.getElementById("kilos-to-pounds")
let poundsToKilosEl = document.getElementById("pounds-to-kilos")
let mainNumber

function metersToFeet(){
    let result = (mainNumber * 3.280839895).toFixed(3)
    return result
}

function feetToMeters(){
    let result = (mainNumber * 0.3048).toFixed(3)
    return result
}

function litersToGallons(){
    let result = (mainNumber * 0.264172).toFixed(3)
    return result
}

function gallonsToLiters(){
    let result = (mainNumber * 3.785412).toFixed(3)
    return result
}

function kilosToPounds(){
    let result = (mainNumber * 2.2046).toFixed(3)
    return result
}

function poundsToKilos(){
    let result = (mainNumber * 0.45359237).toFixed(3)
    return result
}

function convertUnits(){
    mainNumber = inputNumberEl.value
    for (let i=0; i<mainNumberElements.length; i++){
        mainNumberElements[i].innerHTML = mainNumber
    }
    metersToFeetEl.textContent = metersToFeet()
    feetToMetersEl.textContent = feetToMeters()
    litersToGallonsEl.textContent = litersToGallons()
    gallonsToLitersEl.textContent = gallonsToLiters()
    kilosToPoundsEl.textContent = kilosToPounds()
    poundsToKilosEl.textContent = poundsToKilos()
}

convertBtnEl.addEventListener("click", convertUnits)