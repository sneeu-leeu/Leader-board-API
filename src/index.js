// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './reset.css';
import './style.css';
import { addGame, refresh, submit } from './api.js';

const newElem = (elem) => document.createElement(elem);  

const render = () => {

  const anchor = document.getElementById('anchor');

  const main = newElem('main');
  main.classList.add('content-sa', 'flex', 'flex-col');
  