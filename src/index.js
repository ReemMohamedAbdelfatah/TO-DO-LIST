import './style.css';
import todo from '.././modules/todo.js'
import store from '.././modules/store.js'
import UI from '.././modules/UI.js'
const addButton = document.querySelector('#addBtn');
const todoText = document.querySelector('#desc-input');
let counter = -1;

const list = [];
document.addEventListener('DOMContentLoaded', () => {
  UI.showToList;
});

const add = (e) => {
e.preventDefault();
  const newToDo = new todo(todoText.value, false, counter+1);
  console.log(todoText);
    store.addToDo(newToDo);
    counter++;
    UI.showToList();
    
    todoText.value='';
}
addButton.addEventListener('click', add);
