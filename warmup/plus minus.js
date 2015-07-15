function processData(input) {
  var result,
      regNeg = /-\d+/g,
      regZero = /\s0{1}|^0{1}/g,
      i_array = input.split('\n'),
      tot = parseInt(i_array[0]),
      n = i_array[1].match(regNeg),
      z = i_array[1].match(regZero),
      neg = (n != null) ? n.length/tot : 0;
      zero = (z != null) ? z.length/tot : 0;
      pos = 1 - neg - zero;

  result = pos + '\n' + neg + '\n' + zero + '\n';
  process.stdout.write(""+result+"\n");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "1\n1";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   var r = processData(_input);
});
