// task-2.js (додаткове завдання)

function calcAverageCalories(days) {
  if (days.length === 0) return 0;

  // Підраховуємо загальну кількість калорій з урахуванням інтенсивності
  const totalCalories = days.reduce((sum, day) => {
    let calories = day.calories;
    if (day.intensity === "high") {
      calories *= 1.1; // додаємо 10%
    } else if (day.intensity === "low") {
      calories *= 0.9; // віднімаємо 10%
    }
    return sum + calories;
  }, 0);

  // Обчислюємо середнє значення калорій
  const averageCalories = totalCalories / days.length;

  // Аналізуємо, чи достатньо калорій
  if (averageCalories > 3000) {
    console.log("The athlete consumes enough calories.");
  } else if (averageCalories < 2000) {
    console.log("The athlete does not consume enough calories.");
  }

  // Повертаємо середнє значення калорій
  return averageCalories;
}

// Перевірка роботи функції
let weeklyCalories = [
  { day: "monday", calories: 3010, intensity: "high" },
  { day: "tuesday", calories: 3200, intensity: "medium" },
  { day: "wednesday", calories: 3120, intensity: "low" },
  { day: "thursday", calories: 2900, intensity: "medium" },
  { day: "friday", calories: 3450, intensity: "high" },
  { day: "saturday", calories: 3280, intensity: "medium" },
  { day: "sunday", calories: 3300, intensity: "medium" },
];
console.log(calcAverageCalories(weeklyCalories)); // Аналіз + середнє значення

let incompleteWeek = [
  { day: "monday", calories: 2040, intensity: "low" },
  { day: "tuesday", calories: 2270, intensity: "medium" },
  { day: "wednesday", calories: 2420, intensity: "high" },
  { day: "friday", calories: 2370, intensity: "medium" },
  { day: "saturday", calories: 2280, intensity: "medium" },
];
console.log(calcAverageCalories(incompleteWeek)); // Аналіз + середнє значення

console.log(calcAverageCalories([])); // 0
