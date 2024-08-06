const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter logo text',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color',
    },
    {
        type: 'choice',
        name: 'shape',
        message: 'Please choose a shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Please choose a color of your shape",
    },
];

inquirer.prompt(questions).then(answers => {
    let shape;
    console.log(answers)
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }
    shape.setColor(answers.shapeColor);
    const svgContent = `
            <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()};
            <text x="200" y="125" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
            </svg>
            `;

    fs.writeFile('logo.svg', svgContent);
    console.log('Logo Generated');
});



