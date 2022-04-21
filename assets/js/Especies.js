import Animal from './Animal.js';

let animalAudio = document.getElementById("player");

export class Leon extends Animal {
    constructor(...args) {
        super(...args)
    }
    Rugir() {
        animalAudio.setAttribute('src', `./assets/sounds/${this.getSonidos()}`);
        animalAudio.play();
    }
}

export class Lobo extends Animal {
    constructor(...args) {
        super(...args)
    }
    Aullar() {
        animalAudio.setAttribute('src', `./assets/sounds/${this.getSonidos()}`);
        animalAudio.play();
    }
}

export class Oso extends Animal {
    constructor(...args) {
        super(...args)
    }
    Gruñir() {
        animalAudio.setAttribute('src', `./assets/sounds/${this.getSonidos()}`);
        animalAudio.play();
    }
}

export class Serpiente extends Animal {
    constructor(...args) {
        super(...args)
    }
    Sisear() {
        animalAudio.setAttribute('src', `./assets/sounds/${this.getSonidos()}`);
        animalAudio.play();
    }
}

export class Aguila extends Animal {
    constructor(...args) {
        super(...args)
    }
    Chillar() {
        animalAudio.setAttribute('src', `./assets/sounds/${this.getSonidos()}`);
        animalAudio.play();
    }
}