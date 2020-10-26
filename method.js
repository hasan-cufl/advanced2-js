
// object method property review
const normalPerson = {
    firstName: "Kamal",
    lastName: "Sarkar",
    salary: 15000,
    getFullName: function(){ //This type of function called "method".(Function inside object)
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);