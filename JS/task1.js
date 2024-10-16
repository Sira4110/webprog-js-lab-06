// task-1.js (додаткове завдання)

function isEnoughCapacity(products, containerSize, fragileItems) {
  // Підраховуємо загальний обсяг товарів, враховуючи їх мінімальний об'єм
  const totalVolume = Object.values(products).reduce(
    (sum, item) => sum + item.count * item.volume,
    0
  );

  // Перевіряємо, чи є крихкі товари
  const fragileWarning = Object.keys(products).some((item) =>
    fragileItems.includes(item)
  );
  if (fragileWarning) {
    console.warn(
      "Контейнер містить крихкі товари. Використовуйте з обережністю!"
    );
  }

  // Якщо обсяг товарів перевищує місткість контейнера, повертаємо різницю
  if (totalVolume > containerSize) {
    return `Контейнер перевищено на ${
      totalVolume - containerSize
    } одиниць об'єму`;
  }

  // Повертаємо true, якщо товари вміщаються в контейнер
  return true;
}

// Перевірка роботи функції
console.log(
  isEnoughCapacity(
    {
      apples: { count: 2, volume: 1.5 },
      grapes: { count: 3, volume: 0.5 },
      carrots: { count: 1, volume: 0.7 },
    },
    8,
    ["apples", "grapes"]
  )
); // Попередження + true
console.log(
  isEnoughCapacity(
    {
      apples: { count: 4, volume: 1.5 },
      grapes: { count: 6, volume: 0.5 },
      lime: { count: 16, volume: 1.2 },
    },
    12,
    ["grapes"]
  )
); // Попередження + Контейнер перевищено
