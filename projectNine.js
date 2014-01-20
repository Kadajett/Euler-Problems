

var a = 0;
var b = 0;
var c = 0;

for(a = 1; a < 1000; a++ ){
	for(b = 1; b < 1000; b++ ){
		for(c = 1; c < 1000; c++){
			if((a < b < c) && ((a*a)+(b*b) == (c*c)) && (a + b + c == 1000)){
				console.log(a*b*c);
			}
		}
	}
}