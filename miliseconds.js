function past(h, m, s){
 let newH = h * 60 * 60
 let newM =m * 60
 let millisecond = (s + newM + newH)*1000
return millisecond
}
