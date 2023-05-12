let money = prompt("Ваш бюджет на месяц?", " "),
    time = prompt("Введите дату в формате YYYY-MM-DD", " ");

let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:{},
    savings:false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", 'food, transport, internet'),
	a2 = prompt("Во сколько обойдется?", '300$'),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", 'clothes, gas, gym'),
	a4 = prompt("Во сколько обойдется?", '200$');

    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;
    
    alert(appData.budget / 30);
   