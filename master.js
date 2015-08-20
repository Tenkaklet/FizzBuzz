

for ( var i = 1; i <= 100; i++) {

	// Divisible by 3 & 5
	if ( i % 3 === 0 && i % 5 === 0) {
		document.write('<h3 class="both">Fizz Buzz!</h3>');

	// Divisble by 3

	} else if ( i % 3 === 0) {
		document.write('<h3>Fizz</h3>');

	// Divisible by 5

	} else if ( i % 5 === 0 ) {
		document.write('<h3>Buzz</h3>');

	// Otherwise

	} else {
		document.write("<h3 class='variable'>" + i + "</h3>" );
	}
}