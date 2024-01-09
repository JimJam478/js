var num1 = 10
var num2 = 5
document.getElementById("num1-el").textContent = num1 
document.getElementById("num2-el").textContent = num2

function sum() {
    let sum = num1 + num2
    document.getElementById("result").textContent = sum
}

function sub() {
    let sub = num1 - num2
    document.getElementById("result").textContent = sub
}

function mul() {
    let mul = num1 * num2
    document.getElementById("result").textContent = mul
}

function div() {
    let div = num1 / num2
    document.getElementById("result").textContent = div
}