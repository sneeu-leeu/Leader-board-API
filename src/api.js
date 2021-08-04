const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const addGame = async () => {
  if (localStorage.getItem('gameId'));

  const newGame = {
    name: 'Footie with the boys',
  };

  const response = await fetch(`${apiUrl}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGame),
  });
  const data = await response.json();
  const gameId = data.result.split(' ')[3];
  localStorage.setItem('gameId', gameId);
};

const refresh = async () => {
  const gameId = localStorage.getItem('gameId');
  const list = document.getElementById('JS-score-log');
  list.innerHTML = '';
  const response = await fetch(`${apiUrl}games/${gameId}/scores`);
  const scores = await response.json();
  scores.result.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${score.user}: ${score.score}`;
    listItem.append(list);
  });
};
