let num1 = 5
let num2 = 10
document.getElementById("num1-el").textContent = num1 
document.getElementById("num2-el").textContent = num2

function sum() {
    sum = num1 + num2
    document.getElementById("result").textContent = sum
}

function sub() {
    sub = num1 - num2
    document.getElementById("result").textContent = sub
}

function mul() {
    mul = num1 * num2
    document.getElementById("result").textContent = mul
}

function div() {
    div = num1 / num2
    document.getElementById("result").textContent = div
}