import { TodoItem } from "./todoItem.js";
export declare class TodoCollection {
    userName: string;
    todoItems: TodoItem[];
    private nextId;
    constructor(userName: string, todoItems?: TodoItem[]);
    addTodo(task: string): number;
    getTodoById(id: number): TodoItem | undefined;
    markComplete(id: number, complete: boolean): void;
}
