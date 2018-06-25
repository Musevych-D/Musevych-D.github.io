//1. If first > second calculate, otherwise break
//2. Add ** to actions
//3. Add a confirm after calculation, if yes, start again (do it with if block (wtf?!))
var a1;
var a2;
var result;
var action;
var retry;

function validInput(inputFirst, inputSecond){
	if(inputFirst>inputSecond) return true;
}

function validAction(inputAction){
	if(inputAction == '+' || inputAction == 'sum' || inputAction == 'add' || 
		inputAction == '-' || inputAction == 'subtrack' || 
		inputAction == '*' || inputAction == 'multiply' || 
		inputAction == '/' || inputAction == 'devide' || 
		inputAction == '**' || inputAction == 'elevate'
		){
		return true;
	}else{
		alert('Invaid action');
	}
}


do{
	alert("First number shuld be bigger than the second, otherwise conditions won't be met");
	a1 = +prompt('Insert number 1');
	action = prompt('What to do?(+,-,*,/,**)');
	a2 = +prompt('Insert number 2');
	if(validInput(a1, a2) && validAction(action)){
		if(action == '+' || action == 'sum' || action == 'add'){
			result = a1 + a2;
		}else if(action == '-' || action == 'subtrack'){
			result = a1 - a2;
		}else if(action == '*' || action == 'multiply'){
			result = a1 * a2;
		}else if(action == '/' || action == 'devide'){
			result = a1 / a2;
		}else if(action == '**' || action == 'elevate'){
			result = a1 ** a2;
		}
		alert(result);
	}else{
		alert('Conditions not met')
	}
	result == undefined;
	retry = confirm('Retry')
}while(retry);
