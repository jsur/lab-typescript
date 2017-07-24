"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status ? this.status = false : this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(arrayOfItems) {
        this.arrayOfItems = arrayOfItems;
    }
    TodoList.prototype.addTask = function (item) {
        this.arrayOfItems.push(item);
        console.log("\n      =========== NEW TASK ===========\n      Task " + item.title + " inserted in the list\n    ");
        return this.arrayOfItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.arrayOfItems.forEach(function (item) {
            console.log(item.title, item.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (item) {
        var i = this.arrayOfItems.indexOf(item);
        if (i != -1) {
            this.arrayOfItems.splice(i, 1);
        }
        return this.arrayOfItems.length;
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task', false, new Date());
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date());
var task3 = new TodoItem('Finish this iteration 1!! 🤓', false, new Date());
var task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date());
var task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date());
var myTodos = new TodoList([]);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
console.log(myTodos.arrayOfItems);
