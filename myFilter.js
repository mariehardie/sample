function myFilter(array, callback) {
    const copyArr = array.slice();
    let resultArr = [];

        for (let i=0; i < copyArr.length; i++) {

           if (callback(copyArr[i], i)) {
           resultArr.push(copyArr[i]);
           }

        }

    return resultArr;
};



const numbers = [1, 2, 3, 4, 5];


// const evenNumbers = myFilter(numbers, function(num) { 
//   return num % 2 === 0;
// });
// console.log(evenNumbers); 

const greaterThanThree = myFilter(numbers, function(num) { 
    return num > 3;
  });
  console.log(greaterThanThree); 








