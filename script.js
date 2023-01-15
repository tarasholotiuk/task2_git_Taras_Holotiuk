// task 1
function myFunction(a, b) {
  if (a % 2 == 0) {
    console.log(a * b)
  } else {
    console.log(a + b)
  }
}
myFunction(3, 4)
myFunction(2, 5)

// task 2
function findQuarter(x, y) {
  let result;
  if (x == 0 || y == 0) {
    result = "Точка принадлежит оси координат"
  } else if (x < 0) {
    if (y > 0) {
      result = "Точка принадлежит 1-й четверти"
    } else {
      result = "Точка принадлежит 3-й четверти"
    }
  } else {
    if (y > 0) {
      result = "Точка принадлежит 2-й четверти"
    } else {
      result = "Точка принадлежит 4-й четверти"
    }
  }
  console.log(result)
}
findQuarter(-3, 5)
findQuarter(3, 5)
findQuarter(-3, -5)
findQuarter(3, -5)
findQuarter(3, 0)

// task 3
function sumPositive(arr) {
  let sum = 0
  arr.forEach(element => {
    if (element > 0) {
      sum += element
    }
  })
  console.log(sum)
}
// function sumPositive(arr) {
//   let sum = arr.filter(item => item > 0).reduce((a, b) => a + b)
//   console.log(sum)
// }
//завдання також можна виконати через filter і reduce, але так як тема "Умовні оператори", то виконав таким методом
sumPositive([-2, 4, 7, -9, 2])


// task 4
function findMax(a, b, c) {
  let sum = a + b + c
  let multi = a * b * c
  if (sum > multi) {
    console.log(sum += 3)
  } else {
    console.log(multi += 3)
  }
}
// function findMax(a, b, c) {
//   console.log(Math.max(a * b * c, a + b + c) + 3)
// }   
// коротший варіант не використовуючи if...else
findMax(1, 2, 1);
findMax(3, 4, 1);