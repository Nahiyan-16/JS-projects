let clock = document.getElementById('clock')

function time(){
    const d = new Date()

    const minutes = d.getMinutes()

    let hours = d.getHours()%12
    if(hours === 0){
        hours = 12
    }
    const seconds = d.getSeconds()

    if(seconds < 10 || minutes < 10){
        if(seconds < 10){
            clock.textContent = `${hours}:${minutes}:0${seconds}`
        }
        else if(minutes < 10){
            clock.textContent = `${hours}:0${minutes}:${seconds}`
        }
        else{
            clock.textContent = `${hours}:0${minutes}:0${seconds}`
        }
    }
    else{
        clock.textContent = `${hours}:${minutes}:${seconds}`
    }
    setTimeout('time()', 1000)
}

time()
