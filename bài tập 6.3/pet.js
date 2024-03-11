
class Pet {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    introduce() {
        console.log(`Tôi là ${this.name}.`);
    }

    talk() {
        console.log(this.sound);
    }
}


class Dog extends Pet {
    constructor(name, sound, animalType) {
        super(name, sound);
        this.animalType = animalType;
    }


    showType() {
        console.log(`Tôi là ${this.animalType}.`);
    }
}


const myDog = new Dog("Corgi", "Gâu gâu", "Chó");

myDog.introduce();

myDog.talk();

myDog.showType();
