// Найти форму прослушать событие
// Получение текста из инпута
// сгенерировать заметку

// переменные
const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');
const inputSearch = document.querySelector('#inputSearch');


// Функции


// Функция рендера
function renderNote(e){
    e.preventDefault();

    if (inputAdd.value.length > 0) {
        const newNote = 
        `
        <li class="list-notes__item">
            <p class="list-notes__text">${inputAdd.value}</p>
            <button class="btn-action btn-action--remove">Remove</button>
        </li>
        `;
        listNotes.insertAdjacentHTML('afterbegin', newNote);
        inputAdd.value = '';
    } 
    else {
        inputAdd.style.border = '2px solid red'
    };
    
};

// Функция удаление из разметки

listNotes.addEventListener('click', (e) => {
    const currentBtnRemove = e.target;
    if (currentBtnRemove.classList.contains('btn-action--remove')) {
        currentBtnRemove.parentNode.remove()
    }
})

// Фильтрация
function filterNotes(e){
    let searchValueLowerCase = e.target.value.toLowerCase();
    const allTextList = listNotes.querySelectorAll('.list-notes__text');
    allTextList.forEach((str) =>{
        const strLowerCase = str.textContent.toLowerCase();
        if (strLowerCase.indexOf(searchValueLowerCase) != -1){
            
        }
    })
}

// события
form.addEventListener('submit', renderNote);
inputAdd.addEventListener('input', function(){
    if (inputAdd.value.length > 0) {
        inputAdd.style.borderColor = 'transparent'
    };
});
inputSearch.addEventListener('keyup', filterNotes);
