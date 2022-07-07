class Ninja {
   constructor(name, health) {
      this._name = name;
      this._health = health;
      this._speed = 3;
      this._strength = 3;
   }

   sayName() {
      console.log(this._name)
   }

   showStats() {
      console.log(this._name + ' ' + this._speed + ' ' + this._strength + ' ' + this._health )
   }

   drinkSake() {
      this._health += 10;
   }
}

class Sensei extends Ninja {
   constructor(name) {
      super(name);
      this._health = 200;
      this._speed = 10;
      this._strength = 10;
      this._wisdom = 10;
   }

   speakWisdom() {
      super.drinkSake();
      console.log("Some words of wisdom belong here..");
   }
}

const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();
superSensei.showStats();
superSensei.sayName();