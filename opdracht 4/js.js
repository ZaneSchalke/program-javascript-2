
const body = document.body;

const colors = ['blue', 'green', 'red', 'orange', 'pink', 'purple', 'violet', 'black', 'teal', 'cyan'];


for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div'); 
    div.setAttribute('id', `div${i}`); 
    div.textContent = `Dit is div ${i}`; 
    div.classList.add('box'); 
    body.appendChild(div); 
}
