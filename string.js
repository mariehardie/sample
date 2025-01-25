// 1

function checkInput(input) {

    return input.toLowerCase()[0].toUpperCase() + input.slice(1);

}

inputByUser = 'can I withdraw?'
console.log(checkInput(inputByUser));





// 2

//Если 40 символов только текста, а многоточие отдельно считается
function toShortenWithEllipsis(input, maxLength) {
    if (input.length <= maxLength) {
        return input; 
    }

    let arr = input.split(/(\s+|[,.!?:;])/);
    let currentLength = 0;
    let resultArr = [];

    for (let part of arr) {
        
        if (currentLength + part.length > maxLength) {
            break; 
        }

        resultArr.push(part);
        currentLength += part.length; 
    }

    let result = resultArr.join('').trim();
    if (result.length > 0 && result.length < input.length) {
        result += '...'; 
    }
    return result;
}


let resultText = toShortenWithEllipsis("Каждое утро я занимаюсь бегом, чтобы поддерживать форму и улучшать свое здоровье.", 40);
console.log(resultText);


//Если 40 символов - это вместе с многоточием
function toShortenWithEllipsis(input, maxLength) {
    if (input.length <= maxLength) {
        return input; 
    }

    let arr = input.split(/(\s+|[,.!?:;])/);
    let currentLength = 0;
    let resultArr = [];

    for (let part of arr) {
       
        if (currentLength + part.length > maxLength - 3) {
            break;
        }

        resultArr.push(part);
        currentLength += part.length; 
    }

    let result = resultArr.join('').trim();
    if (result.length > 0 && result.length < input.length) {
        result += '...';
    }
  return result;
}

let resultText = toShortenWithEllipsis("Каждое утро я занимаюсь бегом, чтобы поддерживать форму и улучшать свое здоровье.", 40);
console.log(resultText);





// 3

function checkSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

let substringOrNot = checkSubstring("javascript", "script");
console.log(substringOrNot);
