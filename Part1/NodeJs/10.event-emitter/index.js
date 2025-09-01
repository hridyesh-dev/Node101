const EventEmitter=require('events')
const myFirstEmitter=new EventEmitter();

//register a listener 
myFirstEmitter.on("greet",(name)=>{
    console.log(`HI ${name}`);
})

myFirstEmitter.emit('greet',"HRIDYESH")

