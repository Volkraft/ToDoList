export default class View {

    constructor(allNotes){
        allNotes.forEach((note) =>{
            this.render(note)
        })
    }

    elementControll = {
        form: document.querySelector('#form'),
        inputAdd: form.querySelector('#inputAdd'),
        listNotes: document.querySelector('#listNotes'),
        inputSearch: document.querySelector('#inputSearch'),
    }

    render(note){
        const noteFromArray = 
        `
        <li class="list-notes__item">
            <p class="list-notes__text">${note}</p>
            <button class="btn-action btn-action--remove">Remove</button>
        </li>
        `;
        listNotes.insertAdjacentHTML('afterbegin', noteFromArray);
        
    }

    alertInput(){
        this.elementControll.inputAdd.style.border = '2px solid red'
    }

    inputTransperent(){
        this.elementControll.inputAdd.style.border = '2px solid transparent'
    };

    clearInput(){
        this.elementControll.inputAdd.value = ''
    }

    removeFromRender(note){
        note.remove()
    }

    filterNotes(searchValueLowerCase, allTextList){
        allTextList.forEach((str) =>{
            const strLowerCase = str.textContent.toLowerCase();
            if (strLowerCase.indexOf(searchValueLowerCase) != -1){
                str.closest('.list-notes__item').style.display = 'flex'
            }
            else{
                str.closest('.list-notes__item').style.display = 'none'
            }
            
        })
    }
}