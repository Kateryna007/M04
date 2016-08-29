(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", 	"Frank", "Larry", "Paula", "Laura", "Jim"];
	//	var speakWord = "Hello ";
	//	helloSpeaker.speak = function () {}
for (var i = 0; i < names.length; i++){
	 var firstLetter = names[i].charAt(0).toLowerCase();
 if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {(firstLetter != 'j') 
    helloSpeaker.speak(names[i]);
  }
}

})(); 



