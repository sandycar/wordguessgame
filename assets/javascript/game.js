//   ----------Variables for the game-----------------------------

var currentWord;

var numberOfGuessesRemaining;

var lettersAlreadyGuessed;

var wins=0;

var losses=0;

var arr=["trumpet", "saxaphone", "guitar", "drums", "microphone","tenderly", "stormyweather", "ella", "fitzgerald", "louis", "armstrong", "neworleans", "newyorkcity", "chet", "baker", "miles", "davis", "benny",  "goodman", "count", "basie", "paris", "summertime","st.louis", "piano", "unforgettable", "scat", "stardust"]


// This will randomly select a word after the game is over
var currentWord 


// This will split up the word in our function called wordtoUnderscores


var wordCompare 

setUnderscores()
display()
// ---------------Functions for the game------------------------

//  key presses

document.onkeyup= function(keypress){
	var wasCorrect= false
	console.log(keypress.key)
	console.log(currentWord)
	var letter = keypress.key
	for (var x=0; x<wordCompare.length; x++){
		if (letter===wordCompare[x]){
			chosenWord[x]= letter
			wasCorrect=true
			console.log(chosenWord)
		}
		
	}
	if (!chosenWord.includes('_')){
		wins++
		setUnderscores()
 	}

 	if (!wasCorrect){
 		lettersAlreadyGuessed.push(letter)
 		numberOfGuessesRemaining--

 	}
 	if (numberOfGuessesRemaining<1){
 		losses++
		setUnderscores()

 	}


display()
}


// This is the function that will create an array out of the chosenWord
 function setUnderscores(){
 	currentWord = arr[Math.floor(Math.random()*arr.length)]
 	console.log(currentWord) 
 	chosenWord = currentWord.split("")
	console.log(chosenWord)
	wordCompare = currentWord.split("")
 	for ( var k=0; k<chosenWord.length; k++){
 		chosenWord[k]="_";
 		
	// document.getElementById('wins').innerHTML

 	}
 	numberOfGuessesRemaining = 10
 	lettersAlreadyGuessed=[]


 	
 	// wordUnderscores = chosenWord.join(' ');

 		
 }


 function display(){

 	document.getElementById('wordGuessed').innerHTML = chosenWord.join(' ');
 	document.getElementById('wins').innerHTML = wins;
 	document.getElementById('losses').innerHTML = losses;
 	document.getElementById('guesses').innerHTML = numberOfGuessesRemaining;
 	document.getElementById('letters').innerHTML = lettersAlreadyGuessed.join(' ');

 }

 
 

// Functions for wins and losses tracker






