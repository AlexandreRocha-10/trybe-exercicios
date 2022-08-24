function verificaPalindrome(string) {
    let invertString = string.split("").reverse().join("")
    if (string == invertString) {
        return true
    } else {
        return false
    } 
}

console.log(verificaPalindrome('arardfa'))

