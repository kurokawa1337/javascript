// 1. Сума чисел у діапазоні (FOR - бо відома точна кількість ітерацій від min до max)
function sumInRange(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) sum += i;
  return sum;
}

// 2. Найбільший спільний дільник (WHILE - ідеальний для алгоритму Евкліда, кількість кроків невідома)
function gcdLoop(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 3. Усі дільники числа (FOR - відомий діапазон від 1 до самого числа)
function findDivisors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) console.log(i);
  }
}

// 4. Кількість цифр у числі (WHILE - ділимо на 10, поки число більше нуля)
function countDigits(n) {
  let count = 0;
  n = Math.abs(n);
  if (n === 0) return 1;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// 5. Статистика 10 чисел (FOR - точна кількість кроків = 10)
function numberStats() {
  let pos = 0, neg = 0, zero = 0, even = 0, odd = 0;
  for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Введіть число:"));
    if (num > 0) pos++;
    else if (num < 0) neg++;
    else zero++;
    
    if (num % 2 === 0) even++;
    else odd++;
  }
  console.log(`Додатні: ${pos}, Від'ємні: ${neg}, Нулі: ${zero}, Парні: ${even}, Непарні: ${odd}`);
}

// 6. Зациклений калькулятор (DO WHILE - дія має виконатися мінімум 1 раз перед перевіркою)
function loopedCalculator() {
  let continueCalc;
  do {
    let a = +prompt("Введіть перше число:");
    let b = +prompt("Введіть друге число:");
    let op = prompt("Введіть знак (+, -, *, /):");
    let res = op === '+' ? a+b : op === '-' ? a-b : op === '*' ? a*b : a/b;
    alert("Результат: " + res);
    continueCalc = confirm("Бажаєте розв'язати ще один приклад?");
  } while (continueCalc);
}

// 7. Зміщення цифр числа (FOR - відома кількість зміщень)
function shiftDigits(num, shift) {
  let str = num.toString();
  for (let i = 0; i < shift; i++) {
    str = str.slice(1) + str[0]; // переносимо перший символ в кінець
  }
  return str;
}

// 8. Виведення днів тижня (DO WHILE - спочатку показуємо, потім питаємо)
function loopDays() {
  const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
  let i = 0;
  do {
    alert(days[i % 7]); // % 7 дозволяє зациклити індекси
    i++;
  } while (confirm("Бажаєте побачити назву наступного дня тижня?"));
}

// 9. Таблиця множення (Вкладений FOR - фіксовані діапазони)
function multiplicationTable() {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("----------");
  }
}

// 10. Гра «Вгадай число» (DO WHILE або WHILE - невідома кількість спроб)
function guessNumber() {
  alert("Загадайте число від 0 до 100");
  let min = 0, max = 100, ans = '';
  do {
    let mid = Math.floor((min + max) / 2);
    ans = prompt(`Ваше число > ${mid}, < ${mid} або == ${mid}? (Введіть >, < або ==)`);
    if (ans === '>') min = mid + 1;
    else if (ans === '<') max = mid - 1;
  } while (ans !== '==');
  alert("Я вгадав!");
}