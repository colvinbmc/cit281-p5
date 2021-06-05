module.exports = class Monster {
    constructor(monster){
    monsterName = "Unknown",
    minimumLife = 0;
    currentLife = 100;
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive(currentLife >= minimumLife ? "Alive" : "Dead");
}
updateLife(lifeChangeAmount) {
    this.currentLife = currentLife + lifeChangeAmount;
    this.currentLife(currentLife < 0 ? 0: currentLife);
    this.isAlive(this.currentLife < minimumLife ? true: false);
}
randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
    maximumLifeDrain = maximumLifeDrain + 1;
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    this.updateLife(getRandomInteger(minimumLifeDrain, maximumLifeDrain))
}
};