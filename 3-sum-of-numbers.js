Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!


function getSum( a,b ){
   if (a === b){
   return a
   } else {
   let minNumber = Math.min(a,b)
   let maxNumber = Math.max(a,b)
   let listOfNums = []
   for (let i = minNumber; i<=maxNumber; i++){
   listOfNums.push(i)
   }
   console.log(listOfNums)
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   console.log(listOfNums.reduce(reducer))
   return listOfNums.reduce(reducer)
   }
}
