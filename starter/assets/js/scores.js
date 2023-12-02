const ol = document.getElementById('highscores');
const clearBtn = document.getElementById('clear');
const results = JSON.parse(localStorage.getItem('highscores')).sort((a,b) => b.score - a.score) || [];

for (let i = 0; i < results.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${results[i].initials} - ${results[i].score}`;
    ol.appendChild(li);
}

clearBtn.addEventListener('click', () =>{
    localStorage.clear();
    ol.innerText = '';
});

