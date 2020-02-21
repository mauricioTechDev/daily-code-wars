1230



const lengthOfLastWord = (s) => {
    let count = 0
    for (let i = s.length-1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (count === 0) {
                continue
            }
            break
        }
        count++
    }
    return count
}
