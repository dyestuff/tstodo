import { TodoItem } from "./todoItem.js";
export declare class TodoCollection {
    userName: string;
    private nextId;
    private itemMap;
    constructor(userName: string, todoItems?: TodoItem[]);
    addTodo(task: string): number;
    getTodoById(id: number): TodoItem | undefined;
    getTodoItems(includeComplete: boolean): TodoItem[];
    markComplete(id: number, complete: boolean): void;
    removeComplete(): void;
}
