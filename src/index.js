import _ from 'lodash';
import './reset.css';
import './style.css';

let logBoard = [{
  player: "player1",
  score: 42069,
  id: 1
}
];

function render() {
  const leaderBoard = document.getElementById('JS-score-log');
  leaderBoard.innerHTML = '';
  const sortedTask = logBoard.sort((a, b) => a.index - b.index);

  sortedTask.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.id = leaderBoard.length + 1;
    listItem.classList.add('flex', 'aic-start');
    const textElem = document.createElement('p');
    textElem.classList.add('flex', 'aic-start');
    listItem.append(textElem);
  });
}

document.addEventListener('DOMContentLoaded', render);