'use strict';

var money = +prompt("Ваш бюджет на месяц:", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-24");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondQuestion = prompt("Во сколько обойдется?", ""),
    firstQuestionCopy = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondQuestionCopy = prompt("Во сколько обойдется?", "");
 
appData.expenses.firstQuestion = secondQuestion;
appData.expenses.firstQuestionCopy = secondQuestionCopy;

alert(appData.budget / 30);