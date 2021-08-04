// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './reset.css';
import './style.css';
import { addGame, refresh, submit } from './api.js';

const newElem = (elem) => document.createElement(elem);
const newDiv = () => document.createElement('div');

const render = () => {
  const anchor = document.getElementById('anchor');
  
  const main = newElem('main');
  main.classList.add('content-sa', 'flex', 'flex-col');

  const title = newElem('h1');
  title.innerText = 'Leader Board';
  title.classList.add('top-left', 'm-bot-1', 'txt-db');

  const divMain = newDiv();
  divMain.classList.add('content-sa', 'flex');

  const divLeft = newDiv();
  divLeft.classList.add('score-log', 'w-40');

  const logTitle = newDiv();
  logTitle.classList.add('flex', 'content-sa', 'm-bot-1');

  const subHead = newElem('h2');
  subHead.classList.add('txt-db');
  subHead.innerText = 'Recent Scores';

  const refBut = newElem('button');
  refBut.id = 'refresh-but';
  refBut.innerText = 'Refresh';
  refBut.classList.add('refresh', 'bg-green');

  const list = newElem('ul');
  list.id = 'JS-score-log';
  list.classList.add('log-board', 'pad-top', 'border', 'list-style', 'm-left', 'bg-green');

  const rightDiv = newDiv();
  rightDiv.classList.add('input-field', 'w-37');

  const subHead2 = newElem('h2');
  subHead2.innerText = 'Add Your Score';
  subHead2.classList.add('m-bot-1', 'txt-db');

  const form = newElem('form');

  const userInput = newElem('input');
  userInput.id = 'playerName';
  userInput.type = 'text';
  userInput.placeholder = 'Enter Your Name';
  userInput.classList.add('w-97', 'm-bot-1');

  const userScore = newElem('input');
  userScore.id = 'playerScore';
  userScore.type = 'text';
  userScore.placeholder = 'Enter Your Score';
  userScore.classList.add('w-97', 'm-bot-1');

  const subBut = newElem('input');
  subBut.id = 'submit-but';
  subBut.type = 'submit';
  subBut.innerText = 'Submit';
  subBut.classList.add('f-right', 'bg-green');

  form.append(userInput, userScore, subBut);
  rightDiv.append(subHead2, form);
  logTitle.append(subHead, refBut);
  divLeft.append(logTitle, list);
  divMain.append(divLeft, rightDiv);
  main.append(title, divMain);
  anchor.append(main);

  const anchorFoot = document.getElementById('anchor-foot');
  anchorFoot.classList.add('flex', 'center', 'vh-10');

  const footUl = newElem('ul');
  footUl.classList.add('flex', 'justify-content: space-around;');

  const liFoot1 = newElem('li');
  liFoot1.classList.add('');

  footUl.append();
  anchorFoot.append();

  addGame();
  refresh();
  document.getElementById('submit-but').addEventListener('click', submit);
  document.getElementById('refresh-but').addEventListener('click', refresh);
};

document.addEventListener('DOMContentLoaded', render);