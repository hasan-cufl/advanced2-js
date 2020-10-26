class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person("Hero", "Jamal", 2000);
console.log(heroPerson);
const friendlyPerson = new Person("Hero", "Kamal", 25000);
console.log(friendlyPerson);


//  Old system for create class.
function Person2(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person2("Grand", "Papa", 1200);
console.log(oldPerson);