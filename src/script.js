const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const reset = document.getElementById('reset')
const counter = document.getElementById('counter')

function addValue() {
    counter.innerHTML = Number(counter.textContent) + 1
    if (counter.textContent > 0) {
        decrement.disabled = false
    }
}

increment.addEventListener('click', addValue)

function disabledValue() {
    if (counter.textContent <= 0) {
        decrement.disabled = true
    }
}

function removeValue() {
    counter.innerHTML = Number(counter.textContent) - 1
    disabledValue()
}

decrement.addEventListener('click', removeValue)

reset.addEventListener('click', function () {
    counter.innerHTML = 0
    disabledValue()
})