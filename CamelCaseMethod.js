String.prototype.camelCase=function(){
    let func = (char) => char.toUpperCase().trim()
    return this.trim().replace(/((\s.)|(^.))/g, func)
}

console.log("camel case method ".camelCase()) //