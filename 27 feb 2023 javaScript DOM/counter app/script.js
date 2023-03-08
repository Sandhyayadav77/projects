let count = document.getElementById("count");
let increment = document.querySelector(".Increment")
let decrement = document.querySelector(".Decrement")
let reset = document.querySelector(".Reset")
increment.addEventListener('click', () => {
    count.innerText++;
})
decrement.addEventListener('click', () => {
    count.innerText--;
})
reset.addEventListener('click', () => {
    count.innerText = "0";
})