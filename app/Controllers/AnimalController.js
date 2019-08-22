import AnimalService from "../Services/AnimalService.js";

//Private
let _animalService = new AnimalService()

//FIXME Draw() 
function _draw() {
    let template = ``
    let animals = _animalService.Animal
    animals.forEach((animal, index) => { template += animal.getTemplate(index) })
    document.querySelector('#animal').innerHTML = template
}

//Public
export default class AnimalController {
    constructor() {
        console.log('Controller checking-in')
    }
    //FIXME Functions for Adding/ Deleting Animal/Legs
    addAnimal(event) {
        event.preventDefault()
        let form = event.target
        let newAnimal = {
            name: form.name.value
            //NOTE may want to put more 
        }
        _animalService.addAnimal(newAnimal)
        _draw()
    }
    addLegs(event, legsIndex) {
        event.preventDefault()
        let form = event.target
        let newLegs = form.legs.value
        _animalService.addLegs(newLegs, legsIndex)
        _draw()
    }


}