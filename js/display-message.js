var showInfoMessages = function(){
	var messages = document.querySelectorAll(".info");

	var i = 0;
	while(i < messages.length){
		messages[i].setAttribute("class", "info");
		i = i + 1;
	}
};

var showInfoMessagesButton = document.getElementById("showInfoMessages");
showInfoMessagesButton.addEventListener("click", showInfoMessages);


//練習問題3－2
var showWarningMessages = function(){
	var messages = document.querySelectorAll(".warning");

	var i = 0;
	while(i < messages.length){
		messages[i].setAttribute("class", "warning");
		i = i + 1;
	}
};

var showWarningMessagesButton = document.getElementById("showWarningMessages");
showWarningMessagesButton.addEventListener("click", showWarningMessages);


//練習問題3-3
var showErrorMessages = function(){
	var messages = document.querySelectorAll(".error");

	var i = 0;
	while(i < messages.length){
		messages[i].setAttribute("class", "error");
		i = i + 1;
	}
};

var showErrorMessagesButton = document.getElementById("showErrorMessages");
showErrorMessagesButton.addEventListener("click", showErrorMessages);
