let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
function increment() {
    count+=1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let myPoints = 3
function addPoints() {
    myPoints += 1
}

function removePoints() {
    myPoints -= 1
}
addPoints()
addPoints()
addPoints()
addPoints()
addPoints()
addPoints()
addPoints()

console.log(myPoints)