// You need to remove the anchor from a URL

function removeUrlAnchor(url){
console.log(url)
let rem='#'

return url.split(rem,1)[0]
// return url.slice(0,16)
  // TODO: complete
}
