var counter = 1;
var retry = true;
while(retry){
	var desiredNumber = prompt("How much to count till?");
	if(!isNaN(desiredNumber)){
		do{
			console.log(counter);
			counter++;
			retry = false;
		}while(counter <= desiredNumber)
	}else{
		alert('Invalid input');
		retry = confirm('Retry?');
	}
}