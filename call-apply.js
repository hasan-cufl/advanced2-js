
const normalPerson = {
    firstName: "Kamal",
    lastName: "Sarkar",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this); // this console.log only for example.
        this.salary = this.salary - amount - tips - tax;
        return this.salary; // this return does not works here.
    }
}

const heroPerson = {
    firstName: "Hero",
    lastName: "Jamal",
    salary: 25000
}

const friendlyPerson = {
    firstName: "Friendly",
    lastName: "Rashid",
    salary: 35000
}


// example of "call". First argument is value of "this". Other parameters are separated by comma','.
normalPerson.chargeBill.call(heroPerson, 5000, 500, 50);
console.log(heroPerson.salary);
// similarly
normalPerson.chargeBill.call(friendlyPerson, 6000, 600, 60);
console.log(friendlyPerson.salary);



// example of "apply". First argument is value of "this" and other parameters  should be passed in an array[].
normalPerson.chargeBill.apply(heroPerson, [2000, 200, 20]);
console.log(heroPerson.salary);

// similarly
normalPerson.chargeBill.apply(friendlyPerson, [4000, 400, 40]);
console.log(friendlyPerson.salary);