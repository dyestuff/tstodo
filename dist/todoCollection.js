import { TodoItem } from "./todoItem.js";
export class TodoCollection {
    NextId = 1;
    constuctor(userName, todoItems) {
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.NextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.todoItems.find(item => item.id === id);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
