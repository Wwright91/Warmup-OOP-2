// class solution

class Pokemon {
  constructor(name, level = 1, stage = 1) {
    this.name = name;
    this.level = level;
    this.moves = ["Water Gun"];
    this.stage = stage;
  }

  levelUp(level = 1) {
    this.level += level;
    this.updateMoveAndStage();
    console.log(
      `${this.name} leveled up to ${this.level}. ${this.name} is in Stage ${this.stage}!`
    );
  }

  updateMoveAndStage() {
    if (this.level >= 36) {
      this.moves = ["Water Gun", "Bubble Beam", "Hydro Pump"];
      this.stage = 3;
      this.name = "Blastoise";
    } else if (this.level >= 16) {
      this.moves = ["Water Gun", "Bubble Beam"];
      this.stage = 2;
      this.name = "Wartortle";
    }
  }

  attack() {
    console.log(
      `${this.name} used ${
        this.moves[Math.floor(Math.random() * this.moves.length)]
      }!`
    );
  }
}

const myPokemon = new Pokemon("Squirtle");
console.log(myPokemon);
myPokemon.levelUp(36);
console.log(myPokemon);
myPokemon.attack();

console.log("---------------------------------");

// my solution

class PokemonV2 {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.moves = ["Scratch"];
    this.stage = 1;
  }

  levelUp(level = 1) {
    this.level += level;

    if (this.level >= 16) {
      this.stage = 2;
      this.name = "Charmeleon";
      if (!this.moves.includes("Flame Thrower")) {
        this.moves.push("Flame Thrower");
      }
    }
    if (this.level >= 36) {
      this.stage = 3;
      this.name = "Charizard";
      if (!this.moves.includes("Fire Spin")) {
        this.moves.push("Fire Spin");
      }
    }

    console.log(
      `${this.name} leveled up to level ${this.level}. ${this.name} is on Stage ${this.stage}!`
    );
  }

  attack() {
    console.log(
      `${this.name} used ${
        this.moves[Math.floor(Math.random() * this.moves.length)]
      }!`
    );
  }
}

const myPokemonV2 = new PokemonV2("Charmander");
console.log(myPokemonV2);
myPokemonV2.levelUp();
myPokemonV2.levelUp(16);
console.log(myPokemonV2);
myPokemonV2.attack();
myPokemonV2.levelUp(40);
console.log(myPokemonV2);
myPokemonV2.attack();
