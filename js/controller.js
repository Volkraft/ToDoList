import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.allNotes);

view.elementControll.form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    if (view.elementControll.inputAdd.value.trim().length > 0){
        const note = model.pushNote(view.elementControll.inputAdd.value)
        view.render(note)
        view.clearInput()

    }
    else {
        view.alertInput()
    }
})

view.elementControll.inputAdd.addEventListener('input', () => {
    if (view.elementControll.inputAdd.style.border === '2px solid red'){
        view.inputTransperent()
            
    } 
})

view.elementControll.listNotes.addEventListener('click', (e) => {
    const currentBtnRemove = e.target;
    if(currentBtnRemove.classList.contains('btn-action--remove')) {
        const note = currentBtnRemove.closest('.list-notes__item')
        model.removeFromArray(e.target.previousElementSibling.innerText)
        view.removeFromRender(note)
    }
})