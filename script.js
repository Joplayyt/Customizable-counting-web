function startCounting() {
    const number = parseInt(document.getElementById('number').value);
    let delay = document.getElementById('delay').value;
    const output = document.getElementById('output');

    // Determine if the delay is in seconds or milliseconds
    if (delay.includes('s')) {
        delay = parseFloat(delay) * 1000; // Convert to milliseconds
    } else {
        delay = parseInt(delay); // Assume milliseconds
    }

    if (isNaN(number) || isNaN(delay)) {
        output.innerHTML = "Please enter valid number and delay.";
        return;
    }

    output.innerHTML = '';
    let currentNumber = 0;

    const interval = setInterval(() => {
        if (currentNumber <= number) {
            output.innerHTML = currentNumber;
            currentNumber++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

function applyStyles() {
    const root = document.documentElement;

    const backgroundColor = document.getElementById('background-color').value;
    const primaryColor = document.getElementById('primary-color').value;
    const secondaryColor = document.getElementById('secondary-color').value;
    const buttonColor = document.getElementById('button-color').value;
    const buttonHoverColor = document.getElementById('button-hover-color').value;
    const fontSize = document.getElementById('font-size').value + 'px';

    root.style.setProperty('--background-color', backgroundColor);
    root.style.setProperty('--primary-color', primaryColor);
    root.style.setProperty('--secondary-color', secondaryColor);
    root.style.setProperty('--button-color', buttonColor);
    root.style.setProperty('--button-hover-color', buttonHoverColor);
    root.style.setProperty('--font-size', fontSize);
}
