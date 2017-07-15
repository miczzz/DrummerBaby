    var client = new Paho.MQTT.Client("diginet.mt.haw-hamburg.de", Number(8000), "/mqtt", "myclientid_" + parseInt(Math.random() * 100, 10));
 
    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    //client.onMessageArrived = onMessageArrived;
	 

    var options = {
	    timeout: 3,
            useSSL: false,
            userName: "haw",
            password: "schuh+-0",
            cleanSession: true,
			keepAliveInterval: 300,
            onSuccess:onConnect,
			onFailure:doFail
          }

    //client.connect({onSuccess:onConnect});
    //client.connect(options);

function myConnect(options) {
	client.connect(options);
}
    // called when the client connects
    function onConnect() {
      // Once a connection has been made, make a subscription and send a       message.
	  //alert("Connected!");
	  client.subscribe("itsdrummerbaby");
      console.log("onConnect");

    }

    function doFail(){
        console.log("dofail");
		alert("failure");
    }
    // called when the client loses its connection
    function onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
		alert("Timeout - disconnected. Please reload.");
      }
    }

    // called when a message arrives
    client.onMessageArrived = function (message) {
	  //alert('message incoming');
      console.log("onMessageArrived:"+message.payloadString);
      var msg = message.payloadString;
	  //alert(msg);
	  if(msg === "disconnect"){
		client.disconnect();
		alert("Disconnected");
	  }
    }
	
	 var publish = function (payload, topic, qos) {
     //Send your message (also possible to serialize it as JSON or protobuf or just use a string, no limitations)
     var message = new Paho.MQTT.Message(payload);
     message.destinationName = topic;
     message.qos = qos;
     client.send(message);
 }
 
 var playKick = function(){
	publish('1','itsdrummerbaby/kick',2);
 }
 var playTom1 = function(){
	publish('1','itsdrummerbaby/tom1',2);
 }
 var playTom2 = function(){
	publish('1','itsdrummerbaby/tom2',2);
 }
 var playSnare = function(){
	publish('1','itsdrummerbaby/snare',2);
 }
 var playBecken = function(){
	publish('1','itsdrummerbaby/becken',2);
 }
 var playHihat = function(){
	publish('1','itsdrummerbaby/hihat',2);
 }
 
 

 
