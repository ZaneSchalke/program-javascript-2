function feliciteer() {
 
    const aantal = parseInt(document.getElementById('aantal').value);
    

    if (isNaN(aantal) || aantal < 1) {
        alert("Voer een geldig getal in!");
        return;
    }


    const output = document.getElementById('output');

   
    output.innerHTML = '';

    for (let i = 1; i <= aantal; i++) {
     
        const p = document.createElement('p');
        p.textContent = `Ik feliciteer je ${i} keer.`;
        output.appendChild(p);
    }
}
