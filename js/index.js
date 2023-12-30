let motivationText = ''

const startTime = () => {
    let today = new Date();
    let hourNow = today.getHours();
    let minutesNow = today.getMinutes();
    let secondsNow = today.getSeconds();
    h = checkTime(hourNow);
    m = checkTime(minutesNow);
    s = checkTime(secondsNow);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function() {
        startTime()
    }, 500);

    if (hourNow > 6 && hourNow < 12) {
        motivationText = '¡Buenos días! Hoy vas a pegar buenas balas en el cs.'
    }
    if (hourNow > 12 && hourNow < 14) {
        motivationText = 'Empeza a tirar bien los fb y los smokes.'
    }
    if (hourNow > 14 && hourNow < 19) {
        motivationText = '¡Buenas tardes! #Anda a jugar al cs'
    }
    if (hourNow > 19 && hourNow <= 6) {
        motivationText = '¡Buenas noches! Recordá pajearte y descansar bien.'
    }
}

const body = document.querySelector('body').addEventListener('load', startTime())


const motivationDiv = document.querySelector('#motivationDiv')
motivationDiv.innerHTML = motivationText

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}