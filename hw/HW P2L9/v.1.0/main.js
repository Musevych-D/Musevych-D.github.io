//Trying to remder a clock with js.



/*
//Так не обновлялилсь свойства обьекта, почему?
Object.defineProperties(time, {
	hours: {value: today.getHours()},
	minutes: {value: today.getMinutes()},
	seconds: {value: today.getSeconds()}
})
*/

var time = {};
var setIntervalId;

var clock = document.getElementById('clock');
clock.innerHTML = '00:00:00';

var buttonStart = document.getElementById('btnStrt');
buttonStart.innerHTML = 'Start';
buttonStart.setAttribute("onClick", 'setButtonToWork()');

var buttonStop = document.getElementById('btnStop');
buttonStop.innerHTML = 'Stop';
buttonStop.setAttribute("onClick", 'setButtonToStop()');

function getCurrentTIme(){
	var today = new Date();
	time = {hours: today.getHours(),
		minutes: today.getMinutes(),
		seconds: today.getSeconds()
	};
	return time;
}

function setButtonToWork(){
	getCurrentTIme();
	setIntervalId = setInterval(function(){setUpdatedTime()}, 1010)
	buttonStart.disabled = true;
}

function setButtonToStop(){
	clearInterval(setIntervalId);
 	clock.innerHTML = time.hours + ':' + time.minutes + ':' + time.seconds;
 	buttonStart.disabled = false;
}

function setUpdatedTime(){
	clock.innerHTML = updateTime();
}

function updateTime(){
	if(time.seconds >= 59){
		time.seconds = 0;
		if(time.minutes >= 59){
			time.minutes = 0;
			time.hours++;
		}else{
			time.minutes++;
		}
	}else{
		time.seconds++;
	}
	if(time.seconds < 10) time.seconds = '0'+time.seconds;
	if(time.minutes < 10) time.minutes = '0'+time.minutes;
	return time.hours + ':' + time.minutes + ':' + time.seconds;
}