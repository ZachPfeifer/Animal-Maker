export default class Animal {
    constructor(data) {
        this.name = data.name
        this.head = data.head || null
        this.eyes = data.eyes || "Pirate Patches"
        this.body = data.body || null
        this.tail = data.tail || "Bruh wheres the tail"
        this.legs = data.legs || [] //just like toppings
        this.imgUrl = data.imgUrl || null //FIXME comeback for default image
        this.price = data.price || "Bet your buttom dollar $$"
    }

    //FIXME  Comback for Legs Template
    get Template() {
        let template = `
        <div class="col-4">
        <h1>Name: ${this.name}</h1>
        <h3>Head: ${this.head}</h3>
        <h4>Eyes: ${this.eyes}</h4>
        <h3>Body: ${this.body}</h3>
        <h3>Tail: ${this.tail}</h3>
        
        
        <h4>Legs: ${this.legs}</h4>

        <img src="${this.imgUrl}" alt="Bestie" class="image-thumbnail">
        <h3>Price: ${this.price}</h3>
                        `
        return template







    }
}