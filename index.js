class Pokemon {
    constructor(name, level = 1) {
      this.name = name;
      this.level = level;
      this.moves = ["Scratch"];
      this.stage = 1;
      this.updateStageAndName();
    }
  
    levelUp(levels = 1) {
      this.level += levels;
      this.updateStageAndName();
      console.log(`${this.name} leveled up to level ${this.level}. ${this.name} is in Stage ${this.stage}!`);
    }
  
    updateStageAndName() {
      if (this.level >= 36) {
        this.stage = 3;
        this.name = "Charizard";
        this.moves = ["Scratch", "Flame Thrower", "Fire Spin"];
      } else if (this.level >= 16) {
        this.stage = 2;
        this.name = "Charmeleon";
        this.moves = ["Scratch", "Flame Thrower"];
      } else {
        this.stage = 1;
        this.name = "Charmander";
        this.moves = ["Scratch"];
      }
    }
  
    attack() {
      const randomMove = this.moves[Math.floor(Math.random() * this.moves.length)];
      console.log(`${this.name} used ${randomMove}!`);
    }
  }