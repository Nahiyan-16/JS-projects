let game_color = document.getElementById("color")
let numCorrect = document.getElementById("numCorrect")
const easy = document.getElementById("easy")
const hard = document.getElementById("hard")

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")
let c5 = document.getElementById("c5")
let c6 = document.getElementById("c6")

let color_ary = [c1,c2,c3,c4,c5,c6]
let numAttempt = 0
let numCor = 0
let mode = 'easy'

for(let i = 0; i < color_ary.length; i++){
    randomizeColor(color_ary[i])
}

function randomizeColor(x){
    if(mode === 'easy'){
        let red = randomizeEasy()
        let green = randomizeEasy()
        let blue = randomizeEasy()
        x.style.background = `rgb(${red},${green},${blue})`
    }
    else{
        let red = randomizeHard()
        let green = randomizeHard()
        let blue = randomizeHard()
        x.style.background = `rgb(${red},${green},${blue})`
    }
}

function randomizeEasy(){
    let ary = [0,25,50,75,100,125,150,175,200,225,255]
    return ary[Math.floor(Math.random() * ary.length)]
}

function randomizeHard(){
    return Math.floor(Math.random() * 255)
}

function getGameColor(){
    let num = Math.floor(Math.random() * 6)
    game_color.textContent = `${color_ary[num].style.background}`
}

getGameColor()

function checkColor(x){
    if(x.style.background == game_color.textContent){
        game_color.textContent = "CORRECT!"
        numAttempt++
        numCor++
        displayCorrect()
    }
    else{
        numAttempt ++
        displayCorrect()
        makeNewColor()
    }
}

function displayCorrect(){
    numCorrect.textContent = `${numCor}/${numAttempt}`
}

function makeNewColor(){
    for(let i = 0; i < color_ary.length; i++){
        randomizeColor(color_ary[i])
    }
    getGameColor()
}

easy.addEventListener('click', function(){
    mode = 'easy'
    makeNewColor()
})

hard.addEventListener('click', function(){
    mode = 'hard'
    makeNewColor()
})