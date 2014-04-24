var input = document.querySelector("#input");
var output = document.querySelector("#output");
var registerMessageButton = document.querySelector("#registerMessage");
var clerMessageButton = document.querySelector("#clearMessage");

var registerMessage = function(){
	var message = document.createElement("li");
	message.textContent = input.value;

	output.appendChild(message);
};

var clearMessage = function(){
	while(output.firstChild){
output.removeChild(output.firstChild);
}
}

registerMessageButton.addEventListener("click",registerMessage);
clerMessageButton.addEventListener("click",clearMessage);