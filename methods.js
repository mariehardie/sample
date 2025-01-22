//mySlice

// 1
function mySlice(arr, start, end) {
    let emptyArr = []; let result;

    if (end === undefined) {
        end = arr.length;
    }

    if (start < 0) {
        start = arr.length - Math.abs(start);
    }

    if (end < 0) {
        end = arr.length - Math.abs(end);
    }

    if (start >=  end && start > 0 && end < arr.length) {
        return [];
    }

    else {
    for (let i = start; i < end; i++) {
        emptyArr.push(arr[i])
    }
    }

    result = emptyArr;
    return result;
}

const arrNumbers = [1, 2, 3, 4, 5];
console.log(mySlice(arrNumbers, 1, 4));




//2
function mySlice(arr, start, end) {
    let emptyArr = []; let result;

    if (end === undefined) {
        end = arr.length;
    }
    if (start < 0) {
        start = arr.length - Math.abs(start);
    }

    if (end < 0) {
        end = arr.length - Math.abs(end);
    }

    if (start >=  end && start > 0 && end < arr.length) {
        return [];
    }
    emptyArr = arr.filter((_,i) => i >= start && i < end);
    result = emptyArr;
    return result;
}

const arrNumbers = [5, 10, 15, 20];
console.log(mySlice(arrNumbers, 1));




//myIndexOf

// 1
function myIndexOf(arr, item, from=0) {
    
return arr.findIndex((elem, i) => i >= from && elem === item);
    
};

const arr = [10, 20, 30, 40, 50];
console.log(myIndexOf(arr, 30));


// 2
function myIndexOf(arr, item, from=0) {
    let index;

    arr.forEach((elem, i) => {
        if (i >= from && elem === item) {
            index = i;
        }
    })

   return index || -1;
}

const arr = [10, 20, 30, 40, 50];
console.log(myIndexOf(arr, 30));



//myIncludes

//1
function myIncludes(arr, item, from=0) {
    let result = false;
    for (let i=0; i < arr.length; i++) {
       let elem = arr[i];
       if (elem === item && i >= from) {
        result = true;
        break;
       }
    }
    return result;
}

const arr = [1, 2, 3];
console.log(myIncludes(arr, 3, 1));

//2
function myIncludes(arr, item, from=0) {

    return arr.find((elem,i) => i >= from && elem === item) ? true : false;

}

const arr = [1, 2, 3];
console.log(myIncludes(arr, 3, 1));

