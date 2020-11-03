const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener('click', function () {
    const newColor = makerandColor();
    document.body.style.backgroundColor = newColor;
    h1.textContent = newColor;
    button.classList.add("btn");
});


const makerandColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}



