class Sportsman {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
};

class Swimmer extends Sportsman {
    constructor(name, swim) {
        super(name);
        this.swimStyle = swim;
    }

    swim() {
        console.log(`${this.name} is swimming ${this.swim}`);
    }
};

const user = new Sportsman('John');
const user1 = new Swimmer('John');
user.run();
user1.swim();