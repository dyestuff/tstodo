"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    NextId = 1;
    constuctor(userName, todoItems) {
    }
}
exports.TodoCollection = TodoCollection;
number;
{
    while (this.getTodoById(this.nextId)) {
        this.NextId++;
    }
    this.todoItems.push(new todoItem_1.TodoItem(this.nextId, task));
    return this.nextId;
}
getTodoById(id, number);
todoItem_1.TodoItem;
{
    return this.todoItems.find(item => item.id === id);
}
markComplete(id, number, complete, boolean);
{
    const todoItem = this.getTodoById(id);
    if (todoItem) {
        todoItem.complete = complete;
    }
}
