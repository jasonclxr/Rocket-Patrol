let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
}

let game = new Phaser.Game(config);

let keyF, keyLEFT, keyRIGHT;

game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000
}