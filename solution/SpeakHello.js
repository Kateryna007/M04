(function (window) {
var helloSpeaker = {};
//byeSpeaker.name =("Yaakov", "John", "Jen", "Jason", "Paul", 	"Frank", "Larry", "Paula", "Laura", "Jim");
var speakWord = "Hello ";
helloSpeaker.speak = function (name) {
	 console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
 })(window);
 
 
