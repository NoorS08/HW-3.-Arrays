// Methods ***********************************************************************************

//task #5
// const fruits = ["apple", "banana", "cherry", "date"];

// // למצוא את המיקום של "banana"
// const index = fruits.indexOf("banana");

// // להסיר ולהוסיף באמצעות splice
// if (index !== -1) {
//   fruits.splice(index, 1, "blueberry", "blackberry");
// }

// console.log(fruits);

//task #6
// const colors = ["red", "orange", "yellow", "green", "blue"];

// const slice = colors.slice(1, 3);

// console.log(slice); // ["orange", "yellow"]

//task #7
// const animals1 = ["cat", "dog"];
// const animals2 = ["lion", "tiger"];
// const allAnimals = animals1.concat(animals2);
// console.log(allAnimals); // ['cat', 'dog', 'lion', 'tiger']

//task #8
// const numbers = [7, 3, 9, 1, 5];

// numbers.sort((a, b) => a - b);

// console.log(numbers); // [1, 3, 5, 7, 9]

//task #9
// const letters = ["a", "b", "c", "d"];

// letters.reverse();

// console.log(letters); // ['d', 'c', 'b', 'a']

//task #10
// const sentence = "JavaScript is awesome";

// const words = sentence.split(" ");

// console.log(words); // ['JavaScript', 'is', 'awesome']

//task #11
// const words = ["Hello", "world"];

// const sentence = words.join(" ");

// console.log(sentence); // "Hello world"

//מעבדים מערכים ***********************************************************************************

//task #14
// const students = ["דני", "נועה", "רן", "תמר"];

// for (let i = 0; i < students.length; i++) {
//   console.log(`שלום , ${students[i]} ! בהצלחה במבחן!`);
// }

//task #15
// const pricesILS = [100, 250, 75, 320];

// const pricesUSD = pricesILS.map(price =>
//   Math.round((price / 3.5) * 100) / 100
// );

// console.log(pricesUSD);

//task #16
// const users = [
//   { username: "Tom", isLoggedIn: true },
//   { username: "Jerry", isLoggedIn: false },
//   { username: "Spike", isLoggedIn: true },
// ];

// const loggedInUsers = users.filter((user) => user.isLoggedIn);

// console.log(loggedInUsers);

//task #17
// const products = [
//   { name: "Book", quantity: 3 },
//   { name: "Pen", quantity: 0 },
//   { name: "Notebook", quantity: 5 }
// ];

// const hasOutOfStock = products.some(product => product.quantity === 0);

// console.log(hasOutOfStock); // true

//task #18
// const grades = [72, 85, 90, 67, 58];

// const allPassed = grades.every(grade => grade >= 60);

// console.log(allPassed); // false

//task #19
// const employees = [
//   { name: "Sharon", salary: 9500 },
//   { name: "David", salary: 7800 },
//   { name: "Lior", salary: 12000 },
// ];

// const highEarners = employees
//   .filter((emp) => emp.salary > 8000) // שלב הסינון
//   .map((emp) => emp.name.toUpperCase()); // שלב המרת השם לאותיות גדולות

// console.log(highEarners);

//task #20
// const books = [
//   { title: "Book A", pages: 450 },
//   { title: "Book B", pages: 520 },
//   { title: "Book C", pages: 600 },
// ];

// let result;

// const hasShortBook = books.some((book) => book.pages < 500);

// if (hasShortBook) {
//   result = books.filter((book) => book.pages > 500);
// } else {
//   result = []; // אם אין – תחזיר מערך ריק או כל דבר אחר שתבחר
// }

// console.log(result);
