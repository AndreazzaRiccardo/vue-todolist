const {createApp} = Vue;

createApp({
    data () {
        return {
            toDoList: [],
            toDo: "",
        }
    },
    created () {
       this.addFromStorage(); 
    },
    methods: {

        addFromStorage: function() {
            if(localStorage.key(0) !== null){
            this.toDoList = JSON.parse(localStorage.getItem("List"));
            }
        },

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

        deleteThis: function (index) {
            this.toDoList.splice(index, 1);
            localStorage.setItem("List", JSON.stringify(this.toDoList));
        },

        checked: function (index) {
            this.toDoList[index].done = !this.toDoList[index].done;
            localStorage.setItem("List", JSON.stringify(this.toDoList));
        }
    }
}).mount("#app")