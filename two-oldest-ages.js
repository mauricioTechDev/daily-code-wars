The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.



function twoOldestAges(ages){
  let oldest = ages[0];
  let second = ages[0];

  for (let i = 0; i < ages.length; ++i){
    if (ages[i] > oldest){
      second = oldest;
      oldest = ages[i];
    }
    else if (ages[i] > second){
      second = ages[i];
    }
  }
  return [second, oldest];
}
