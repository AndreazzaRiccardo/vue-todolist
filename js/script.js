const {createApp} = Vue;

createApp({
    data () {
        return {
            toDoList: [],
            toDo: "",
        }
    },
    created () {

    },
    methods: {
        addToList: function () {
            if(this.toDo !== "") {
                this.toDoList.push({
                    text: this.toDo,
                    done: false
                });
            }
            this.toDo = "";
        },
        deleteThis: function (index) {
            this.toDoList.splice(index, 1);
        },
        checked: function (index) {
            this.toDoList[index].done = !this.toDoList[index].done
        }
    }
}).mount("#app")