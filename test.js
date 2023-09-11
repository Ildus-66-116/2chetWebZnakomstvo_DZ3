function showName(names = 'Ильдус'){
    alert(`Вас зовут ${names}!`);
}
let test = prompt("Введите свое имя: ", "name");
if (test == '')
    showName();
else
    showName(test)