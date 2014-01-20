

// project euler problem 6 


var sumOfSquares = 0;
var squareOfSums = 0;

// sum of squares
for(var i = 1; i <= 100; i++){
	sumOfSquares += i*i;
}

// square of sums 
for(var i = 1; i <= 100; i++){
	squareOfSums += i;

}
squareOfSums = squareOfSums * squareOfSums;

if(sumOfSquares > squareOfSums){
	console.log(sumOfSquares - squareOfSums);
}
else if(squareOfSums > sumOfSquares){
	console.log(squareOfSums - sumOfSquares);
}