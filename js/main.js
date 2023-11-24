// Найти форму прослушать событие
// Получение текста из инпута
// сгенерировать заметку

// переменные
const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');


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

// события
form.addEventListener('submit', renderNote);
inputAdd.addEventListener('input', function(){
    if (inputAdd.value.length > 0) {
        inputAdd.style.borderColor = 'transparent'
    };
});

