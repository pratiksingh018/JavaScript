const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const container = document.getElementById('container');
let count = 0;

decrease.onclick =function () {
    count--;
    container.textContent = count;
}
reset.onclick =function () {
    count = 0;
    container.textContent = count;
}
increase.onclick =function () {
    count++;
    container.textContent = count;
}