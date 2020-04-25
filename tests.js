'use strcit';

function divideNumbers(result) {
    var arr = +result,
        newArr = [],
        sumArr = 0;

    for (let i = 1; i < arr; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            newArr.push(i);
        }
    }
    
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
        sumArr = +newArr[i] + +sumArr;
    }

    console.log(sumArr);
}

divideNumbers("1000");