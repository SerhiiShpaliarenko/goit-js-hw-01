function getElementWidth(content, padding, border) {
  // Витягуємо числа з рядків (відкидаємо "px")
  const numContent = parseFloat(content);
  const numPadding = parseFloat(padding);
  const numBorder = parseFloat(border);

  // Рахуємо загальну ширину: контент + падінги з обох боків + бордери з обох боків
  const totalWidth = numContent + numPadding * 2 + numBorder * 2;

  // Повертаємо результат
  return totalWidth;
}

// Перевірка роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
