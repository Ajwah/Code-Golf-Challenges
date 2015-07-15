
var gcd = function(a,b){
  var mod = a%b;
  console.log(a,b,mod);
  if (mod>b) {
    return gcd(mod,b);
  }
  else if (mod<b) {
    return gcd(b,mod);
  } else return a;
};

console.log(gcd(725,25));
