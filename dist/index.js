import { TodoItem } from './todoItem.js';
import { TodoCollection } from "./todoCollection.js";
let todos = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Something"),
    new TodoItem(3, "Remember Self"), new TodoItem(4, "Remember You")
];
let collection = new TodoCollection("Ahtem", todos);
console.clear();
console.log('${collection.userName}`s Todo List');
let newId = collection.addTodo("Go for something");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
collection.addTodo(todoItem);
