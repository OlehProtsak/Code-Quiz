const ol = document.getElementById('highscores');
const results = JSON.parse(localStorage.getItem('highscores')).sort((a,b) => b.score - a.score);
console.log(results);
for (let i = 0; i < results.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${results[i].initials} - ${results[i].score}`;
    ol.appendChild(li);
}

