const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    listCustomer,
    removeCustomer
} = require('./index');


//customer questions
const questions = [
    {
        type: 'input',
        name : 'firstname',
        message : 'Customer first name'
    },
    {
        type: 'input',
        name : 'lastname',
        message : 'Customer last name'
    },
    {
        type: 'input',
        name : 'phone',
        message : 'Customer Phone no.'
    },
    {
        type: 'input',
        name : 'email',
        message : 'Customer email'
    }
];


program 
    .version('1.0.0')
    .description('Client Management System')


// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname,lastname,phone,email) => {
//         addCustomer({firstname,lastname,phone,email});
//     });

program 
.command('add')
.alias('a')
.description('Add a customer')
.action(() => {
    prompt(questions).then(answers => addCustomer(answers));
});

program
.command('find <firstname>')
.alias('f')
.description('Find a customer')
.action(name => findCustomer(name));

program
.command('update <_id>')
.alias('u')
.description('update a customer')
.action(_id => {
    prompt(questions).then(answers => updateCustomer(_id,answers));
});



program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => removeCustomer(_id));

program
    .command('list')
    .alias('l')
    .description('List customer')
    .action(()=> listCustomer());

program.parse(process.argv);

