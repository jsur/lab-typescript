// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(public arrayOfStrings: Array<string>) {}

  addTask(task: string): number {
    this.arrayOfStrings.push(task);
    console.log(`
      =========== NEW TASK ===========
      Task ${task} inserted in the list
    `);
    return this.arrayOfStrings.length;
  }

  listAllTasks(): void {
    this.arrayOfStrings.forEach(function(item) {
      console.log(item);
    });
  }

  deleteTask(task: string): number {
    const i = this.arrayOfStrings.indexOf(task);
    if(i != -1) {
      this.arrayOfStrings.splice(i, 1);
    }
    return this.arrayOfStrings.length;
  }
}
// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
