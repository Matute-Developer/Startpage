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

const backgroundSettingsKey = 'startpage.backgroundSettings';
const background = document.getElementById('imagen');
const imageConfig = document.getElementById('image-config');
const configToggle = document.getElementById('image-config-toggle');
const displaySelect = document.getElementById('image-display');
const opacityInput = document.getElementById('image-opacity');
const opacityValue = document.getElementById('image-opacity-value');
const positionXInput = document.getElementById('image-position-x');
const positionXValue = document.getElementById('image-position-x-value');
const positionYInput = document.getElementById('image-position-y');
const positionYValue = document.getElementById('image-position-y-value');
const backgroundColorInput = document.getElementById('background-color');
const defaultBackgroundSettings = { display: 'cover', opacity: 100, positionX: 50, positionY: 50, color: '#fefeff' };

function readBackgroundSettings() {
    try {
        return { ...defaultBackgroundSettings, ...JSON.parse(localStorage.getItem(backgroundSettingsKey)) };
    } catch (error) {
        return defaultBackgroundSettings;
    }
}

function saveBackgroundSettings(settings) {
    try {
        localStorage.setItem(backgroundSettingsKey, JSON.stringify(settings));
    } catch (error) {
        // La página continúa funcionando si el almacenamiento está deshabilitado.
    }
}

function applyBackgroundSettings(settings) {
    const display = ['center', 'tile', 'contain', 'cover'].includes(settings.display) ? settings.display : defaultBackgroundSettings.display;
    const opacity = Math.min(100, Math.max(0, Number(settings.opacity) || 0));
    const positionX = Math.min(100, Math.max(0, Number(settings.positionX) || 0));
    const positionY = Math.min(100, Math.max(0, Number(settings.positionY) || 0));
    const color = /^#[0-9a-f]{6}$/i.test(settings.color) ? settings.color : defaultBackgroundSettings.color;
    background.className = 'background-' + display;
    document.body.classList.toggle('background-tile', display === 'tile');
    document.documentElement.style.setProperty('--background-opacity', opacity / 100);
    document.documentElement.style.setProperty('--background-image', 'url("' + background.src + '")');
    document.documentElement.style.setProperty('--background-color', color);
    document.documentElement.style.setProperty('--background-position', positionX + '% ' + positionY + '%');
    displaySelect.value = display;
    opacityInput.value = opacity;
    opacityValue.value = opacity + '%';
    opacityValue.textContent = opacity + '%';
    positionXInput.value = positionX;
    positionXValue.value = positionX + '%';
    positionXValue.textContent = positionX + '%';
    positionYInput.value = positionY;
    positionYValue.value = positionY + '%';
    positionYValue.textContent = positionY + '%';
    backgroundColorInput.value = color;
    return { display, opacity, positionX, positionY, color };
}

let backgroundSettings = applyBackgroundSettings(readBackgroundSettings());

configToggle.addEventListener('click', () => {
    const isOpen = imageConfig.classList.toggle('is-open');
    configToggle.setAttribute('aria-expanded', isOpen);
});

displaySelect.addEventListener('change', () => {
    backgroundSettings.display = displaySelect.value;
    backgroundSettings = applyBackgroundSettings(backgroundSettings);
    saveBackgroundSettings(backgroundSettings);
});

opacityInput.addEventListener('input', () => {
    backgroundSettings.opacity = opacityInput.value;
    backgroundSettings = applyBackgroundSettings(backgroundSettings);
    saveBackgroundSettings(backgroundSettings);
});

function updateImagePosition() {
    backgroundSettings.positionX = positionXInput.value;
    backgroundSettings.positionY = positionYInput.value;
    backgroundSettings = applyBackgroundSettings(backgroundSettings);
    saveBackgroundSettings(backgroundSettings);
}

positionXInput.addEventListener('input', updateImagePosition);
positionYInput.addEventListener('input', updateImagePosition);

backgroundColorInput.addEventListener('input', () => {
    backgroundSettings.color = backgroundColorInput.value;
    backgroundSettings = applyBackgroundSettings(backgroundSettings);
    saveBackgroundSettings(backgroundSettings);
});

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}
