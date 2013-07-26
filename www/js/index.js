function onLoad123(){
	bindEvent();
}
function bindEvent(){
	document.addEventListener("deviceready",onDeviceReady,true);
}
function onDeviceReady(){
	console.info("PhoneGap is ready");
	alert("PhoneGap is working");
	receivedEvent('deviceready');
}
function receivedEvent(id){
	var parentElement = document.getElementById(id);
	var listeningElement = parentElement.querySelector('.listening');
	var receivedElement = parentElement.querySelector('.received');
	listeningElement.setAttribute('style','display:none');
	receivedElement.setAttribute('style','display:block');

	console.log('Received Event: '+id);
}