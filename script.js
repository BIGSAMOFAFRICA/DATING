function calculateLove() {
    const person1 = document.getElementById('person1').value.trim();
    const person2 = document.getElementById('person2').value.trim();
    const resultContainer = document.getElementById('result');

    if (person1 === '' || person2 === '') {
        alert('Alaye enter both names.');
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101);

    resultContainer.innerHTML = `<h3 class="text-white font-semibold">${person1} and ${person2}</h3>`;

    if (lovePercentage > 50) {
        resultContainer.innerHTML += `<p class="text-green-500 font-bold text-lg">${lovePercentage}% - You are both compatible for valentine! 💖</p>`;
    } else {
        resultContainer.innerHTML += `<p class="text-red-500 font-bold text-lg">${lovePercentage}% - Abort relationship or you bear the risk! 💔</p>`;


        const prankAlert = document.createElement('div');
        prankAlert.innerText = "😂 This is just a prank, don't take it seriously!";
        prankAlert.className = "fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md text-lg font-semibold shadow-lg";
        document.body.appendChild(prankAlert);

    
        setTimeout(() => {
            prankAlert.remove();
        }, 7000);
        
    }
}
