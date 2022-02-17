class Person {
    constructor(name, surname, password) {
        this.firstName = name;
        this.lastName = surname;
        this.password = password;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

var person = new Person("Kamil", "Guliyev", 1234);

document.getElementById("human").innerHTML = person.fullName().toUpperCase();