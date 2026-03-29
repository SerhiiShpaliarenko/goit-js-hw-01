function getShippingMessage(country, price, deliveryFee) {
  // Рахуємо загальну вартість замовлення (ціна товару + вартість доставки)
  const totalPrice = price + deliveryFee;
  
  // Повертаємо відформатований рядок за допомогою шаблонних рядків
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Перевірка роботи функції (залишаємо для ментора)
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"