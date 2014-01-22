// Project Euler Problem Ten

var sum = 0;


for(var i = 2; i <= 2000000; i++){
	if(isPrime(i)){
		
		sum += i;
		
	}

}

console.log(sum);
function isPrime(number){
	for(var i=2; i<= Math.sqrt(number); i++){
		if(number%i == 0){
		
		return false;
		}
	}
	
	return true;
}