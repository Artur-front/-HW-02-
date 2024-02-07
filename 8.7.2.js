function calculate(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return "Неверный оператор";
    }
  }
  
  const values = [2, 3, "+"];
  const result = calculate.apply(null, values);
  console.log(result);