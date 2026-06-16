import { TodoItem } from "./todoItem.js"

export class TodoCollection {
  private NextId: number = 1;

  constuctor (public userName: string,
              public todoItems: TodoItem[]) {

  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.NextId++
    }
    this.todoItems.push(new TodoItem(this.nextId, task))
    return this.nextId
}

getTodoById(id: number): TodoItem {
    return this.todoItems.find(item => item.id === id)
}

markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id)
  if (todoItem) {
    todoItem.complete = complete
  }
}
}