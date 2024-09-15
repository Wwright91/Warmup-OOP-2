class Pokemon {
  constructor(name, level = 1, move) {
    this.name = name;
    this.level = level;
    this.move = "Scratch";
    this.stage = 1;
  }

  levelUp(levelUp = 1) {
    this.level += levelUp;
    this.updateInfo();
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }

  updateInfo() {
    if(this.level > 0 && this.level < 16) {
      this.move = "Scratch";
      this.stage = 1;
      this.name = "Bulbasaur";
    } else if(this.level > 15 && this.level < 36) {
      this.move = "Vine Whip";
      this.stage = 2;
      this.name = "Ivysaur";
    } else if(this.level > 35) {
      this.move = "Razor Leaf";
      this.stage = 3;
      this.name = "Venusaur";
    } 
  }
  attack() {
    console.log(`${this.name} used ${this.move}!`);
  }
}

