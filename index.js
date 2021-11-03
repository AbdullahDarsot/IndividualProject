//first commit

class Fish {
    constructor(name, strength, speed, age, agility) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.age = age;
        this.tail = true;
        this.agility = agility;
    }

    train(){
        this.speed +=10;
        this.strength-=10;
    }

    sleep(){
        this.strength +=5;
    }

    year(){
        this.age++;
    }

    train2(){
        this.agility+=3;
    }

}

const Tunna = new Fish ('Tunna', 7, 9, 15, 10)
const Shark = new Fish ('Shark', 10, 8, 20, 15)


class Ocean {
    constructor(name, color, FishLevel, DangerLevel, numberOfBoats) {
        this.name = name;
        this.color = color;
        this.FishLevel = FishLevel;
        this.DangerLevel = DangerLevel;
        this.numberOfBoats = numberOfBoats;
    }

    danger(){
        this.DangerLevel+=10;
    }

    weather(){
        this.color ='green';
    }

    spwan(){
        this.FishLevel +=5;
    }

    numberOfFish(){
        this.numberOfBoats+=5;
    }

}

const Pacific = new Ocean('Pacific', 'Blue', 8, 9, 15)
const Antartic = new Ocean('Antartic', 'Blue / Grey', 6, 10, 11)


class FisherMan {
    constructor(name, age, gender, strength, experience, numberOfCatches) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.strength = strength;
        this.experience = experience;
        this.numberOfCatches = numberOfCatches;
    }

    
    train(){
        this.strength ++;
    }


    practise(){
        this.experience ++;
    }

    fishTime(){
        this.numberOfCatches ++;
    }

    year(){
        this.age ++;
    }
   
}

const Mark = new FisherMan('Mark', 35, 'Male', 7, 5)
const Jenny = new FisherMan('Jenny', 25, 'Female', 7, 10)


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