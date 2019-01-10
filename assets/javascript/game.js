//   ----------Variables for the game-----------------------------

var currentWord;

var numberOfGuessesRemaining;

var lettersAlreadyGuessed;

var wins=0;

var losses=0;

var arr=["trumpet", "saxaphone", "guitar", "drums", "microphone","Tenderly", "Stormy Weather", "Ella Fitzgerald", "Louis Armstrong", "New Orleans", "New York City", "Chet Baker", "Miles Davis", "Benny Goodman", "Count Basie", "Paris", "La Vie En Rose", "Summertime", "Cheek to Cheek","St.Louis", "piano", "Unforgettable", "Scat", "Stardust"]


// This will randomly select a word after the game is over
var currentWord = arr[Math.floor(Math.random()*arr.length)]
console.log(currentWord) 

// This will split up the word in our function called wordtoUnderscores
var chosenWord = currentWord.split("")
console.log(chosenWord)

var wordCompare = currentWord.split("")

wordtoUnderscores()

// ---------------Functions for the game------------------------

//  key presses

document.onkeyup= function(keypress){
	console.log(keypress.key)
	console.log(currentWord)
	var letter = keypress.key
	for (var x=0; x<wordCompare.length; x++){
		if (letter===wordCompare[x]){
			chosenWord[x]= letter
			
			console.log(chosenWord)
		}
		document.getElementById('wordGuessed').innerHTML = chosenWord.join(' ');
	}

}


// This is the function that will create an array out of the chosenWord
 function wordtoUnderscores(){
 	for ( var k=0; k<chosenWord.length; k++){
 		chosenWord[k]="_";

 	}
 	// wordUnderscores = chosenWord.join(' ');

 		document.getElementById('wordGuessed').innerHTML = chosenWord.join(' ');
 		
 }

 document.getElementById('wins').innerHTML = wins;
 document.getElementById('losses').innerHTML = losses;




