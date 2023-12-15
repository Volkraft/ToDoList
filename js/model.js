export default class Model {
    constructor(){
        this.allNotes = [];
        this.loadFromLocalStorage();
    }


    loadFromLocalStorage(){
        const data = localStorage.getItem('DataBase');
        if (data) {
            this.allNotes = JSON.parse(data)
        }
    }

    pushNote(text){
        this.allNotes.push(text)
        this.saveStorage()
    }

    saveStorage(){
        localStorage.setItem('DataBase', JSON.stringify(this.allNotes));
    }
}