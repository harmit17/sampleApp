/*
In VS Code: Create an arrow function that takes two arguments (firstName and lastName) and 
returns the full name. Test the function. You may do this in the Week1 project, to avoid 
creating a new project.
*/

//const concatenateStrings = (firstName, lastName) => console.log('My name is ' + firstName + ' '+lastName);

const concatenateStrings = (firstName, lastName) => {

    let concatenatedString = firstName.concat(" ",lastName);
    return concatenatedString;
}

let result = concatenateStrings("Harmit", "Chauhan");
console.log("My name is " + result)