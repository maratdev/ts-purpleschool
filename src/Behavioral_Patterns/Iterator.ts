class Task {
  constructor(public priority: number) {
  }

}

class TaskList {
  private tasks: Task[] = []

  public sortByPriority = () => {
    return [...this.getTasks()].sort((a, b) => a.priority - b.priority);
  };

  public getPriorityIterator = () => {
    return new IteratorByPriority(this);
  };

  public addTask(task: Task){
    this.tasks.push(task);
  };

  public getTasks(){
    return this.tasks;
  };

  public count(){
    return this.tasks.length;
  };

}

interface IIterator<T> {
  current(): T | undefined;
  prev(): T | undefined;
  next(): T | undefined;
  index(): number
}


class IteratorByPriority implements IIterator<Task> {
  private position: number = 0;
  public taskList: TaskList;

  constructor(taskList: TaskList) {
    taskList.sortByPriority()
    this.taskList = taskList
  }

  current = (): Task | undefined => {
    return this.taskList.getTasks()[this.position]
  };

  prev = (): Task | undefined => {
    this.position -= 1;
    return this.taskList.getTasks()[this.position]
  };

  next = (): Task | undefined => {
    this.position += 1;
    return this.taskList.getTasks()[this.position]
  };

  index = (): number => {
    return this.position;
  };
}

const todoList = new TaskList();
todoList.addTask(new Task(8))
todoList.addTask(new Task(1))
todoList.addTask(new Task(3))

const getTextIterator = todoList.getPriorityIterator();
console.log(getTextIterator.current())
console.log(getTextIterator.next())
console.log(getTextIterator.next())
console.log(getTextIterator.prev())
console.log(getTextIterator.index())
