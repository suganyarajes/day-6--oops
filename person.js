class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    toString() {
        return `Person[name=${this.name}, age=${this.age}, email=${this.email}]`;
    }
}

// Example usage
const person1 = new Person("ajay as", 25, "ajayas@example.com");
console.log(person1.toString());

// Update age and email
person1.setAge(26);
person1.setEmail("ajayaaas@example.com");
console.log(person1.toString());

//ouput:
//Person[name=ajay as, age=25, email=ajayas@example.com]
//Person[name=ajay as, age=26, email=ajayaaas@example.com]
