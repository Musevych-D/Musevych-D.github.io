function validInput(userInput){
	if(!isNaN(userInput) && userInput != 0){
		return true;
	}else{
		alert('Invalid input');
		return false;
	}
}

function randomAnswer(min, max){
	var rand =  Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return rand;
}

function almostGuessed(userInput, correctAnswer, triesLeft){
	if(userInput == correctAnswer + 1 || userInput == correctAnswer - 1){
		alert("You've almost guessed, the answer is very close!");
		triesLeft = 1;
	}
}

function outOfTries(triesLeft){
	if(triesLeft == 0){
		retry = confirm('You are out of tries, want to start again at medium difficulty level?');
	}else{
		retry = confirm('Want to try again at medium difficulty level?');
	}
	return retry;
}


function numberGuessed(userInput, correctAnswer, triesStart, triesLeft){
	if(userInput == correctAnswer){
		if(triesStart == triesLeft){
			alert('Congratz, correct answer was ' + correctAnswer + ". You've won and it took you just 1 try!");
		}else{
			alert('Congratz, correct answer was ' + correctAnswer + ". You've won and it took you " + (triesStart - triesLeft + 1) + ' tries to finish!');
		}			
	}else{
		--triesLeft;
		alert('Bad luck, you have ' + triesLeft + ' tries left, try again!');
	}




}



/*var correctAnswer = randomAnswer(1,5);

do{
	var userInput = +prompt('Guess number from 1-5');
	if(validInput(userInput)){
		if(userInput == correctAnswer){
			alert('Congratulations, you\'ve guessed');
		}else{
			alert('Bad luck, try again!');
		}
	}
}while(userInput !== correctAnswer)*/



var level = prompt(' choose difficulty level from: easy, medium, hard');

switch(level){
	/*features:
		1. Input from prompt
		2. Input validation
		3. Random correct answer

	*/
	case 'easy':
		var min = 1
		var max = 5
		do{
			var correctAnswer = randomAnswer(min, max);
			console.log(correctAnswer);
			userInput = +prompt('Guess the number from ' + min + ' to ' + max);
			if(validInput(userInput)){		
				if(userInput == correctAnswer){
					alert('Congratz, correct answer was ' + correctAnswer + ". You've won!");
					break;
				}else{
					alert('Bad luck, try again!')
				}
			}
		}while(userInput !== correctAnswer);
		break;
	case 'medium':
	/*features:
		1. Input from prompt
		2. Input validation
		3. Random correct answer

		4. Limited quantity of tries
		5. Retry option with confirm
		6. Counter for left tries
		
	*/

		var retry = true;
		var triesStart = triesLeft = 5;	
		var min = 1
		var max = 20
		while(retry){
			if(retry){
				triesLeft = triesStart;
				var correctAnswer = randomAnswer(min, max);
			}
			do{
				console.log(correctAnswer);
				userInput = +prompt('Guess the number from ' + min + ' to ' + max + ', you have ' + triesLeft + ' tries to do so. Luck.');
				if(validInput(userInput)){		
					numberGuessed(userInput, correctAnswer, triesStart, triesLeft);
				}
			}while(userInput !== correctAnswer && triesLeft > 0);
			outOfTries(triesLeft);
		}
		break;
	case 'hard':
		var retry = true;
		var triesStart = triesLeft = 1;	
		var min = 1
		var max = 10
		while(retry){
			if(retry){
				triesLeft = triesStart;
				
			}
			do{
				var correctAnswer = randomAnswer(min, max);
				console.log(correctAnswer);
				userInput = +prompt('Guess the number from ' + min + ' to ' + max + ', you have ' + triesLeft + ' tries to do so. Luck.');
				if(validInput(userInput)){
					almostGuessed(userInput, correctAnswer, triesLeft);
					numberGuessed(userInput, correctAnswer, triesStart, triesLeft);
				}
			}while(userInput !== correctAnswer && triesLeft > 0);
			outOfTries(triesLeft);
		}
		break;














	default:
		alert('Default option');
}
	



