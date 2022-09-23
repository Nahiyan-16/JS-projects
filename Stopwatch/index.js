let start = document.getElementById("start")
const reset = document.getElementById("reset")
let output = document.getElementById("output")

let seconds = 0
let minutes = 0
let ms = 0

let key = false

function time(){
    if(key){
        output.textContent = ""
        if(minutes === 59 && seconds === 59 && milliseconds === 99){
            return output.textContent = "Done"
        }
        calcTime()
        setTimeout('time()', 10)
        ms ++
    }
}

start.addEventListener('click', function(){
    key = !key
    if(key){
        start.textContent = 'Stop'
        time()
    }else{
        start.textContent = 'Start'
        output.textContent = ""
        output.textContent = calcTime()
    }
})

reset.addEventListener('click', function(){
    output.textContent = ''
    key = false;
    seconds = 0;
    minutes = 0;
    ms = 0;
    calcTime()
})

function calcTime(){
    if (seconds > 59){
        seconds = 0
        minutes ++
    }
    if( ms > 99){
        ms = 0
        seconds ++
    }
    if(seconds < 10 && minutes < 10 && ms < 10){
        return output.textContent += `0${minutes}:0${seconds}:0${ms}`
    }
    else if(seconds < 10 && ms < 10){
        return output.textContent += `${minutes}:0${seconds}:0${ms}`
    }
    else if(minutes < 10 && seconds < 10){
        return output.textContent += `0${minutes}:0${seconds}:${ms}`
    }
    else if(minutes < 10 && ms < 10){
        return output.textContent += `0${minutes}:${seconds}:0${ms}`
    }
    else if(minutes < 10){
        return output.textContent += `0${minutes}:${seconds}:${ms}`
    }
    else if(seconds < 10){
        return output.textContent += `${minutes}:0${seconds}:${ms}`
    }
    else if(ms < 10){
        return output.textContent += `${minutes}:${seconds}:0${ms}`
    }
    else{
        return output.textContent += `${minutes}:${seconds}:${ms}`
    }
}




