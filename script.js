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
        resultContainer.innerHTML += `<p class="text-green-500 font-bold text-lg">${lovePercentage}% - You got a valentine match! 💖</p>`;
    } else {
        resultContainer.innerHTML += `<p class="text-red-500 font-bold text-lg">${lovePercentage}% - Abort relationship or you bear the risk! 💔</p>`;
    }
}
