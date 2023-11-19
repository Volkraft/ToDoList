// Найти форму прослушать событие
// Получение текста из инпута
// сгенерировать заметку

// переменные
const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');


// Функции
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
    } 
    else {
        inputAdd.style.border = '2px solid red'
    };
    
}



// события
form.addEventListener('submit', renderNote);

