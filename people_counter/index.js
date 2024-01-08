let count = 0

function increment() {
    count += 1
    console.log('count incremented')
    document.getElementById("count-el").innerText = count
}

function save() {
    console.log(count)
}