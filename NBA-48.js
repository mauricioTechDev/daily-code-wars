// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of
// ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

function pointsPer48(ppg, mpg) {
 if(ppg && mpg !==0){
  let res=((ppg/mpg)*48).toFixed(1)
    return Number(res)
}else{
  return 0
}
}
