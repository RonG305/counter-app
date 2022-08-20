let count = 0
let increment = document.querySelector(".count")
let entries = document.querySelector('.entries')


function increase() {
    count += 1
    increment.textContent = count
    
}


function save() {
    let saveLine = count + " - "
    entries.textContent += saveLine
    increment.textContent = 0
    count = 0
}
