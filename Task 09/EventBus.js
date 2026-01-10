class EventBus {   //simple publish-subscribe system
    constructor(){ //store events and listeners
        this.events = {}; //key:event name , value:array of callback func 
    }
    subscribe(eventName, callback) { //eventname:name of the event, callback:function is execute when the event is published
          if(!this.events[eventName])   {
            this.events[eventName] = [];  //it the event is not exist,intiaize it with an empty array
          }
          this.events[eventName].push(callback); //add subscribers callback events array
    }

    publish(eventName, data) {  //eventName to trigger, data:information to send to subscribers
        if(!this.events[eventName]) return;   //it there are no  subscribers for event then do nothing
        this.events[eventName].forEach(callback => callback(data)); //call each subscribers callback ewith the data
    }
}

const bus = new EventBus();
bus.subscribe("orderPlaced",(order)=>{     //for kitchen listen for orders
    console.log("kitchen recieved order:", order)
;})

bus.subscribe("orderPlaced",(order)=>{
    console.log("Billing Created invoice for:", order);
})
bus.publish("orderPlaced", {id: 101, item:"Pizza" , Price:300});






 