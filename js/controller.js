import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

view.elementControll.form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (view.elementControll.inputAdd.value.trim().length > 0){
        const note = model.pushNote(view.elementControll.inputAdd.value)
    }
})