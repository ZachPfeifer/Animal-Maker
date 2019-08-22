import AnimalController from "./Controllers/AnimalController.js";


class App {
    constructor() {
        this.controllers = {
            animalController: new AnimalController()
        }
    }
}

window['app'] = new App()