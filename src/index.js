// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './reset.css';
import './style.css';

const logBoard = [];

const render = () => {
  const leaderBoard = document.getElementById('JS-score-log');
  leaderBoard.innerHTML = '';
  const sortedTask = logBoard.sort((a, b) => a.index - b.index);

};

document.addEventListener('DOMContentLoaded', render);