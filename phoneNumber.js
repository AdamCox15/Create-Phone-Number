// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!

const createNumber = (arr) => {
  return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
}
console.log(createNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

//---------------------------------------
const createPhoneNumber = (arr) => {
    let str = arr.join('');
    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//-------------------------------------------------------------

const createPhoneNumber3 = (arr) => {
    let mask = '(xxx) xxx-xxxx';

    arr.forEach(item => {
        mask = mask.replace('x', item);
    });

    return mask;
}


console.log(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//--------------------------------------------------

let testArr = [1,2,3,4,5,6,7,8,9,0];

let newArr = [...testArr];

newArr.splice(0, 0, '(');
newArr.splice(4, 0, ')');
newArr.splice(5, 0, ' ');
newArr.splice(9, 0, '-');
newArr = newArr.join('').toString();

//----------------------------------------------------
const createPhoneNumber4 = (arr) => {

    let finalNum = ''
  
    for(let i = 0; i < arr.length; i++){
      
      if(i === 0){
        finalNum += '('
        finalNum += arr[0]
      }else if(i === 2){
        finalNum += arr[2]
        finalNum += ') '
      }else if(i === 5){
        finalNum += arr[5]
        finalNum += '-'
      }else{
        finalNum += arr[i]
      }
      
    }
  
    console.log(finalNum)  
  }
  
  createPhoneNumber4([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])