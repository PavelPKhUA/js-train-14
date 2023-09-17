// Завдання 1
/**
 * Функція `getDateDetails` отримує об'єкт дати та повертає об'єкт з деякими деталями про дату.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт, який містить такі властивості:
 *  year - рік,
 *  month - місяць,
 *  day - день місяця.
 */
function getDateDetails(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime() !== 'number') {
    // Якщо date не є об'єктом Date, повертаємо рядок
    // "Помилка: вхідне значення має бути об'єктом Date"
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Повертаємо об'єкт, що містить деякі деталі про вхідний об'єкт Date.
    const result = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    }
    return result
  }
}

console.log('Завдання: 1 ==============================')
const now = new Date('2023-12-25T00:00:00Z')
console.log(
  getDateDetails(new Date('2023-12-25T00:00:00Z')),
)
//Виведе { year: 2023, month: 11, day: 25 }

// Завдання 2
/**
 * Функція `setDateDetails` приймає об'єкт Date і рядок ISO дати, і встановлює дату з ISO рядка в об'єкт Date.
 *
 * date - Об'єкт Date, в який потрібно встановити дату.
 * isoString - Рядок дати в форматі ISO.
 *
 * Повертає об'єкт Date з встановленою датою, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setDateDetails(date, isoString) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (typeof date.getTime() !== 'number') {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Перевірка, чи є вхідний ISO рядок валідним, отримавши дату з рядка та перевірити чи є результат числом,
    if (typeof new Date(isoString).getDate() !== 'number') {
      //  якщо ні виводимо повідомлення "Помилка: недійсний ISO рядок"
      return `Помилка: недійсний ISO рядок`
    } else {
      // Встановлюємо дату з ISO рядка в об'єкт Date.
      date = new Date(isoString)
      // Повертаємо об'єкт Date з встановленою датою.
      return date
    }
  }
}
console.log('Завдання: 2 ==============================')
const date = new Date()
console.log(setDateDetails(date, '2023-12-25T00:00:00Z'))
//Виведе 2023-12-25T00:00:00.000Z

// Завдання 3
/**
 * Функція `dateToUTC` приймає об'єкт Date та повертає рядок, що представляє дату в UTC форматі.
 *
 * date - Об'єкт Date.
 *
 * Повертає рядок з датою в UTC форматі, якщо вхідне значення є дійсним об'єктом Date. Якщо ні, виводить повідомлення про помилку.
 */
function dateToUTC(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (typeof date.getTime() !== 'number') {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Повертаємо рядок з датою в UTC форматі.
    return date.toUTCString()
  }
}

console.log('Завдання: 3 ==============================')
console.log(dateToUTC(new Date()))
//Виведе Tue, 27 Jun 2023 07:15:47 GMT

// Завдання 4
/**
 * Функція `setSpecificTime` приймає об'єкт Date та встановлює конкретний час.
 *
 * date - Об'єкт Date.
 * hours - Кількість годин.
 * minutes - Кількість хвилин.
 * seconds - Кількість секунд.
 * milliseconds - Кількість мілісекунд.
 *
 * Повертає об'єкт Date з встановленим часом, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setSpecificTime(
  date,
  hours,
  minutes,
  seconds,
  milliseconds,
) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (typeof date.getTime() !== 'number') {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Встановлюємо конкретний час в об'єкті Date за допомогою setHours.
    date.setHours(hours, minutes, seconds, milliseconds)
    // Повертаємо об'єкт Date з встановленим часом.
    return date
  }
}
console.log('Завдання: 4 ==============================')
console.log(
  setSpecificTime(
    new Date('2023-12-25T00:00:00.000Z'),
    12,
    30,
    0,
    0,
  ),
)
//Виведе 2023-12-25T09:30:00.000Z

// Завдання 5

/**
 * Функція `nextNewYear` приймає об'єкт Date і повертає час до наступного Нового року.
 *
 *
 * Повертає об'єкт з інформацією про час до наступного Нового року:
 * {
 *   days: // Кількість днів до Нового року.
 *   hours: // Кількість годин до Нового року, не включаючи повні дні.
 *   minutes: // Кількість хвилин до Нового року, не включаючи повні години.
 *   seconds: // Кількість секунд до Нового року, не включаючи повні хвилини.
 *   milliseconds: // Кількість мілісекунд до Нового року, не включаючи повні секунди.
 * }
 */
function nextNewYear() {
  // Створюєму змінну в яку записуємо поточну дату
  const today = new Date()
  // Визначення поточного року.
  const thisYear = today.getFullYear()
  // Визначення дати наступного Нового року. Для цього створюємо новий об`єкт Date в якому збільшуємо поточний рік на 1, встановлюємо місяць на 0 а дату на 1
  const newYear = new Date()
  newYear.setFullYear(thisYear + 1)
  newYear.setMonth(0)
  newYear.setDate(1)
  // Визначаємо кількість мілісекунд до наступного Нового року в змінну diff.
  newYear.setHours(0, 0, 0, 0) // *************************************************************не було в умові, але без них будуть 0000 у відповіді, бо відніме поточне значення****************************************************
  const diff = newYear - today
  // Розраховуємо кількість повних днів, годин, хвилин і секунд.
  // Дні:diff / (1000 * 60 * 60 * 24)
  const days = diff / (1000 * 60 * 60 * 24)
  const hours = (diff / (1000 * 60 * 60)) % 24 // Години:(diff / (1000 * 60 * 60)) % 24
  const minutes = (diff / (1000 * 60)) % 60 // Хвилини: (diff / (1000 * 60)) % 60;
  const seconds = (diff / 1000) % 60 // Секунди:(diff / 1000) % 60;
  const milliseconds = diff % 1000 // Мілісекунди:  diff % 1000;

  console.log(
    `*********************видає на 1 годину більше ніж треба (можливо через неврахований перехід на зимовий час, бо зараз ще літній)********************`,
  )
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  }
}

console.log('Завдання:5  ==============================')

console.log(nextNewYear())
//Виведе

// Завдання 6
/**
 * Функція `isLeapYear` перевіряє, чи є рік високосним.
 *
 * year - Рік, який треба перевірити.
 *
 * Повертає об'єкт:
 * {
 *   year: // Рік, який був перевірений.
 *   isLeap: // Чи є рік високосним.
 * }
 */
function isLeapYear(year) {
  // Перевірка, чи є вхідне значення числом якщо ні повертаємо рядок .
  if (typeof year !== 'number') {
    return `Ця зіркова дата відсутня на мапі часу`
  }
  // Перевірка, чи є рік високосним.
  // Високосним вважається рік, який ділиться націло на 4
  const isLeap = year % 4 === 0 ? true : false
  // Повертаємо об'єкт з роком та інформацією про те, чи є він високосним.
  return { year: year, isLeap: isLeap }
}
console.log('Завдання: 6 ==============================')

console.log(isLeapYear(2020))
//Виведе { year: 2020, isLeap: true }

// Завдання 7
/**
 * Функція `addDays` додає задану кількість днів до вказаної дати.
 *
 * date - Об'єкт Date.
 * days - Кількість днів, які треба додати.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   addedDays: // Кількість доданих днів.
 *   resultDate: // Результуюча дата в форматі 'гггг-мм-дд'.
 * }
 */
function addDays(date, days) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (typeof date.getTime() !== 'number') {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Перевірка, чи є кількість днів числом.
    if (typeof days !== 'number') {
      // Якщо days не є числом, функція поверне рядок
      // "Помилка: кількість днів має бути числом" та повертає undefined.
      console.log(`Помилка: кількість днів має бути числом`)
      return undefined
    } else {
      // Збереження початкової дати для виведення в форматі ISO.
      const inputDate = date.toISOString()
      // Додавання заданої кількості днів до дати.
      date.setDate(date.getDate() + 7)
      // Збереження результуючої дати для виведення в форматі ISO.
      const resultDate = date.toISOString()
      // Повертаємо об'єкт з початковою датою, кількістю доданих днів та результуючою датою.
      return {
        inputDate: inputDate,
        addedDays: days,
        resultDate: resultDate,
      }
    }
  }
}
console.log('Завдання: 7 ==============================')

console.log(addDays(new Date('2023-01-01'), 7))
//Виведе
// {
//   inputDate: '2023-01-01T00:00:00.000Z',
//   addedDays: 7,
//   resultDate: '2023-01-08T00:00:00.000Z'
// }

// Завдання 8
/**
 * Функція `getDayOfWeek` повертає день тижня вказаної дати українською мовою.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   dayOfWeek: // День тижня українською мовою.
 * }
 */
let daysOfWeek = [
  'неділя',
  'понеділок',
  'вівторок',
  'середа',
  'четвер',
  'п’ятниця',
  'субота',
]

function getDayOfWeek(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (typeof date.getTime() !== 'number') {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Збереження початкової дати для виведення  в форматі ISO.
    const inputDate = date.toISOString()
    // Отримання дня тижня як числа (0 - неділя, 1 - понеділок, ..., 6 - субота).
    const dayIndex = date.getDay()
    // Отримання назви дня тижня з масиву daysOfWeek за індексом.
    const dayName = daysOfWeek[dayIndex]
    // Повертаємо об'єкт з початковою датою та днем тижня.
    return {
      inputDate: inputDate,
      dayOfWeek: dayName,
    }
  }
}
console.log('Завдання: 8 ==============================')

console.log(getDayOfWeek(new Date('2023-01-01')))
//Виведе { inputDate: '2023-01-01T00:00:00.000Z', dayOfWeek: 'неділя' }

// Завдання 9
/**
 * Функція `getDaysInMonth` повертає кількість днів у місяці вказаної дати.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   daysInMonth: // Кількість днів у місяці.
 * }
 */
function getDaysInMonth(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (typeof date.getTime() !== 'number') {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Збереження початкової дати для виведення  в форматі ISO.
    const inputDate = date.toISOString()
    // Отримання поточного місяця.
    const month = date.getMonth() + 1
    // Отримання поточного року.
    const year = date.getFullYear()
    // Створення об'єкта Date для першого дня наступного місяця.
    const nextMonthFirstDate = new Date(year, month, 1)
    // Віднімання одного дня від наступного місяця, щоб отримати останній день поточного місяця.
    const lastDeyOfCurrentMonth = new Date(
      nextMonthFirstDate - 1,
    )
    // Отримання числа останнього дня поточного місяця - це кількість днів у місяці.
    const daysInMonth = lastDeyOfCurrentMonth.getDate()
    // Повертаємо об'єкт з початковою датою та кількістю днів у місяці.
    return {
      inputDate: inputDate,
      daysInMonth: daysInMonth,
    }
  }
}
console.log('Завдання: 9 ==============================')

console.log(getDaysInMonth(new Date('2023-02-01')))
//Виведе { inputDate: '2023-02-01T00:00:00.000Z', daysInMonth: 28 }

// Завдання 10
/**
 * Функція `getFormattedTime` повертає час в форматі 'гг:хх:сс'.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   formattedTime: // Час в форматі 'гг:хх:сс'.
 * }
 */
function getFormattedTime(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (typeof date.getTime() !== 'number') {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Збереження початкової дати для виведення  в форматі ISO.
    const inputDate = date.toISOString()
    // Отримання годин.
    const hours = date.getHours()
    // Отримання хвилин.
    const minutes = date.getMinutes()
    // Отримання секунд.
    const seconds = date.getSeconds()
    // Форматування часу у вигляді 'гг:хх:сс', ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.
    const formattedTime = `${hours
      .toString()
      .padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
    // Повертаємо об'єкт з початковою датою та отформатованим часом.
    return {
      inputDate: inputDate,
      formattedTime: formattedTime,
    }
  }
}
console.log('Завдання: 10 ==============================')

console.log(
  getFormattedTime(new Date('2023-12-25T09:30:00.000Z')),
)
//Виведе { inputDate: '2023-12-25T09:30:00.000Z', formattedTime: '12:30:00' }

// Завдання 11
/**
 * Функція `getAge` обчислює вік на підставі вказаної дати народження.
 *
 * birthDate - Об'єкт Date, представляє дату народження.
 *
 * Повертає об'єкт:
 * {
 *   birthDate: // Дата народження в форматі 'гггг-мм-дд'.
 *   age: // Обчислений вік.
 * }
 */
function getAge(birthDate) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є birthDate.getTime по типу функція .
  // Якщо birthDate не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (typeof birthDate.getTime() !== 'number') {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Отримання поточної дати.
    const today = new Date()
    // Вираховування різницю років між поточною датою та датою народження.
    let diff = today.getFullYear() - birthDate.getFullYear()
    // Перевірка, чи поточна дата ще не пройшла день народження, тобто поточний місяць має бути менше, а якщо дорівнює дата має бути менше.
    if (
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate()) ||
      today.getMonth() < birthDate.getMonth()
    ) {
      // Якщо день народження ще не пройшов, вік потрібно зменшити на 1.
      diff--
    }
    // Збереження дати народження для виведення в форматі ISO.
    const birthDateISO = birthDate.toISOString()
    // Повертаємо об'єкт з датою народження та обчисленим віком.
    return {
      birthDate: birthDateISO,
      age: diff,
    }
  }
}
console.log('Завдання: 11 ==============================')

console.log(getAge(new Date('1990-05-15')))
//Виведе { birthDate: '1990-05-15T00:00:00.000Z', age: 33 }

// Завдання 12
/**
 * Функція `compareDates` порівнює дві дати і повертає результат порівняння.
 *
 * date1 - Об'єкт Date.
 * date2 - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   date1: // Перша дата в форматі 'гггг-мм-дд'.
 *   date2: // Друга дата в форматі 'гггг-мм-дд'.
 *   comparison: // Результат порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
 * }
 */
function compareDates(date1, date2) {
  // Перевірка, чи є вхідні значення об'єктами Date.
  // Якщо date1 або date2 не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (
    typeof date1.getTime() !== 'number' ||
    typeof date2.getTime() !== 'number'
  ) {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Порівняння дат і отримання результату порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
    let result = null
    if (date1 === date2) {
      result = 0
    } else {
      result = date1 < date2 ? -1 : 1
    }
    // Збереження дат для виведення  в форматі ISO.
    const firstDate = date1.toISOString()
    const secondDate = date2.toISOString()
    // Повертаємо об'єкт з порівнюваними датами та результатом порівняння.
    return {
      date1: firstDate,
      date2: secondDate,
      omparison: result,
    }
  }
}
console.log('Завдання: 12 ==============================')

console.log(
  compareDates(
    new Date('2023-01-01'),
    new Date('2022-12-31'),
  ),
)
//Виведе
// {
//   date1: '2023-01-01T00:00:00.000Z',
//   date2: '2022-12-31T00:00:00.000Z',
//   comparison: 1
// }

// Завдання 13
/**
 * Функція `getDaysDifference` обчислює різницю в днях між двома датами.
 *
 * startDate - Початкова дата.
 * endDate - Кінцева дата.
 *
 * Повертає об'єкт:
 * {
 *   startDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   endDate: // Кінцева дата в форматі 'гггг-мм-дд'.
 *   daysDifference: // Різниця в днях між двома датами.
 * }
 */
function getDaysDifference(startDate, endDate) {
  // Перевірка, чи є вхідні значення об'єктами Date.
  // Якщо startDate або endDate не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  if (
    typeof startDate.getTime() !== 'number' ||
    typeof endDate.getTime() !== 'number'
  ) {
    return `Помилка: вхідне значення має бути об'єктом Date`
  } else {
    // Отримання часу в мілісекундах для початкової та кінцевої дати.
    const startDateTime = startDate.getTime()
    const endDateTime = endDate.getTime()
    // Різниця в мілісекундах між двома датами.
    const diffTime = endDateTime - startDateTime
    // Перетворення різниці в мілісекундах у дні поділивши мілісекунди на (1000 * 60 * 60 * 24).
    const diffDay = diffTime / (1000 * 60 * 60 * 24)
    // Збереження дат для виведення в форматі ISO.
    const startDateISO = startDate.toISOString()
    const endDateISO = endDate.toISOString()
    // Повертаємо об'єкт з початковою та кінцевою датами та різницею в днях.
    return {
      startDate: startDateISO,
      endDate: endDateISO,
      daysDifference: diffDay,
    }
  }
}
console.log('Завдання: 13 ==============================')

console.log(
  getDaysDifference(
    new Date('2023-01-01'),
    new Date('2023-01-10'),
  ),
)
//Виведе
// {
//   startDate: '2023-01-01T00:00:00.000Z',
//   endDate: '2023-01-10T00:00:00.000Z',
//   daysDifference: 9
// }
