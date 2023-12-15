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
}