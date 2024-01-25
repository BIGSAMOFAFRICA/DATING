function calculateLove() {
    // Get names from input fields
    const person1 = document.getElementById('person1').value.trim();
    const person2 = document.getElementById('person2').value.trim();

    // Validate names
    if (person1 === '' || person2 === '') {
        alert('Please enter both names.');
        return;
    }

    // Calculate love percentage (just a random calculation for demonstration)
    const lovePercentage = Math.floor(Math.random() * 101);

    // Display result
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h3>${person1} and ${person2}</h3>`;
    
    if (lovePercentage > 50) {
        resultContainer.innerHTML += `<p class="text-success">${lovePercentage}% - You are good to marry!</p>`;
    } else {
        resultContainer.innerHTML += `<p class="text-danger">${lovePercentage}% - Abort relationship or you bear the risk!</p>`;
    }
}