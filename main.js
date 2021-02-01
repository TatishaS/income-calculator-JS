// Income inputs
const incomeSalary = document.getElementById('income-salary'),
  incomeFreelance = document.getElementById('income-freelance'),
  incomeExtra1 = document.getElementById('income-extra-1'),
  incomeExtra2 = document.getElementById('income-extra-2');

// Costs inputs
const costsFlat = document.getElementById('costs-flat'),
  costsHouseServices = document.getElementById('costs-house-services'),
  costsTransport = document.getElementById('costs-transport'),
  costsCredit = document.getElementById('costs-credit');

// Total inputs
const totalMonthInput = document.getElementById('total-month'),
  totalDayInput = document.getElementById('total-day'),
  totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

// Money box
const moneyBoxRange = document.getElementById('money-box-range'),
  accumulationInput = document.getElementById('accumulation'),
  spendInput = document.getElementById('spend');

let accumulation = 0;
let totalPercents = 0;
totalMonth = 0;

const inputs = document.querySelectorAll('.input');

for (input of inputs) {
  input.addEventListener('input', () => {
    countingAvailableMoney();
    calculationPercents();
  });
}

const strToNum = str => (str.value ? parseInt(str.value) : 0); // Перегоняем строки в числа. Перед этим проверяем - если пользователь ввел значение и value есть, то запускаем parseInt, если нет - присваиваем значение 0
const countingAvailableMoney = () => {
  const totalPerMonth =
    strToNum(incomeSalary) +
    strToNum(incomeFreelance) +
    strToNum(incomeExtra1) +
    strToNum(incomeExtra2);
  const totalCosts =
    strToNum(costsFlat) +
    strToNum(costsHouseServices) +
    strToNum(costsTransport) +
    strToNum(costsCredit);
  console.log(totalPerMonth, totalCosts);

  totalMonth = totalPerMonth - totalCosts;
  totalMonthInput.value = totalMonth;
};

moneyBoxRange.addEventListener('input', e => {
  const totalPercentEl = document.getElementById('total-percents'); //получаем элемент с числовым обозначением процентов
  totalPercents = e.target.value;
  totalPercentEl.innerHTML = totalPercents;
  calculationPercents();
});

const calculationPercents = () => {
  console.log(totalMonth);
  accumulation = ((totalMonth * totalPercents) / 100).toFixed();
  accumulationInput.value = accumulation;

  //Сколько мы тратим в месяц:
  spend.value = totalMonth - accumulation;

  // Сколько тратим в день:
  totalDay = (spend.value / 30).toFixed();
  totalDayInput.value = totalDay;
  // Сколько накопим за год:
  totalYear = accumulation * 12;
  totalYearInput.value = totalYear;
  console.log(totalYear);
};
