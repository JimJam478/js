let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    console.log('count incremented')
    document.getElementById("count-el").innerText = count
}

function save() {
    let entries = count + " - "
    saveEl.innerText += entries
    console.log(count)
}