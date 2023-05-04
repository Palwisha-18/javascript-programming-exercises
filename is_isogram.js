let isIsogram = (str) => {
   return  str.split("").every((elem, index) => str.indexOf(elem) == index);
}

console.log(isIsogram("pakistan"))
console.log(isIsogram("python"))