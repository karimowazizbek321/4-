function doubleValues(arr) {
    return arr.map(num => num * 2);
}


console.log(doubleValues([1, 2, 3])); 
console.log(doubleValues([4, 1, 1, 1, 4])); 
console.log(doubleValues([2, 2, 2, 2, 2, 2]));

//task 2
function negatePositiveNumbers(arr) {
    return arr.map(num => num > 0 ? -num : Math.abs(num));
}


console.log(negatePositiveNumbers([1, 2, 3, 4, 5])); 
console.log(negatePositiveNumbers([1, -2, 3, -4, 5])); 
console.log(negatePositiveNumbers([])); 
console.log(negatePositiveNumbers([0])); 

//task 3
function replaceStrings(arr) {
    return arr.map(item => typeof item === 'string' ? null : item);
}


console.log(replaceStrings([4, 6, 'Ivan', 5, 'Denis']));

//task 4
function filterNamesByLength(arr) {
    return arr.filter(name => name.length <= 5);
}


console.log(filterNamesByLength(['Евдоким', 'Ivan', 'Игнат', 'Denis'])); 

//task 5
function cubeNumbers(arr) {
    return arr.map(num => num ** 3);
}


console.log(cubeNumbers([7, 8, 2])); 

//task 6
function lengthsOfWords(arr) {
    return arr.map(word => word.length);
}


console.log(lengthsOfWords(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'])); 

