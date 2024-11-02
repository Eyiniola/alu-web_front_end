function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.text-transform ; transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}
function main() {
    var spooky = changeMode('9px', 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode('12px', 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode('12px', 'normal', 'lowercase', 'white', 'black');
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    let darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark Mode';
    darkModeButton.addEventListener('click', darkMode);
    let screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream Mode';
    screamModeButton.addEventListener('click', screamMode);
    document.body.appendChild(paragraph);
    document.body.appendChild(spookyButton);
    document.body.appendChild(darkModeButton);
    document.body.appendChild(screamModeButton);
}

main();