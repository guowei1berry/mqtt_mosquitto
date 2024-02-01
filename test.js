const mqtt = require("mqtt");
const client = mqtt.connect('mqtt://127.0.0.1')//'mqtt://rq5xljakksc0-38wa6r6p5tv1.cedalo.dev')//'mqtt://127.0.0.1')//"mqtt://test.mosquitto.org");

// const options = {
//     host: 'localhost'
//     // clientId: 'myclient',
//     // Username: 'cedalo',
//     // Password: '0dfTYEF90nAd9kNK8IEr'
// };
// const client = mqtt.connect("mqtt://test.mosquitto.org");

//client.publish(topic, message);
client.on("connect", () => {
  client.subscribe("topic/name", (err) => {
    if (!err) {
      client.publish("topic/name", "Hello mqtt");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
//   console.log(message.toString());
  console.log(`message: ${message}, topic: ${topic}`); 

//   client.end();
});