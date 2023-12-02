const ol = document.getElementById('highscores');
const clearBtn = document.getElementById('clear');
const results = JSON.parse(localStorage.getItem('highscores')) || [];

if (results) {
   const sortedResults = results.sort((a, b) => b.score - a.score);

    for (let i = 0; i < sortedResults.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${sortedResults[i].initials} - ${sortedResults[i].score}`;
        ol.appendChild(li);
    }
}

clearBtn.addEventListener('click', () =>{
    localStorage.clear();
    ol.innerText = '';
});

