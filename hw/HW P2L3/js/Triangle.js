function validInput(userInput){
	if(!isNaN(userInput) && userInput != 0 && userInput > 1) return true;
	return false;
}


function createArray(arrayLength, subArrayLength){
	var arr = new Array(arrayLength);
	for (var i = 0; i < arr.length; i++){
		arr[i] = new Array(subArrayLength)
		for(var j = 0; j < subArrayLength; j++){
			arr[i][j] = fillSymbol;
		}
	}
}


function renderArray(){
	for(i = 0; i < arr.length; i++){
		document.write(arr[i][j]);
	}
	document.write('<br>');
}









const SPACE = '&nbsp;&nbsp;'
const fillSymbol = '0';





var triangleType = prompt('Start to end (1), End to start (2), End to middle, middle to end (3), RIGHT SIDE: End to start (4), Start to end (5)')




switch(triangleType){
	case '1':
		//Triangle from start to end
		var triangleLength = +prompt('Insert array length (quantity of strings)')
		var arr = new Array(triangleLength);
		for(var i = 0; i < arr.length; i++){
			arr[i] = new Array(i+1);
			for(var j = 0; j != i+1; j++){
				arr[i][j] = fillSymbol;
				document.write(arr[i][j]);
			}
			document.write('<br>');
		}
		break;

	case '2':
		//Triangle from end to start
		var triangleLength = +prompt('Insert array length (quantity of strings)')
		var arr = new Array(triangleLength);
		for(var i = 0; i < arr.length; i++){
			arr[i] = new Array(i+1);
			for(var j = 0; j < arr.length - i; j++){
				arr[i][j] = j;
				document.write(arr[i][j]);
				if(j == arr.length - i){
					break;
				}
			}
			document.write('<br>');
		}
		break;

	case '3':
		//Triangle from top to middle, then from middle to end LEFT SIDE
		var triangleLength = +prompt('Insert an odd number bigger than 1, if it would be even one, result would be your number + 1')
		var arr = new Array(triangleLength);
		if(validInput){
			for(var i = 0; i < arr.length; i++){
				arr[i] = new Array(i+1);
				for(var j = 0; j < arr.length; j++){
					arr[i][j] = fillSymbol;
					document.write(arr[i][j]);
					if(j == i || j == arr.length - i -1){
						break;
					}
				}
				document.write('<br>');
			}
		break;
	}
	case '4':
	//Triangle from end to start RIGHT SIDE
		var triangleLength = +prompt('Insert array length (quantity of strings)');
		var arr = new Array(triangleLength);
		for(var i = 0; i < arr.length; i++){
			arr[i] = new Array(arr.length);
			for(var j = 0; j < arr.length; j++){
				if(j < i){
					arr[i][j] = SPACE;
					document.write(arr[i][j]);
					continue;
				}
				arr[i][j] = fillSymbol;
				document.write(arr[i][j]);
			}
			document.write('<br>');
		}
		break;
	case '5':
	//Triangle from start to end RIGHT SIDE
		var triangleLength = +prompt('Insert array length (quantity of strings)');
		var arr = new Array(triangleLength);
		for(var i = 0; i < arr.length; i++){
			arr[i] = new Array(arr.length);
			for(var j = 0; j < arr.length; j++){
				if(j < arr.length-i-1){
					arr[i][j] = SPACE;
					document.write(arr[i][j]);
					continue;
				}
				arr[i][j] = fillSymbol;
				document.write(arr[i][j]);
			}
			document.write('<br>');
		}
		break;
	case '6':
		var triangleLength = +prompt('Insert an odd number bigger than 1, if it would be even one, result would be your number + 1')
		var arr = new Array(triangleLength);
		if(validInput){
			for(var i = 0; i < arr.length; i++){
				arr[i] = new Array(triangleLength);
				for(var j = 0; j < arr.length; j++){
					if(i < arr.length/2 + 0.5){
						if(j < arr.length/2 + 0.5){
							if(j < i){
								arr[i][j] = SPACE;	
							}else{
								arr[i][j] = fillSymbol;
							}
						}else{
							if(j > arr.length - i -1){
								arr[i][j] = SPACE;
							}else{
								arr[i][j] = fillSymbol;
							}
						}		
					}else{
						arr[i][j] = SPACE;
					}									
					document.write(arr[i][j]);
				}
				document.write('<br>');
			}
				
		}
		break;

	case '7':
		var triangleLength = +prompt('Input arr.length')
		var arr = new Array(triangleLength);
		if(validInput){
			for(var i = 0; i < arr.length; i++){
				arr[i] = new Array(arr.length*2);
				for(var j = 0; j < arr[i].length; j++){
						if(j <= arr[i].length/2){
							j < i ? arr[i][j] = SPACE : arr[i][j] = fillSymbol;
						}else{
							j > (arr[i].length - i -1) ? arr[i][j] = SPACE : arr[i][j] = fillSymbol;
						}
				document.write(arr[i][j]);
				}					
			document.write('<br>');	
			}
		}
		break;






	default: 
		alert('Default case');
}






