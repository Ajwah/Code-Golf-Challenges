function processData(input) {
  var result,
      hh = parseInt(input[0]+input[1]),
      mer = input[8]+input[9],
      abr_back_front = input.slice(2,-2);
      abr_back_only = input.slice(0,-2);
  if (hh === 12) {
    if (mer === 'AM') {
      result = '00' + abr_back_front
    } else {
      result = abr_back_only;
    }
  } else {
    if (mer === 'AM') {
      result = abr_back_only;
    } else {
      result = (hh+12) + abr_back_front
    }
  }
  process.stdout.write(""+result+"\n");
  return result;
}

function assert (i,res,expect) {
  if (res !== expect){
    console.log(i,"[FAIL] Expected:", expect, ' Result: ', res);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input1 = [
            ["12:00:00AM","00:00:00"],
            ["12:00:01AM","00:00:01"],
            ["11:00:00AM","11:00:00"],
            ["12:00:00PM","12:00:00"],
            ["12:00:01PM","12:00:01"],
            ["07:00:00PM","19:00:00"],
            ["07:00:00AM","07:00:00"],
            ['07:05:45PM','19:05:45']
          ];

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   var r;
   for (var i = 0; i < _input1.length; i++){
     assert(i,processData(_input1[i][0]), _input1[i][1]);
   }
});
