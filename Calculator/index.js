const dot = document.getElementById("dot")
const clear = document.getElementById("clear")

const enter = document.getElementById("enter-btn")

let output = document.getElementById("text")

let firstNums = ''
let secondNums = ''

let dotKey = true
let key = true
let op = ''

dot.addEventListener('click', function(){
    if(dotKey){
        if(key){
            firstNums += '.'
            render(firstNums)
            dotKey = false
        }
        else{
            secondNums+= '.'
            render(secondNums)
            dotKey = false
        }
    }
})

function addToDisplay(x){
    if(key){
        firstNums += x + ''
        render(firstNums)
    }
    else{
        secondNums+= x + ''
        render(secondNums)
    }
}

function render(x){
    output.textContent = ''
    output.textContent = x
}

function whatOp(x){
    op = x
    key = false
    dotKey = true
}

enter.addEventListener('click', function(){
    doOperation()
})

function doOperation(){
    if(op === 'add'){
        let num = Math.round((parseFloat(firstNums) + parseFloat(secondNums)+ Number.EPSILON) * 100000)/ 100000
        output.textContent = num
        firstNums = num
        secondNums = ''
    }
    if(op === 'sub'){
        let num =  Math.round((parseFloat(firstNums) - parseFloat(secondNums)+ Number.EPSILON) * 100000)/ 100000
        output.textContent = num
        firstNums = num
    }
    if(op === 'div'){
        let num = Math.round((parseFloat(firstNums) / parseFloat(secondNums)+ Number.EPSILON) * 100000)/ 100000
        output.textContent = num
        firstNums = num
        secondNums = ''
    }
    if(op === 'mul'){
        let num = Math.round((parseFloat(firstNums) * parseFloat(secondNums)+ Number.EPSILON) * 100000)/ 100000
        output.textContent = num
        firstNums = num
        secondNums = ''
    }
}

clear.addEventListener('dblclick', function(){
    output.textContent = ''
    firstNums = ''
    secondNums = ''
    key = true
    op = ''
    dotKey = true
})
