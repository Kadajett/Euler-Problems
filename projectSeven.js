
// Project Euler problem seven. 10001st prime

var counter = 0;

for(var i = 2; true; i++){
	if(isPrime(i)){
		counter++;
	}

	if(counter == 10001){
		console.log(i);
		break;
	}

}

function isPrime(number){
	for(var i=2; i<= Math.sqrt(number); i++){
		if(number%i ==0){
		return false;
		}
	}
	return true;
}