const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const addGame = async () => {
  if (localStorage.getItem('gameId'));

  const newGame = {
    name: '666',
  };

  const response = await fetch(`${baseUrl}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGame),
  });
  const data = await response.json();
  const gameId = data.result.split(' ')[5];
  localStorage.setItem('gameId', gameId);
};

const refresh = async () => {
  const gameId = localStorage.getItem('gameId');
  const list = document.getElementById('JS-score-log');
  list.innerHTML = '';
  const response = await fetch(`${baseUrl}games/${gameId}/scores`);
  const scores = await response.json();
  scores.result.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${score.user}: ${score.score}`;
    listItem.classList.add('bg-orange');
    list.appendChild(listItem);
  });
};

const submit = async (e) => {
  e.preventDefault();

  const gameId = localStorage.getItem('gameId');
  const playerName = document.getElementById('playerName');
  const playerScore = document.getElementById('playerScore');

  const newScore = {
    user: playerName.value,
    score: playerScore.value,
  };

  await fetch(`${baseUrl}games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  playerName.value = '';
  playerScore.value = '';
};

module.exports = { addGame, refresh, submit };
