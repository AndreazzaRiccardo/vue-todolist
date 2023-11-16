const {createApp} = Vue;

createApp({
    data () {
        return {
            toDoList: [],
            toDo: "",
            doneList: [],
            placeHolder: "Write here",
            inputFlag: false
        }
    },
    created () {
       this.addFromStorage(); 
    },
    methods: {
        // Allo start della pagina autocompila i campi richiamando gli oggetti salvati nel local storage
        addFromStorage() {
            if(localStorage.getItem("ToDoList") !== null){
            this.toDoList = JSON.parse(localStorage.getItem("ToDoList"));
            }
            if(localStorage.getItem("doneList") !== null){
            this.doneList = JSON.parse(localStorage.getItem("doneList"));
            }
        },
        // Ad ogni iterazione, esegue il refresh delle key salvate nel local storage
        refreshStorage() {
            localStorage.setItem("ToDoList", JSON.stringify(this.toDoList));
            localStorage.setItem("doneList", JSON.stringify(this.doneList));
        },
        // Aggiunge un nuovo oggetto alla lista
        addToList() {
            if(this.toDo !== "") {
                let item = {
                    text: this.toDo,
                    done: false
                }
                this.toDoList.push(item);
                localStorage.setItem("ToDoList", JSON.stringify(this.toDoList));
            } else {
                this.inputFlag = true;
                this.placeHolder = "Empty is not a value";
            }
            this.toDo = "";
        },
        // Cancella un'oggetto dalla lista
        deleteThis(myArray, index) {
            if(!myArray[index].done){
                this.toDoList.splice(index, 1);
            } else {
                this.doneList.splice(index, 1);
            }
            this.refreshStorage();
        },
        // Sposta un oggetto nella sezione done
        checkedDone(index) {
            this.toDoList[index].done = !this.toDoList[index].done;
            this.doneList.push(this.toDoList[index]);
            this.toDoList.splice(index, 1);
            this.refreshStorage();
        },
        // Ripristina un'oggetto dalla sezione done
        notDone(index) {
            this.doneList[index].done = !this.doneList[index].done;
            this.toDoList.push(this.doneList[index]);
            this.doneList.splice(index, 1);
            this.refreshStorage();
        },
        // Resetta il messaggio di errore del placeHolder
        resetPlaceHolder() {
            this.inputFlag = false;
            this.placeHolder = "Write here"
        }
    }
}).mount("#app")