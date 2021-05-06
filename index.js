const mongoose = require('mongoose');

// map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Customer = require('./models/customer');

//add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        db.close();
})
};



//find customer
const findCustomer = (name) => {
    //make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search }, {lastname: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        db.close();
    });
}

//update Customer
const updateCustomer = (_id, customer) => {
    Customer.update({_id}, customer)
    .then(customer => {
        console.info('Customer updated');
        db.close();
    });
}

//remove Customer
const removeCustomer = (_id) => {
    Customer.remove({_id})
    .then(customer => {
        console.info('Customer removed');
        db.close();
    });
}

//list customers
const listCustomer = () => {
    Customer.find()
    .then(customers => {
        console.info(customers);
        console.info(`${customers.length} customers`);
        db.close();
    });
}


//export 
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer

}

