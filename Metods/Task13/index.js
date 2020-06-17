export class Sportsman {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
};

export class Swimmer extends Sportsman {
    constructor(name, swimStyle) {
        super(name);
        this.swimStyle = swimStyle;
    }

    swim() {
        console.log(`${this.name} is swimming ${this.swimStyle}`);
    }
};

const user = new Sportsman('John');
const user1 = new Swimmer('John');
user.run();
user1.swim();