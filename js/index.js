// ... (código CSS)

let motivationText = '';

const startTime = () => {
    let today = new Date();
    let hourNow = today.getHours();
    let minutesNow = today.getMinutes();
    let secondsNow = today.getSeconds();
    let h = checkTime(hourNow);
    let m = checkTime(minutesNow);
    let s = checkTime(secondsNow);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

    if (hourNow >= 6 && hourNow < 12) {
        motivationText = '¡Buenos días!.';
    }
    else if (hourNow >= 12 && hourNow < 14) {
        motivationText = 'llego el MALANDRAJEE.';
    }
    else if (hourNow >= 14 && hourNow < 20) {
        motivationText = '¡Buenas tardes! Zaramay la tiene chikitita';
    }
    else {
        motivationText = '¡Buenas noches! Recordá pajearte y descansar bien.';
    }
    

    const motivationDiv = document.querySelector('#motivationDiv');
    motivationDiv.innerHTML = motivationText;

    var t = setTimeout(function() {
        startTime();
    }, 500);
};

window.addEventListener('load', startTime);

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}
