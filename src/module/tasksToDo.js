export default class TasksToDo {
  constructor() {
    this.taskArray = (JSON.parse(localStorage.getItem('taskDB')) !== null) ? (JSON.parse(localStorage.getItem('taskDB'))) : ([]);
  }
}
