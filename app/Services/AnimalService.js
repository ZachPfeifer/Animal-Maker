import Animal from "../models/Animal.js";

//Private
let _state = {
    animals: [
        new Animal({
            name: 'Liger',
            head: 'Lion',
            eyes: 'Lion',
            body: 'Tiger',
            tail: 'Mace',
            legs: ['Tiger', 'Tiger', 'Tiger', 'Tiger'],
            imgUrl: "https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2018/04/18092110/liger.png",
            price: 10000000,
        })]
}


//Public
export default class AnimalService {
    constructor() {
        console.log('Service Checking in')
    }
    //FIXME Need More Functions (Delete & Add / Save & Load)













    get Animal() {
        return _state.animals.map(animal => new Animal(animal))
    }

}
