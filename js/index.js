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
        motivationText = 'A que te habla lautaro di lolioo';
    }
    else if (hourNow >= 12 && hourNow < 14) {
        motivationText = 'Santi la remerita pa que vasilee';
    }
    else if (hourNow >= 14 && hourNow < 20) {
        motivationText = 'Nacho te amo todo mi amor';
    }
    else {
        motivationText = 'CAMPEO Y TUNELEO';
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
