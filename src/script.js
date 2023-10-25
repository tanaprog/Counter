const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const reset = document.getElementById('reset')

let number = document.getElementById('number')

increment.addEventListener('click', function () {
    number.innerHTML = Number(number.textContent) + 1
})

decrement.addEventListener('click', function () {
    if (number.textContent > 0) {
        number.innerHTML = Number(number.textContent) - 1
    }
})

reset.addEventListener('click', function () {
    number.innerHTML = 0
})