import {addToDoList} from '../modules/domDisplay.js';

describe('addToDoList', () => {
  test('Should add element when its called', () => {
    store('Hello');
    displayTodo();
    const list = document.querySelectorAll('textarea');
    expect(list).toHaveLength(1);
  });
});