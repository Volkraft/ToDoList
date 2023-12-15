// переменные
const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');
const inputSearch = document.querySelector('#inputSearch');
const allNotes = JSON.parse(localStorage.getItem('DataBase')) || [];


// Функции
if (allNotes.length > 0){
    renderStorage()
}

// Функция рендера
function renderNote(e){
    e.preventDefault();

    if (inputAdd.value.trim().length > 0) {
        const newNote = 
        `
        <li class="list-notes__item">
            <p class="list-notes__text">${inputAdd.value}</p>
            <button class="btn-action btn-action--remove">Remove</button>
        </li>
        `;
        pushNote()
        saveStorage()
        listNotes.insertAdjacentHTML('afterbegin', newNote);
        inputAdd.value = '';
        console.log(allNotes);
    } 
    else {
        alertInput()
    };
    
};

// Функция удаление из разметки
function removeNoteFromRender(e){
    const currentBtnRemove = e.target;
    if (currentBtnRemove.classList.contains('btn-action--remove')) {
        currentBtnRemove.parentNode.remove();

        deleteFromArray(e)
    };
};


// Фильтрация
function filterNotes(e){
    let searchValueLowerCase = e.target.value.toLowerCase();
    const allTextList = listNotes.querySelectorAll('.list-notes__text');
    allTextList.forEach((str) =>{
        const strLowerCase = str.textContent.toLowerCase();
        if (strLowerCase.indexOf(searchValueLowerCase) != -1){
            str.closest('.list-notes__item').style.display = 'flex'
        }
        else{
            str.closest('.list-notes__item').style.display = 'none'
        }
        
    })
};

// Подсветка инпута 
function inputTransperent(){
    if (inputAdd.value.length > 0) {
        inputAdd.style.borderColor = 'transparent'
    };
};
// Подсветка не правильной валидации
function alertInput(){
    inputAdd.style.border = '2px solid red'
}
// Пуш заметки в массив
function pushNote(){
    if (allNotes){
        allNotes.push(inputAdd.value)
    }
}
// Сохраням в localStorage
function saveStorage(){
    localStorage.setItem('DataBase', JSON.stringify(allNotes));
}
// функция рендеринга из localStorage
function renderStorage(){
    allNotes.forEach((note) => {
        const noteFromArray = 
        `
        <li class="list-notes__item">
            <p class="list-notes__text">${note}</p>
            <button class="btn-action btn-action--remove">Remove</button>
        </li>
        `;
        listNotes.insertAdjacentHTML('afterbegin', noteFromArray);

    })
}
// функция удаления из localStorage
function deleteFromArray(e){
    allNotes.splice(allNotes.indexOf(e.target.previousElementSibling.innerText), 1);
    saveStorage();
}

// события
form.addEventListener('submit', renderNote);
inputAdd.addEventListener('input', inputTransperent);
inputSearch.addEventListener('keyup', filterNotes);
listNotes.addEventListener('click', removeNoteFromRender);


// const user = {
//     name: 'Мое',
//     surname: 'МоЁ',
//     age: 14,
//     address: {
//         country: 'Россия',
//         city: 'Москва',
//     },
// }
// const userJSON = JSON.stringify(user);
// localStorage.setItem('Заголовок для примера', userJSON);

// const resultFromStorage = localStorage.getItem('Заголовок для примера')
// console.log(resultFromStorage)
// const parseString = JSON.parse(resultFromStorage);
// console.log(parseString);
// const fruits = [
//     'Яблоко',
//     'Банан',
//     'Помидор',
//     'Мандарин',
//     'Апельсин',
//     'Лимон',
// ]
// let index = fruits.indexOf('Мандарин')
// console.log(index);

// function Cars(model, color, cost){
//     this.model = model;
//     this.color = color;
//     this.cost = cost;
//     this.aboutCar = () => {
//         alert(`Это машина стоит ${this.cost}, цвет ${this.color}, модель ${this.model}`)
//     } 
// }

// const BMW = new Cars("X7", "Blue", "18450000")
// BMW.aboutCar()
// console.log(BMW);