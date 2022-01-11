//Build Ninja Class with attributes name, health >>> add speed and strength properties with default value of 3
class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.ninjaName = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Name: ${this.ninjaName}`);
    }

    showStats() {
        console.log(`Name: ${this.ninjaName}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        console.log(`${this.ninjaName} drank sake and recovered 10 hp!`)
        this.health += 10;
    }
}


// Classes are a blueprint >>> create instance of an obj
// ninja1 is a new instance of object with name Kakashi Hatake and health of 100
const ninja1 = new Ninja("Kakashi Hatake", 100)


// Testing Ninja Class and Methods with Console
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);

