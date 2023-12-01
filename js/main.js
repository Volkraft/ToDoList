// переменные
const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');
const inputSearch = document.querySelector('#inputSearch');


// Функции


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
        listNotes.insertAdjacentHTML('afterbegin', newNote);
        inputAdd.value = '';
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

function alertInput(){
    inputAdd.style.border = '2px solid red'
}

// события
form.addEventListener('submit', renderNote);
inputAdd.addEventListener('input', inputTransperent);
inputSearch.addEventListener('keyup', filterNotes);
listNotes.addEventListener('click', removeNoteFromRender);
