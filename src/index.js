import './style.css';
import Todo from '../modules/todo.js';
import store from '../modules/store.js';
import UI from '../modules/UI.js';

const addButton = document.querySelector('#addBtn');
const todoText = document.querySelector('#desc-input');
let counter = -1;

document.addEventListener('DOMContentLoaded', () => {
  UI.showToList();
});

const add = (e) => {
  e.preventDefault();
  const newToDo = new Todo(todoText.value, false, counter + 1);
  store.addToDo(newToDo);
  counter += 1;
  UI.showToList();

  todoText.value = '';
};
addButton.addEventListener('click', add);
