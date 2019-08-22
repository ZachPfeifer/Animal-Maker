import AnimalController from "./Controllers/AnimalController.js";


class App {
    constructor() {
        console.log('Main checking-in')
        this.controllers = {
            animalController: new AnimalController()
        }
    }
}

window['app'] = new App()