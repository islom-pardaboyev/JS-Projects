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

const piyoda = 3.60
const velosiped = 20.10
const mashina = 70.00
const samolyot = 800.00

elForm2.addEventListener("submit", (e) => {
    e.preventDefault()

    const distance = parseFloat(elDistanceInput.value.trim(), 10);

    if(distance > 0){
        const walkTime = distance / piyoda;
        const walHour = parseInt(walkTime, 10);
        const walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walHour) * 60)

        const bikeTime = distance / velosiped;
        const bikeHour = parseInt(bikeTime, 10)
        const bikeMinute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) * 60)

        const carTime = distance / mashina
        const carHour = parseInt(carTime, 10)
        const carMinute = Math.round((parseFloat(carTime.toFixed(2), 10) - carHour) * 60)

        const planeTime = distance / samolyot
        const planeHour = parseInt(planeTime, 10)
        const planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60)

        elWalkTime.textContent = `${walHour} hours, ${walkMinute} min`;
        elBikeTime.textContent = `${bikeHour} hours, ${bikeMinute} min`;
        elCarTime.textContent = `${carHour} hours, ${carMinute} min`;
        elAirplaneTime.textContent = `${planeHour} hours, ${planeMinute} min`;
    }
})