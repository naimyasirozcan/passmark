// definitions
let mid = document.querySelector("#midtermInp") // text input for midterm
let final = document.querySelector("#finalInp") // text input for final
let result = document.querySelector('#result')
let submitBtn = document.querySelector('#submitBtn')

// function
submitBtn.addEventListener('click', function(){
    let average = (mid.value * 0.4) + (final.value * 0.6)
    if (average >= 0 && average < 50) {
        result.textContent = `Average: ${average} | FF - Failed`
    }
    else if (average >= 50 && average < 60) {
        result.textContent = `Average: ${average} | FD - Failed`
    }
    else if (average >= 60 && average < 65) {
        result.textContent = `Average: ${average} | DD - Conditional Pass`
    }
    else if (average >= 65 && average < 70) {
        result.textContent = `Average: ${average} | DC - Conditional Pass`
    }
    else if (average >= 70 && average < 75) {
        result.textContent = `Average: ${average} | CC - Passed!`
    }
    else if (average >= 75 && average < 80) {
        result.textContent = `Average: ${average} | BC - Passed!`
    }
    else if (average >= 80 && average < 85) {
        result.textContent = `Average: ${average} | BB - Passed!`
    }
    else if (average >= 85 && average < 90) {
        result.textContent = `Average: ${average} | BA - Passed!`
    }
    else if (average >= 90 && average < 100) {
        result.textContent = `Average: ${average} | AA - Passed!`
    }
    mid.value = "" 
    final.value = ""
})
