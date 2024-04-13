// If user press Enter data will be send

document.getElementById("Name_city")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("buttonEnter").click();
        }
    });