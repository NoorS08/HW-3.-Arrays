// Methods ***********************************************************************************

//task #1
// let arr = ["a", "b", "c", "d", "e"];
// arr.splice(0, 3); // מוחק 3 איברים החל מהאינדקס 0

// console.log(arr); // ['d', 'e']

//task #2
// let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.splice(2, 1, '1', '2', '3');

// console.log(arr); // ['a', 'b', '1', '2', '3', 'd', 'e']

//task #2.1
// const fruits = ["apple", "banana", "cherry", "date", "fig", "grape"];

// const slicedFruits = fruits.slice(1, 4);     // אינדקסים 1 עד 3
// const lastThree = fruits.slice(-3);          // שלושת האחרונים

// console.log(slicedFruits); // ["banana", "cherry", "date"]
// console.log(lastThree);    // ["date", "fig", "grape"]

//task #2.2
// const animals1 = ["cat", "dog", "rabbit"];
// const animals2 = ["lion", "tiger"];
// const animals3 = ["elephant", "giraffe"];

// // איחוד של שלושת המערכים
// const allAnimals = animals1.concat(animals2).concat(animals3);

// console.log(allAnimals);
// // פלט: ["cat", "dog", "rabbit", "lion", "tiger", "elephant", "giraffe"]

//task #2.3
// const people = [
//   { firstName: "John", lastName: "Smith" },
//   { firstName: "Anna", lastName: "Brown" },
//   { firstName: "James", lastName: "Gift" },
//   { firstName: "Zoe", lastName: "Adams" },
//   { firstName: "Emily", lastName: "Smith" },
// ];

// people.sort((a, b) => a.lastName.localeCompare(b.lastName));

// console.log(people);

//task #2.4
// const words = ["banana", "apple",  "kiwi", "strawberry", "fig", "pineapple", "grape",];

// words.sort((a, b) => b.length - a.length);

// console.log(words);

//task #3
// let arr = ['d', 'b', 'a', 'c'];

// arr.sort().reverse();

// console.log(arr); // ['d', 'c', 'b', 'a']

//task #3.1
// const employees = [
//   { name: "יורם", salary: 7500 },
//   { name: "אור", salary: 5000 },
//   { name: "ליאון", salary: 12000 },
//   { name: "דניאל", salary: 9000 },
// ];

// // שלב 1: מיון בסדר עולה לפי משכורת
// employees.sort((a, b) => a.salary - b.salary);

// console.log("Sorted by salary ascending:");
// console.log(employees);

// // שלב 2: הפיכת הסדר לירידה (משכורת גבוהה ראשונה)
// employees.reverse();

// console.log("Sorted by salary descending:");
// console.log(employees);

//task #4
// let str = '123456789';

// let reversed = str.split('').reverse().join('');

// console.log(reversed); // '987654321'

//task #4.1
// let str = "Dana,Yossi,Aviv,Noa,Lior";

// // שלב 1: פיצול לפי פסיקים
// let names = str.split(","); // ['Dana', 'Yossi', 'Aviv', 'Noa', 'Lior']

// // שלב 2: מיון אלפביתי
// names.sort(); // ['Aviv', 'Dana', 'Lior', 'Noa', 'Yossi']

// // שלב 3: חיבור עם מקפים
// let result = names.join("-"); // "Aviv-Dana-Lior-Noa-Yossi"

// // שלב 4: הדפסה
// console.log(result);

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
