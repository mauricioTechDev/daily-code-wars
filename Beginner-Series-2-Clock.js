//Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

//Your task is to make 'Past' function which returns time converted to milliseconds.

//Example:
//past(0, 1, 1) == 61000
//Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

function past(h, m, s){
  var miliseconds = 0;
  miliseconds = miliseconds + s * 1000;
  miliseconds = miliseconds + m * 60000;
  miliseconds = miliseconds + h * 3600000;
  return miliseconds;
}
