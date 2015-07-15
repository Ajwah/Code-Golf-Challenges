function processData(input) {
  var i_array = input.split('\n'),
      max = parseInt(i_array.shift()),
      lds = max + 1,
      rds = max - 1,
      ldi = 0,
      rdi = rds,
      ld = 0,
      rd = 0,
      matrix = [];

  for (e in i_array) {
    matrix = matrix.concat(i_array[e].split(' '));
  }

  for (var i=0;i<max;i++) {
    ld += parseInt(matrix[ldi]);
    rd += parseInt(matrix[rdi]);
    ldi += lds;
    rdi += rds;
  }
  return Math.abs(ld-rd);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "3\n11 2 4\n4 5 6\n10 8 -12";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   var r = processData(_input);
   process.stdout.write(""+r+"\n");
});
