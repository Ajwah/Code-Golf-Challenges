console.log("Hello World!");

var fizzBuzz = function(s,e){
  for (var i = s; i <= e; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) { console.log('FizzBuzz')}
    else if (i % 3 == 0) { console.log('Fizz')}
    else if (i % 5 == 0) { console.log('Buzz')}
    else {console.log(i)}
  }
};

fizzBuzz(1,100);