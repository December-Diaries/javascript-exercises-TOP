const add = function(a,b) {
  return (a+b);
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total,current)=> total+current,0);
};

const multiply = function(arr) {
	return arr.reduce((total,current)=> total*current);
};

const power = function(a,b) {
	let result=1;
  for(let i=0;i<b;i++){
    result*=a;
  }
  return result
};

const factorial = function(n) {
	let fact=n;
  if (n==0) return 1;
  for(let i=n;i>1;i--){
    fact=fact*(i-1)
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
