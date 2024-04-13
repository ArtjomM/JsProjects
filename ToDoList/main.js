const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    // Если в поле ввода ничего не написано выводится ошибка
    if (inputBox.value === '') {
        alert("You must write something");
    }
    else {
        //Создается переменая ли и создает элемент ли, с текстом и дальше она выводится на сайт
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //Создает крестик справа от ли элемента
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //обнуляет поле ввода
    inputBox.value = "";
    saveData();
}
//клик
listContainer.addEventListener("click", function (e) {
    //Если при клике на LI элемент то к нему доавляется класс чекд 
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    //Если кликаевтся на спан(крестик) то содержимое удаляется
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// функция чтобы сохранять данные при закрытие браузера или при его перагрузки
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
//Функция которая показывает сохраняные таски в браузере
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();




document.getElementById("input-box")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("Button-Add").click();
        }
    });