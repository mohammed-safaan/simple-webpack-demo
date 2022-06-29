import './style.scss';
function component() {
    const element = document.createElement("div");
    element.innerHTML = `and it is cool happy to try it
    and I wish I can use it more `;
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());