function processData(input) {
    var i_array = input.split('\n'),
        ia = i_array[1].split(' '),
        r = 0, i ='';
    for (i in ia) {
      r += parseInt(ia[i]);
    }
    return r
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "5\n1000000001 1000000002 1000000003 1000000004 1000000005";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   var r = processData(_input);
   process.stdout.write(""+r+"\n");
});

