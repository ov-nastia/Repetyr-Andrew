function calculate() {
    const inputField = document.getElementById('inputNumber');
    const operation = document.getElementById('operation').value;
    const resultField = document.getElementById('result');
    let input;

    // Перевірка на коректність введеного значення
    try {
        input = parseFloat(inputField.value);
        if (isNaN(input)) throw new Error("Введіть коректне число!");

        let result;

        // Виконання обчислення залежно від операції
        switch (operation) {
            case "sqrt":
                if (input < 0) throw new Error("Не можна обчислити корінь з від'ємного числа");
                result = Math.sqrt(input);
                break;
            case "ln":
                if (input <= 0) throw new Error("Логарифм можливий лише для позитивних чисел");
                result = Math.log(input);
                break;
            case "sin":
                result = Math.sin(input);
                break;
            case "cos":
                result = Math.cos(input);
                break;
            case "tan":
                result = Math.tan(input);
                break;
            default:
                throw new Error("Невідома операція");
        }

        // Виведення результату
        resultField.textContent = `Результат: ${result.toFixed(5)}`;
        resultField.style.color = "green";
    } catch (error) {
        // Виведення повідомлення про помилку
        resultField.textContent = `Помилка: ${error.message}`;
        resultField.style.color = "red";
    }
}
