#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
console.log(chalk.greenBright.bold("\t <=====================================================>"));
console.log(chalk.redBright.bold("\t \t <=====> Welcome to the Program ! <=====>"));
console.log(chalk.greenBright.bold("\t <=====================================================>"));
const persons = new Person();
let oop = async (persons) => {
    do {
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Whom would you like to interact with?",
                choices: ["Staff", "Student", "Exit"]
            }
        ]);
        if (ans.select === "Staff") {
            console.log(chalk.cyanBright.bold("You approach the staff room. Please feel free to ask any question."));
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "Enter the student's name you wish to engage with:"
                }
            ]);
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.blueBright.bold(`Hello I am ${name.name}. Nice to meet you !`));
                console.log(chalk.blueBright.bold("New Student added"));
                console.log(chalk.blueBright.bold("Current Student List ------>:"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.blueBright.bold(`Hello I am ${student.name}. Nice to meet you again !`));
                console.log(chalk.blueBright.bold("Existing Student List ------>:"));
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log(chalk.redBright.bold("Exiting the Program....."));
            process.exit();
        }
    } while (true);
};
oop(persons);
