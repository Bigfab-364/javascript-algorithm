function convertFahrToCelsius(fahrenheit) {
    const F = fahrenheit;
    const C = ((F - 32) * 5/9)

}


// convertFahrToCelsius(0) should return `-17.7778`
F = 0;
const C = ((0 - 32) * 5/9);
console.log(C);

//convertFahrToCelsius("0") should return `-17.7778`
F = "0";
const C = (("0" - 32) * 5/9);
console.log(C);

//convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
F = ([1,2,3])
const C = ((([1,2,3]) - 32) * 5/9);
console.log(C);

//convertFahrToCelsius({temp: 0}) should return `{"temp": 0} is not a valid number but a/an object.`

F = ({temp: 0})
const C = (({temp: 0} - 32) * 5/9);
console.log(C);


// convertFahrToCelsius(0) should return `-17.7778`
if (F = 0) {
    const C = ((0 - 32) * 5/9);
    console.log(C);
  }
  //convertFahrToCelsius("0") should return `-17.7778`
  else if (F = "0") {
    const C = (("0" - 32) * 5/9);
    console.log(C);
  }
  //if the parameter passed is not a number or a string that can be converted to a valid number
  else {
    const C = (({temp: 0}- 32) * 5/9);
    console.log('is not a valid number but a/an ');
  }
