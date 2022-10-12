
export default class store {

static addToDo = (todo) => {
  const todoList = store.getToDoList();
  todoList.push(todo);
  localStorage.setItem('todoList', JSON.stringify(todoList));
 }

static getToDoList = () => {
  let todoList;
  if(localStorage.getItem('todoList') === null) {
    todoList = [];
  }
  else {
    todoList = JSON.parse(localStorage.getItem('todoList'));
  }
  return todoList;
}

removeToDo = (index) => {
const todoList = store.showToDoList();
todoList.splice(index, 1);
localStorage.setItem('todoList', JSON.stringify(todoList));
}
}
