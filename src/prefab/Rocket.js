// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);

        //create a custom property for the rocket
        this.isFiring = false;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        if (!this.isFiring) {
            if (keyLEFT.isDown && this.x >= 47) {
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 578) {
                this.x += 2;
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.sfxRocket.play();
            this.isFiring = true;
        }
        
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }

        if (this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = 431;
    }

}