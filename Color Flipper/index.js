let bg = document.getElementById("body")
const btn = document.getElementById("flip-btn")
let input = document.getElementById("input-el")

btn.addEventListener('click', function(){
    bg.style.background = input.value;
    input.value = 'black'
})