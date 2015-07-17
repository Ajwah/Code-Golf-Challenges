function processData(input) {
  function fact(n){
    if (n>2) {
      return n*fact(n-1);
    } else {
      return n;
    }
  }
  var i = parseInt(input),
      result = fact(i);

  process.stdout.write(""+result+"\n");
  // return result;
}

function assert (i,res,expect) {
  if (res !== expect){
    console.log(i,"[FAIL] Expected:", expect, ' Result: ', res);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = [
            ["4",24],
            ['10',3628800],
            ['25',1.551121e+25]
          ];

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   var r;
   for (var i = 0; i < _input.length; i++){
     // assert(i,processData(_input[i][0]), _input[i][1]);
   }
});

function sum(a,b) {
  var result,
      t = {
            index: '0123456789',
            '0': ['0','1','2','3','4','5','6','7','8','9'],
            '1': ['1','2','3','4','5','6','7','8','9','0'],
            '2': ['2','3','4','5','6','7','8','9','0'],
            '3': ['3','4','5','6','7','8','9','0'],
            '4': ['4','5','6','7','8','9','0'],
            '5': ['5','6','7','8','9','0'],
            '6': ['6','7','8','9','0'],
            '7': ['7','8','9','0'],
            '8': ['8','9','0'],
            '9': ['9','0']
      };
  function preCalc(a,b){
    console.log(a,b);
    var result = [],
        tmp,
        da,db,
        al = a.length,
        bl = b.length;
    for (var i=al-1;i>=0;i--){
      da = a[i];
      db = b[i];
      if (da<=db) {
        if (parseInt(db) < t[da].length) {
          tmp = t[da][db];
          if (tmp < da) {tmp = '1' + tmp};
        } else {
          db = t['1'][parseInt(db)-t[da].length] //db - t[da].length + 1 //4+8 -> 8 - 7 + 1
          tmp = '1'+db
        }
      } else {
        return preCalc(db,da);
      }
      result.push(tmp);
    }
    console.log(result);
    return result;
  }

  function assemble(arr){
    var i, t, h='', ln = arr[1].length;
    if (ln>1) {h=arr[1][0]}
    t = preCalc(arr[0][0],arr[1][ln-1])[0];
    return h + t + arr[0][1];
  }
  result = assemble(preCalc(a,b));
  return result;
}

// console.log(sum('0','7'));
console.log(sum('18','79'));
console.log(sum('27','79'));
console.log(sum('36','79'));
console.log(sum('45','79'));
console.log(sum('54','79'));
console.log(sum('63','79'));