//tasks explaeined in commets below

//Task1
var task1 = 'I&am$the$Best$Front$end&developer$ever'
// create array from string - ['I', 'am', 'the', 'best', 'Front', 'end', 'developer', 'ever'];


var doneTask1, arrSplitted, strJoined;
arrSplitted = task1.split('&');
strJoined = arrSplitted.join('$');
doneTask1 = strJoined.split('$');

console.log('Task 1:')
console.log('Result of the task: ' + doneTask1);







var task2;
// using array from previous task , join method and document.write - render each item of array in h2 tag

function renderHeaderArray(someArray){
	var renderTag = 'h2'
	for(var i = 0; i < someArray.length; i++){
		document.write('<' + renderTag + '>' + someArray[i] + '</' + renderTag + '>');
	}
}
renderHeaderArray(doneTask1);




















//Task 3
/*
 create 4 different arrays which named Winter, Spring, Summer, Autumn whith using slice method; add those arrays in yearSeasons
 show year Seasons in console
create a prompt window, which asked month name and after get result give alert which Season of year is it
*/

//Optimized solution for any input array.
var months = [
				'December', 
				'January', 
				'February', 
				'March', 
				'April', 
				'May', 
				'June', 
				'July', 
				'August', 
				'September', 
				'October', 
				'November'
			];


var yearSeasons = [];
var winter = [];
var spring = [];
var summer = [];
var autumn = [];

function parseForSeasons(someArray){
		someArray.forEach( function(q,w,e) {
			switch(q){
				case 'December':
				case 'January':
				case 'February':
					winter.push(q);
					break;
				case 'March':
				case 'April':
				case 'May':
					spring.push(q);
					break;
				case 'June':
				case 'July':
				case 'August':
					summer.push(q);
					break;
				case 'September':
				case 'October':
				case 'November':
					autumn.push(q);
					break;
				default: ;
			};
});
		yearSeasons.push( winter, spring, summer, autumn );
		return yearSeasons;
}

 //forEach()//splice
parseForSeasons(months);

var seasonToDefine = prompt('Enter a month to define it\'s season');
var result = '';
yearSeasons.forEach( function(elem, counter, arr) {
	if(~elem.indexOf(seasonToDefine)){
		result = counter;
	}
})

var seasonName = '';
switch(result){
	case 0: seasonName = 'Winter'; break;
	case 1: seasonName = 'Spring'; break;
	case 2: seasonName = 'Summer'; break;
	case 3: seasonName = 'Autumn'; break;
	default: result = 'Such month is not found.'; var notDefined = 1;
}

notDefined != 1 ? result = seasonToDefine + ' defines as a part of ' + seasonName + ' season.' : false;

console.log('Task 3:')
console.log( 'Result of the subtask #1:');
console.log( 'New array contains all seasons:');
console.log( yearSeasons );

alert( result );
console.log( 'Result of the subtask #2: ' + result);



//Objects try, but can't get object name, thus it's useless.
/*
var yearSeasons = [];

var winter = {};
var spring = {};
var summer = {};
var autumn = {};
var season;


function defineSeason(index)


months.forEach(function(q,w,e){
	switch(q){
		case 'December':
		case 'January':
		case 'February':
			winter[q] = 'tempValue';
			break;
		case 'March':
		case 'April':
		case 'May':
			spring[q] = 'tempValue';
			break;
		case 'June':
		case 'July':
		case 'August':
			summer[q] = 'tempValue';
			break;
		case 'September':
		case 'October':
		case 'November':
			autumn[q] = 'tempValue';
			break;
		default: ;
	};
})


//Почему в консоль выводится Object вместо его названия??

console.log( winter );
console.log( spring );
console.log( summer );
console.log( autumn );


//Почему пуш одной строки выполняется в одно действие??
yearSeasons.push(winter, spring, summer, autumn);
console.log(yearSeasons);


var seasonToDefine = 'June'

//prompt('Enter a month to define it\'s season');
var result = '';
yearSeasons.forEach( function(elem, counter, arr){
	if( elem[seasonToDefine] ){
		result = counter;
	}
});
console.log( result );

*/






//Task4
var task4 = [1,2,3,4,5,6,7,8,9];
var task4Copy = [];
//create a copy of task4 array with using push/unshift method; 

task4.forEach( function(elem, i, task4){
	task4Copy.push(elem);
});

/*task4.forEach( function(elem, i, task4){
	task4Copy.unshift(elem);
});*/



console.log('Task 4:')
console.log('Result of the task: ' + task4Copy);











//Task5
var task5 = [2,22,654,652,578, 12354,1,2,6,5,4,344,665,225,1245,124];
var task5Filtered
//filter this array by using filter method'



//Due to nothing was specified as a condition, some random equation here
task5Filtered = task5.filter(function(param){
	return ( ( (param+16)**2 + +'' + parseFloat('8.289asdd431asd2afwf')  )*1/7 > Math.sqrt(184/19)*163 + +null  ) ? true : false;
});


console.log('Task 5:')
console.log('Result of the task: ' + task5Filtered);
















//Task6
/*
result1 = summ of all array items
result2 = copy of array taks 6, each element newElement = oldElement**2
result3 = create a function which get array as a first paramet and some number as a second.
*/

//each element from result3 array increased by value of second parametr of function and function returns new array which 
var task6 = [1,2,3,4,5,6,7,8,9];
var result1,result2,result3;

result1 = task6.reduce(function(sumOfAllElems, currentElem ){
	return sumOfAllElems += currentElem;
},0);

var result2 = task6.map(function(item, i, arr){
	return arr[i]**2;
})


function increaseArrayElemsValue(inputArray, increment){
	result3 = inputArray.map(function(elem, i, arr){
		return arr[i] + increment;
	});
}
var increaseBy = 1115;
increaseArrayElemsValue(task6, increaseBy);

console.log('Task 6:')
console.log('Result of subtask #1: ' + result1);
console.log('Result of subtask #2: ' + result2);
console.log('Result of subtask #3: ' + result3);
