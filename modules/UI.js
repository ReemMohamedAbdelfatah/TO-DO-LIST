import store from '.././modules/store.js'
export default class UI {

static showToList = () => {
    const container = document.querySelector('.todo-list');
    const list = store.getToDoList();
    let todoListContent = '';

      list.sort((a, b) => a.index - b.index);
      list.forEach((item) => {
    const li = document.createElement('li');

        if (item.isCompleted === true) {
          todoListContent += `<div><input class='item-check' id='desc' type='checkbox' checked/>${item.description}</div><a href='#'></a><i class='fas fa-ellipsis-v'></i>`;
        } else {
          todoListContent += `
          <div><input class='item-check' id='desc' type='checkbox'/>${item.description}</div><i class='fas fa-ellipsis-v'></i>`;
        }
        li.innerHTML = todoListContent;
      container.appendChild(li);

      });
      container.innerHTML += '<li class=\'clear-item\'><a href=\'#\'>Clear all completed</a></li>';

}

editToDo = (index) => {}

removeToDo = (index) => {}

}