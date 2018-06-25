	


/*
	используя фунцию конструктор создать часы
+	свойства часов: hours, minutes, seconds, isRendered;
+	методы public: render, start
+	методы private: updateSeconds, updateMinutes, updateHours
+	каждый из низ запускается с определенным интервалом
+	и обнуляет их значение разных составляющих при достижении предела 
+	* - стилизовать часы к приличному виду
+	** - написать функционал часов который реализовывает поведение секундомера
+
+
+function Clock(){
+	var time = new Date();
+	/*
+	берёте тз time
+	this.seconds
+	this.minutes
+	this.hours
+
+	//this.rendered - значение булевого типа для того, чтобы обновление времени запускалось только если часы созданы в разметке
+	//описываете вид часов помещая каждую составляющую(часы,минуты,секунды)
+	//в разный элемент с ид
+	this.render = function(){
+		document.write('<div id="clock"><span id="hours">'+this.hours+'</span></div>')
+	}
+	this.start = function(){
+		updateHours();
+	}
+	function updateHours(){
+		//для получения текущего значения времени уже из элемента
+		var hours = document.getElementById('hours')
+		//дале логику опишите сами
*/











function Clock(type){
	var _this = this;
	var hoursElement, minutesElement, secondsElement;

	this.clockInterval = "";
	this.timerInterval = "";
	this.type = type;
	this.rendered = false;


	this.render = function(){
		if(this.rendered == false){
			document.write('<div id="'+this.type+'">\
								<div class="clockWrapper">\
									<span id="hours'+this.type+'">00</span>\
									<span id="minutes'+this.type+'">00</span>\
									<span id="seconds'+this.type+'">00</span>\
								</div>\
							</div>');
			this.rendered = true;
			hoursElement = document.getElementById('hours'+ _this.type);
			minutesElement = document.getElementById('minutes'+ _this.type);
			secondsElement = document.getElementById('seconds'+ _this.type);
		}
	}

	this.setToStart = function(){
		this.render;
		if(_this.type == "clock"){
			btnStartClock.disabled = true;
			getCurrentTime()
		}else if(_this.type == "timer"){
			btnStartTimer.disabled = true;
			_this.hours = 0;
			_this.minutes = 0;
			_this.seconds = 0;
		}
		updateSeconds();
	}

	this.setToStop = function(){
		clearInterval(_this.clockInterval);
		if(_this.type == 'clock'){
			btnStartClock.disabled = false;
		}
		if(_this.type == 'timer'){
			btnStartTimer.disabled = false;
		}
	}

	function getCurrentTime(){
		var time = new Date();
		_this.hours = time.getHours();
		_this.minutes = time.getMinutes();
		_this.seconds = time.getSeconds();
	}

	function updateHours(){
		if(_this.type == "clock"){
			hoursElement.innerHTML = _this.hours;
		}
		if(_this.hours == 24){
			_this.hours = 0;
			hoursElement.innerHTML = "0" + _this.hours;
		}
	}

	function updateMinutes(){
		if(_this.type == "clock"){
			minutesElement.innerHTML = _this.minutes;
		}
		if(_this.minutes == 60){
			_this.minutes = 0;
			hoursElement.innerHTML = ++_this.hours;
		}
		if(_this.minutes < 10) minutesElement.innerHTML = "0" + _this.minutes;
	}

	function updateSeconds(){
	_this.clockInterval = setInterval(function(){
			if(_this.seconds < 60) secondsElement.innerHTML = ++_this.seconds;
			if(_this.seconds < 10) secondsElement.innerHTML = "0" + _this.seconds;
			if(_this.seconds == 60){
				_this.seconds = 0;
				secondsElement.innerHTML = "00";
				minutesElement.innerHTML = ++_this.minutes;
			}
			updateMinutes();
			updateHours();
		},996);
	}
}

var clock = new Clock("clock");
var timer = new Clock("timer");

clock.render();
timer.render();

var btnStartClock = document.createElement('button');
var btnStopClock = document.createElement('button');
var btnStartTimer = document.createElement('button');
var btnStopTimer = document.createElement('button');
var h2Clock = document.createElement('h2');
var h2Timer = document.createElement('h2');

btnStartClock.id = 'btnStartClock';
btnStopClock.id = 'btnStopClock';
btnStartTimer.id = 'btnStartTimer';
btnStopTimer.id = 'btnStopTimer';
h2Clock.id = 'h2Clock';
h2Timer.id = 'h2Timer';

btnStartClock.innerHTML = 'btnStartClock';
btnStopClock.innerHTML = 'btnStopClock';
btnStartTimer.innerHTML = 'btnStartTimer';
btnStopTimer.innerHTML = 'btnStopTimer';
h2Clock.innerHTML = 'Should be a working clock with start/stop buttons.'
h2Timer.innerHTML = 'Should be a working timer with start/stop buttons.'

clockElementId = document.getElementById('clock');
timerElementId = document.getElementById('timer');



clockElementId.appendChild(btnStartClock);
clockElementId.appendChild(btnStopClock);
clockElementId.insertBefore(h2Clock, clockElementId.childNodes[0]);

timerElementId.appendChild(btnStartTimer);
timerElementId.appendChild(btnStopTimer);
timerElementId.insertBefore(h2Timer, timerElementId.childNodes[0]);



btnStartClock.onclick = clock.setToStart;
btnStopClock.onclick = clock.setToStop;
btnStartTimer.onclick = timer.setToStart;
btnStopTimer.onclick = timer.setToStop;


