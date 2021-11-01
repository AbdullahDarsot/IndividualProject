//first commit

class Fish {
    constructor(name, strength, speed) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.tail = true;
    }
}

const Tunna = new Fish ('Tunna', 7, 9)
const Shark = new Fish ('Shark', 10, 8)

class Ocean {
    constructor(name, color, FishLevel) {
        this.name = name;
        this.color = color;
        this.FishLevel = FishLevel;
    }
}

const Pacific = new Ocean('Pacific', 'Blue', 8)
const Antartic = new Ocean('Antartic', 'Blue / Grey', 6)

class FisherMan {
    constructor(name, age, gender, strength) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.strength = strength;
    }
}

const Mark = new FisherMan('Mark', 35, 'Male', 7)
const Jenny = new FisherMan('Jenny', 25, 'Female', 7)

console.log()