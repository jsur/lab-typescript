var arrayOfStrings = [];
function addTask(task) {
    arrayOfStrings.push(task);
    console.log("\n    =========== NEW TASK ===========\n    Task " + task + " inserted in the list\n    Number of items: " + arrayOfStrings.length + "\n  ");
}
function listAllTasks(array) {
    array.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var i = arrayOfStrings.indexOf(task);
    if (i != -1) {
        arrayOfStrings.splice(i, 1);
    }
    return arrayOfStrings.length;
}
addTask('This is our first task');
addTask('Eat pizza 🍕 yummy!!!');
addTask('Finish this iteration 1!! 🤓');
addTask('Finish this iteration 2!! 🤓');
addTask('Finish this iteration 3!! 🤓');
listAllTasks(arrayOfStrings);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(arrayOfStrings);
