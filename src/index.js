// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './reset.css';
import './style.css';
import { newGame, refresh, submit } from './api.js';

const render = () => {
  newGame();
  refresh();
  document.getElementById('refresh').addEventListener('click', refresh);
  document.getElementById('submit').addEventListener('click', submit);
};

document.addEventListener('DOMContentLoaded', render);