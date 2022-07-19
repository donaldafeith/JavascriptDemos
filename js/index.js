let saveEl = document.getElementById("save-el") //Save Element grabbing
let countEl = document.getElementById("count-el") // Count Element
let count = 0 //Start count

function increment() {
    count += 1
    countEl.textContent = count //count and add one per click
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr //save the count when you click the save button and do not delete the old saved number
    countEl.textContent = 0 //reset to zero for another day after save is clicked
    count = 0 //set the counter back to zero so it doesn't keep adding

}
