// 1. Порівняння двох чисел
function compareNumbers(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// 2. Обчислення факторіала
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 3. Об'єднання трьох цифр в одне число
function combineDigits(a, b, c) {
  // Множимо розряди або використовуємо конвертацію
  return a * 100 + b * 10 + c; 
}

// 4. Площа прямокутника / квадрата (використання значення за замовчуванням)
function calculateArea(length, width = length) {
  // Якщо width не передано, воно дорівнюватиме length (квадрат)
  return length * width;
}

// 5. Перевірка на досконале число
function isPerfectNumber(n) {
  if (n <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}

// 6. Досконалі числа в заданому діапазоні
function perfectNumbersInRange(min, max) {
  let perfectNumbers = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers; // наприклад, для 1 і 30 поверне [6, 28]
}