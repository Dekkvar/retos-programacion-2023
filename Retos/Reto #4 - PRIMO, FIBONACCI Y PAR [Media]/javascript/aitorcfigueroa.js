function numberChecker(number) {
  let fibonnacciArr = [0,1];
  console.log(number + " " + primeNumber(number) +", " + fibonnacciNumber(number, fibonnacciArr) + " y es " + evenOdd(number));
}

function evenOdd(number) {
  if (number % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

function primeNumber(number) {
  if (number == 0 || number == 1 || number == 4) return "no es primo";
	for (let x = 2; x < number / 2; x++) {
		if (number % x == 0) return "no es primo";
	}
	return "es primo";
}

function fibonnacciNumber(number, fibonnacciArr) {
  let response;
  if (number > fibonnacciArr[fibonnacciArr.length - 1]) {
    fibonnacciArr.push(fibonnacciArr[fibonnacciArr.length - 1] + fibonnacciArr[fibonnacciArr.length - 2])
    response = fibonnacciNumber(number, fibonnacciArr);
  } else {
    for (let i = 0; i < fibonnacciArr.length; i++) {
      if (number === fibonnacciArr[i]){
        response = "es fibonacci";
        break;
      } else {
        response = "no es fibonnacci";
      }
    }
  }
  return response;
}

let miarray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

miarray.forEach(function(item,index,arr){
  numberChecker(item);
});