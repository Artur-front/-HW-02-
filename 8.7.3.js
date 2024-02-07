// Исходный массив пользователей
const users = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 17 },
    { name: 'Mike', age: 25 },
    { name: 'Sarah', age: 16 },
  ];
  
  // Фильтрация пользователей по возрасту
  const filteredUsers = users.filter(user => user.age >= 18);
  
  // Получение массива имён пользователей
  const names = filteredUsers.map(user => user.name);
  
  console.log(names); // ['John', 'Mike']