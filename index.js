const elForm = document.querySelector(".form1")
const elInputTemp = document.querySelector(".inputTemp")
const elRainCheckbox = document.querySelector(".raining")
const elOpenCheckbox = document.querySelector(".open")

const elYesOrNo = document.querySelector(".yesOrNo")
const elYes = document.querySelector(".yes")
const elNo = document.querySelector(".no")

elForm.addEventListener('change', function () {
    const temperature = +(elInputTemp.value)

    elYes.classList.remove('text-green');
    elNo.classList.remove('text-red');

    if (temperature >= 5 && temperature <= 30) {
        elYes.classList.add('text-green');
    } else{
        elNo.classList.add("text-red")
    }
    if(elRainCheckbox.checked){
        elNo.classList.add("text-red")
        elYes.classList.remove("text-green")
    }else if(elRainCheckbox.checked && elOpenCheckbox.checked){
        elYes.classList.add("text-green")
        elNo.classList.remove("text-red")
    }else if (temperature < 5 && elOpenCheckbox.checked){
         elNo.classList.add('text-red');
         elYes.classList.remove('text-green');
}
})

// Exercise 2
const elForm2 = document.querySelector(".form2")
const elDistanceInput = document.querySelector("#distance-input")

const elWalkTime = document.querySelector(".walk-time")
const elBikeTime = document.querySelector(".bike-time")
const elCarTime = document.querySelector(".car-time")
const elAirplaneTime = document.querySelector(".airplane-time")

console.log(elForm2, elDistanceInput, elWalkTime, elBikeTime, elCarTime, elAirplaneTime);