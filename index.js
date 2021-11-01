//first commit

class Fish {
    constructor(name, strength, speed, age) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.age = age;
        this.tail = true;
    }
}

const Tunna = new Fish ('Tunna', 7, 9, 15)
const Shark = new Fish ('Shark', 10, 8, 20)

class Ocean {
    constructor(name, color, FishLevel, DangerLevel) {
        this.name = name;
        this.color = color;
        this.FishLevel = FishLevel;
        this.DangerLevel = DangerLevel;
    }
}

const Pacific = new Ocean('Pacific', 'Blue', 8, 9)
const Antartic = new Ocean('Antartic', 'Blue / Grey', 6, 10)

class FisherMan {
    constructor(name, age, gender, strength) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.strength = strength;
    }

    /*
    gym(){
        this.strength ++;
    }
    */
}

const Mark = new FisherMan('Mark', 35, 'Male', 7)
const Jenny = new FisherMan('Jenny', 25, 'Female', 7)

/*
function myFirstFunction (FisherManStrength) {
    if(FisherManStrength <5) {
        console.log('You Need to train')
    } else{
        console.log('Keep up the training')
    }
}

myFirstFunction(7)
*/
module.exports = {
    Fish,
        Tunna,
        Shark,
    Ocean,
        Pacific,
        Antartic,
    FisherMan,
        Mark,
        Jenny
}