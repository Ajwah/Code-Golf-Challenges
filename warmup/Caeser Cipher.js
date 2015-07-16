function processData(input) {
  var result,
      i_array = input.split('\n'),
      arr = i_array[1].split(''),
      rot = parseInt(i_array[2]);

  result = arr.map(function(a) {
      var base = {
                  lower_a: 97,
                  lower_z: 122,
                  upper_A: 65,
                  upper_Z: 90
                 },
          alpha = 26,
          offset,
          ascii_start = a.charCodeAt(0),
          ascii_end;

      if (ascii_start >= base.lower_a &&
          ascii_start <= base.lower_z) {
        offset = base.lower_a;
      } else if (ascii_start >= base.upper_A &&
                 ascii_start <= base.upper_Z) {
        offset = base.upper_A;
      } else {
        return a;
      }

      ascii_end = ((ascii_start - offset) + (rot % alpha)) % alpha;
      return String.fromCharCode(ascii_end + offset);
    });
  result = result.join('');
  process.stdout.write(""+result+"\n");
  return result;
}

function processData2(input){
  var result = '',
      alpha = 'abcdefghijklmnopqrstuvwxyz',
      beta = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      i_array = input.split('\n'),
      str = i_array[1],
      rot = parseInt(i_array[2]),
      max = rot%26,
      rotatedA = alpha,
      rotatedB = beta,
      first, last, index;

  for (var i = 0; i<max;i++){
    first = rotatedA[0];
    last = rotatedA[alpha.length-1]
    rotatedA = rotatedA.slice(1,-1) + last + first;

    first = rotatedB[0];
    last = rotatedB[alpha.length-1]
    rotatedB = rotatedB.slice(1,-1) + last + first;
  }
  // console.log(rotated, )
  for (i = 0; i<str.length;i++){
    index = alpha.indexOf(str[i]);
    if (index != -1) {
      result += rotatedA[index];
    } else {
      index = beta.indexOf(str[i]);
      if (index != -1) {
        result += rotatedB[index];
      } else {
        result += str[i];
      }
    }
  }
  // process.stdout.write(""+result+"\n");
  return result;
}

function assert (i,res,expect) {
  if (res !== expect){
    console.log(i,"[FAIL] Expected:", expect, ' Result: ', res);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = [
            ["11\nmiddle-Outz\n28",'okffng-Qwvb'],
            ['30\nthis is a secret message\n3', 'wklv lv d vhfuhw phvvdjh'],
            ['1\nwho are you?\n4','als evi csy?'],
            ["11\nmiddle-Outz\n0",'middle-Outz'],
            ['30\nthis is a secret message\n0', 'this is a secret message'],
            ['1\nwho are you?\n0','who are you?'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n0','abcd-efghijklmnopqrstu-vwxyz'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n1','bcde-fghijklmnopqrstuv-wxyza'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n2','cdef-ghijklmnopqrstuvw-xyzab'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n3','defg-hijklmnopqrstuvwx-yzabc'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n4','efgh-ijklmnopqrstuvwxy-zabcd'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n5','fghi-jklmnopqrstuvwxyz-abcde'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n6','ghij-klmnopqrstuvwxyza-bcdef'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n7','hijk-lmnopqrstuvwxyzab-cdefg'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n8','ijkl-mnopqrstuvwxyzabc-defgh'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n9','jklm-nopqrstuvwxyzabcd-efghi'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n10','klmn-opqrstuvwxyzabcde-fghij'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n11','lmno-pqrstuvwxyzabcdef-ghijk'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n12','mnop-qrstuvwxyzabcdefg-hijkl'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n13','nopq-rstuvwxyzabcdefgh-ijklm'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n14','opqr-stuvwxyzabcdefghi-jklmn'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n15','pqrs-tuvwxyzabcdefghij-klmno'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n16','qrst-uvwxyzabcdefghijk-lmnop'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n17','rstu-vwxyzabcdefghijkl-mnopq'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n18','stuv-wxyzabcdefghijklm-nopqr'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n19','tuvw-xyzabcdefghijklmn-opqrs'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n20','uvwx-yzabcdefghijklmno-pqrst'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n21','vwxy-zabcdefghijklmnop-qrstu'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n22','wxyz-abcdefghijklmnopq-rstuv'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n23','xyza-bcdefghijklmnopqr-stuvw'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n24','yzab-cdefghijklmnopqrs-tuvwx'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n25','zabc-defghijklmnopqrst-uvwxy'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n26','abcd-efghijklmnopqrstu-vwxyz'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n27','bcde-fghijklmnopqrstuv-wxyza'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n28','cdef-ghijklmnopqrstuvw-xyzab'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n29','defg-hijklmnopqrstuvwx-yzabc'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n30','efgh-ijklmnopqrstuvwxy-zabcd'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n31','fghi-jklmnopqrstuvwxyz-abcde'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n32','ghij-klmnopqrstuvwxyza-bcdef'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n33','hijk-lmnopqrstuvwxyzab-cdefg'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n34','ijkl-mnopqrstuvwxyzabc-defgh'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n35','jklm-nopqrstuvwxyzabcd-efghi'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n36','klmn-opqrstuvwxyzabcde-fghij'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n37','lmno-pqrstuvwxyzabcdef-ghijk'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n38','mnop-qrstuvwxyzabcdefg-hijkl'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n39','nopq-rstuvwxyzabcdefgh-ijklm'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n40','opqr-stuvwxyzabcdefghi-jklmn'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n41','pqrs-tuvwxyzabcdefghij-klmno'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n42','qrst-uvwxyzabcdefghijk-lmnop'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n43','rstu-vwxyzabcdefghijkl-mnopq'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n44','stuv-wxyzabcdefghijklm-nopqr'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n45','tuvw-xyzabcdefghijklmn-opqrs'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n46','uvwx-yzabcdefghijklmno-pqrst'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n47','vwxy-zabcdefghijklmnop-qrstu'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n48','wxyz-abcdefghijklmnopq-rstuv'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n49','xyza-bcdefghijklmnopqr-stuvw'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n50','yzab-cdefghijklmnopqrs-tuvwx'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n51','zabc-defghijklmnopqrst-uvwxy'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n52','abcd-efghijklmnopqrstu-vwxyz'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n53','bcde-fghijklmnopqrstuv-wxyza'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n54','cdef-ghijklmnopqrstuvw-xyzab'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n55','defg-hijklmnopqrstuvwx-yzabc'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n56','efgh-ijklmnopqrstuvwxy-zabcd'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n57','fghi-jklmnopqrstuvwxyz-abcde'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n58','ghij-klmnopqrstuvwxyza-bcdef'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n59','hijk-lmnopqrstuvwxyzab-cdefg'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n60','ijkl-mnopqrstuvwxyzabc-defgh'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n61','jklm-nopqrstuvwxyzabcd-efghi'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n62','klmn-opqrstuvwxyzabcde-fghij'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n63','lmno-pqrstuvwxyzabcdef-ghijk'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n64','mnop-qrstuvwxyzabcdefg-hijkl'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n65','nopq-rstuvwxyzabcdefgh-ijklm'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n66','opqr-stuvwxyzabcdefghi-jklmn'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n67','pqrs-tuvwxyzabcdefghij-klmno'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n68','qrst-uvwxyzabcdefghijk-lmnop'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n69','rstu-vwxyzabcdefghijkl-mnopq'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n70','stuv-wxyzabcdefghijklm-nopqr'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n71','tuvw-xyzabcdefghijklmn-opqrs'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n72','uvwx-yzabcdefghijklmno-pqrst'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n73','vwxy-zabcdefghijklmnop-qrstu'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n74','wxyz-abcdefghijklmnopq-rstuv'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n75','xyza-bcdefghijklmnopqr-stuvw'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n76','yzab-cdefghijklmnopqrs-tuvwx'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n77','zabc-defghijklmnopqrst-uvwxy'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n78','abcd-efghijklmnopqrstu-vwxyz'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n79','bcde-fghijklmnopqrstuv-wxyza'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n80','cdef-ghijklmnopqrstuvw-xyzab'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n81','defg-hijklmnopqrstuvwx-yzabc'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n82','efgh-ijklmnopqrstuvwxy-zabcd'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n83','fghi-jklmnopqrstuvwxyz-abcde'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n84','ghij-klmnopqrstuvwxyza-bcdef'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n85','hijk-lmnopqrstuvwxyzab-cdefg'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n86','ijkl-mnopqrstuvwxyzabc-defgh'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n87','jklm-nopqrstuvwxyzabcd-efghi'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n88','klmn-opqrstuvwxyzabcde-fghij'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n89','lmno-pqrstuvwxyzabcdef-ghijk'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n90','mnop-qrstuvwxyzabcdefg-hijkl'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n91','nopq-rstuvwxyzabcdefgh-ijklm'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n92','opqr-stuvwxyzabcdefghi-jklmn'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n93','pqrs-tuvwxyzabcdefghij-klmno'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n94','qrst-uvwxyzabcdefghijk-lmnop'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n95','rstu-vwxyzabcdefghijkl-mnopq'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n96','stuv-wxyzabcdefghijklm-nopqr'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n97','tuvw-xyzabcdefghijklmn-opqrs'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n98','uvwx-yzabcdefghijklmno-pqrst'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n99','vwxy-zabcdefghijklmnop-qrstu'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n100','wxyz-abcdefghijklmnopq-rstuv'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n101','xyza-bcdefghijklmnopqr-stuvw'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n102','yzab-cdefghijklmnopqrs-tuvwx'],
            ['1\nabcd-efghijklmnopqrstu-vwxyz\n103','zabc-defghijklmnopqrst-uvwxy']
          ];

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   var r;
   for (var i = 0; i < _input.length; i++){
     assert(_input[i],processData2(_input[i][0]), _input[i][1]);
   }
});
