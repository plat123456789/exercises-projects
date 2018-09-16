class Monster {
    constructor(health,name){
        this.health = health;
        this.name = name;
    }
    wounded(num){
        if(this.health===0){
            console.log('monster dead');
        }
        return this.health-num
    }
}

var monster1 = new Monster(100, "monster1");
