// Функція для перевірки заповнення форми
function checkFormCompletion() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {  // Якщо всі поля заповнені
        document.getElementById('content').style.display = 'block';  // Показуємо основний контент
        document.getElementById('form-section').style.display = 'none';  // Ховаємо форму
    } else {
        alert('Будь ласка, заповніть усі поля форми!');
    }
}
function generateFile() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        // Формуємо текст для файлу
        var fileContent = "Ім'я: " + name + "\nЕлектронна пошта: " + email + "\nПовідомлення: " + message + "\n";

        // Створюємо Blob (об'єкт, що містить дані)
        var blob = new Blob([fileContent], { type: 'text/plain' });

        // Створюємо URL для скачування файлу
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'form_data.txt'; // Ім'я файлу

        // Симулюємо клік, щоб завантажити файл
        link.click();
    } else {
        alert('Будь ласка, заповніть усі поля форми!');
    }
}