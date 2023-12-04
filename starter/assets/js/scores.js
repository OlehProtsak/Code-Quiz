// Variables for scores 
const ol = document.getElementById('highscores');
const clearBtn = document.getElementById('clear');
const results = JSON.parse(localStorage.getItem('highscores'));
// If results exist, create list elements with results on the highscores.html page.
if (results) {
   const sortedResults = results.sort((a, b) => b.score - a.score);

    for (let i = 0; i < sortedResults.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${sortedResults[i].initials} - ${sortedResults[i].score}`;
        ol.appendChild(li);
    }
}
// Function to clear local storage when a button is clicked.
clearBtn.addEventListener('click', () =>{
    localStorage.clear();
    ol.innerText = '';
});

