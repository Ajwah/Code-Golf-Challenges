function processData(input) {
  var result,
      max = parseInt(input),
      spaces,
      lines = "",
      steps = '#',
      i = max;

  while (i>0){
    //Credit for concise way of making a filled string goes to Pointy:
    //http://stackoverflow.com/questions/14343844/create-a-string-of-variable-length-filled-with-a-repeated-character
    spaces = new Array(i).join(' ');
    lines += spaces + steps + '\n';
    steps += '#';
    i--;
  }

  result = lines
  process.stdout.write(""+result+"\n");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "60";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   var r = processData(_input);
});
