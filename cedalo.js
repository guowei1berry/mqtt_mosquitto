const mqtt = require('mqtt');

const host ='localhost'//'mqtt://test.mosquitto.org'

const client = mqtt.connect('localhost');
const topic = 'topic/name';
const message = 'test message'; 

// const options = {
//     clientId: 'myclient',
//     Username: 'cedalo',
//     Password: '0dfTYEF90nAd9kNK8IEr'
// };
// const client = mqtt.connect('mqtt://test.mosquitto.org', options);

client.on('connect', () => {
    client.subscribe(topic);
    console.log("Connection established successfully!");


    // console.log(`Is client connected: ${client.connected}`);    
    // if (client.connected === true) {
    //     console.log(`message: ${message}, topic: ${topic}`); 
    //     // publish message        
    //     client.publish(topic, message);
    // }

    // subscribe to a topic
    // client.subscribe(topic);
});

client.on('message',(topic, message) => {
    console.log(`message: ${message}, topic: ${topic}`); 
});
// client.on('connect', () => {
//     console.log("Connection established successfully!");
//     console.log(`Is client connected: ${client.connected}`);    
//     if (client.connected === true) {
//         console.log(`message: ${message}, topic: ${topic}`); 
//         // publish message        
//         client.publish(topic, message);
//     }

//     // subscribe to a topic
//     client.subscribe(topic);
// });

// // receive a message from the subscribed topic
// client.on('message',(topic, message) => {
//     console.log(`message: ${message}, topic: ${topic}`); 
// });

// // error handling
// client.on('error',(error) => {
//     console.error(error);
//     process.exit(1);
// });