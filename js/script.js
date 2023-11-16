const {createApp} = Vue;

createApp({
    data () {
        return {
            toDoList: [],
            toDo: "",
            doneList: []
        }
    },
    created () {
       this.addFromStorage(); 
    },
    methods: {
        // Allo start della pagina autocompila i campi richiamando gli oggetti salvati nel local storage
        addFromStorage: function() {
            if(localStorage.getItem("List") !== null){
            this.toDoList = JSON.parse(localStorage.getItem("List"));
            }
            if(localStorage.getItem("doneList") !== null){
            this.doneList = JSON.parse(localStorage.getItem("doneList"));
            }
        },
        // Ad ogni iterazione, esegue il refresh delle key salvate nel local storage
        refreshStorage: function() {
            localStorage.setItem("List", JSON.stringify(this.toDoList));
            localStorage.setItem("doneList", JSON.stringify(this.doneList));
        },
        // Aggiunge un nuovo oggetto alla lista
        addToList: function () {
            let item = {
                text: this.toDo,
                done: false
            }
            if(this.toDo !== "") {
                this.toDoList.push(item);
                localStorage.setItem("List", JSON.stringify(this.toDoList));
            }
            this.toDo = "";
        },
        // Cancella un'oggetto dalla lista
        deleteThis: function (myArray, index) {
            if(!myArray[index].done){
                this.toDoList.splice(index, 1);
            } else {
                this.doneList.splice(index, 1);
            }
            this.refreshStorage();
        },
        // Sposta un oggetto nella sezione done
        checkedDone: function (index) {
            this.toDoList[index].done = !this.toDoList[index].done;
            this.doneList.push(this.toDoList[index]);
            this.toDoList.splice(index, 1);
            this.refreshStorage();
        },
        // Ripristina un'oggetto dalla sezione done
        notDone: function(index) {
            this.doneList[index].done = !this.doneList[index].done;
            this.toDoList.push(this.doneList[index]);
            this.doneList.splice(index, 1);
            this.refreshStorage();
        }
    }
}).mount("#app")