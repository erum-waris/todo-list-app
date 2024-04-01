#! /usr/bin/env node
import inquirer from "inquirer";
console.log("****WELCOME TO MY TODO APP****");
let todos = [];
let loop = true;
while (loop) {
    const addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you wanna add in your todo_list?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Are you sure to add item in your todo_list?",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    console.log(todos);
}
// //  conditions addition if else statement
// const  {todo , addmore }= addTask ;
// loop = addmore;
// if(todo)
// {
// todos.push(todo);
// console.log("let's proceed")
// }else{
//   console.log("Please add something to make your todo list.")
// }
