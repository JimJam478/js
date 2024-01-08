let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    console.log('count incremented')
    document.getElementById("count-el").textContent = count
}

function save() {
    let entries = count + " - "
    saveEl.textContent += entries
    count = 0
    document.getElementById("count-el").textContent = count
    console.log(count)
}