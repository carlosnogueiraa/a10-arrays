const arrayNumbers = [5, 1, 4, 8];
const arrayStrings = ["string1", "string2"];
const arrayMisc = [5, 8, "string1", "string2", true, false];

const arrayNumbersOriginalCopia = arrayNumbers.slice()
arrayNumbersOriginalCopia.push(7)
console.log(`Original:`, arrayNumbers)
console.log(`Cópia:`, arrayNumbersOriginalCopia)


const arrayStringsOriginalCopia = arrayStrings.slice()
arrayStringsOriginalCopia.pop()
console.log(`Original:`, arrayStrings)
console.log(`Cópia:`, arrayStringsOriginalCopia)


const arrayMiscOriginalCopia = arrayMisc.slice()
arrayMiscOriginalCopia.splice(1,1)
console.log(`Original:`, arrayMisc)
console.log(`Cópia:`, arrayMiscOriginalCopia)