"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(arrayOfStrings) {
        this.arrayOfStrings = arrayOfStrings;
    }
    Todo.prototype.addTask = function (task) {
        this.arrayOfStrings.push(task);
        console.log("\n      =========== NEW TASK ===========\n      Task " + task + " inserted in the list\n    ");
        return this.arrayOfStrings.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.arrayOfStrings.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var i = this.arrayOfStrings.indexOf(task);
        if (i != -1) {
            this.arrayOfStrings.splice(i, 1);
        }
        return this.arrayOfStrings.length;
    };
    return Todo;
}());
var myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
