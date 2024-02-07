function getUniqueSortedNumbers(numbers) {
    // Создаем новый Set, чтобы хранить только уникальные числа
    const uniqueNumbers = new Set(numbers);
  
    // Преобразуем Set обратно в массив и сортируем его по возрастанию
    const sortedNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
  
    // Возвращаем отсортированный массив
    return sortedNumbers;
  }
  
  // Пример использования функции
  const numbers = [3, 1, 2, 3, 4, 2, 5, 1];
  const uniqueSortedNumbers = getUniqueSortedNumbers(numbers);
  console.log(uniqueSortedNumbers); // [1, 2, 3, 4, 5]
  