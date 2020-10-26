
// Object use bind to borrow method from another object

const normalPerson = {
    firstName: "Kamal",
    lastName: "Sarkar",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this); // this console.log only for example.
        this.salary = this.salary - amount;
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


const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(5000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(3000);
console.log(friendlyPerson.salary);
