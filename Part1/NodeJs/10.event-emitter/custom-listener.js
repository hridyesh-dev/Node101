const EventEmitter=require("events");
class MyCustomEmitter extends EventEmitter{
    constructor(){
        super()
        this.greeting="Hello"
    }
    greet(name){
        this.emit("greeting",`${this.greeting},${name}`)
    }
}
const customEvent=new MyCustomEmitter()
customEvent.on('greeting',(input)=>{
    console.log(`Greeting Event `,input);
})

customEvent.greet("Hridyesh")