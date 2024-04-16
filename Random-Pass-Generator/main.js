const passworodBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]|'/-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = ""; // Создаем пустую строку, которая будет содержать сгенерированный пароль
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passworodBox.value = password;
}

function copyPassword(){
    passworodBox.select();  // Выделяем текст в элементе с id="passwordBox"
    document.execCommand("copy");  // Копируем выделенный текст в буфер обмена
}