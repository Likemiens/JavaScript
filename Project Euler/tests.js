'use strict';

var lengthOfString = prompt("Введите длину строки", "");

function divideNumbers(result) {
    var arr = +result,
        newArr = [],
        sumArr = 0;

    for (let i = 1; i < arr; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            newArr.push(i);
        }
    }

    alert("Числа кратные 3 и 5");

    for (let i = 0; i < newArr.length; i++) {
        alert(newArr[i]);
        sumArr = +newArr[i] + +sumArr;
    }

    alert("Сумма чисел меньше " + lengthOfString + " кратных 3 и 5 равна: " + sumArr);
}

divideNumbers(lengthOfString);