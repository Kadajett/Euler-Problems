
// Took 232792539 calculations to solve


var runCounter = 0;

for(var j = 21; true; j++ ){
	if(checkDivisable(j)){
		console.log(j);
		console.log(runCounter);
		break;
		
	}

	runCounter++;


}



function checkDivisable(number){
	var divisable = true;
	for(var i = 1; i <= 20; i++){
		if(number%i != 0){
			divisable = false;
			break;
		}
		
	}
	return divisable;
}