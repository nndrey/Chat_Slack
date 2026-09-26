// test.js

const users = [
  { id: 1, name: "Alice", admin: true },
  { id: 2, name: "Bob", admin: false },
];

// Добавили console.log - теперь переменная "используется"
const adminUserLegacy = users.filter((user) => user.admin)[0];
console.log(adminUserLegacy);

const status = "pending";
const color = status === "done" ? "green" : status === "error" ? "red" : "gray";
console.log(color); // И здесь тоже добавили использование
