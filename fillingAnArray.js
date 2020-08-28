const squares = n => {
  const arr = [];
  let counter = 1;
  while (arr.length<n){
    arr.push(counter);
    counter++
  }
  return arr.map(number=>Math.pow(number,2))
}

const range = (n, start, step) => {
  const arr = [];
  let counter = start;
  while (arr.length<n){
    arr.push(counter);
    counter+=step
  }
  return arr
}

const random = (n, min, max) => {
  const arr = [];
  let counter = min;
  while (arr.length<n){
    counter=Math.floor(min + Math.random() * (max + 1 - min))
    arr.push(counter);
  }
  return arr
}

const primes = n => {
    
    const arr = [];
    let counter = 2;
    let checker = true;
    while (arr.length < n) {

        for (let x = 2; x < counter; x++) {

            if (counter % x === 0) {
                checker = false
            }
        }
        checker ? arr.push(counter) : checker = true
        counter++
    }
    return arr
}
