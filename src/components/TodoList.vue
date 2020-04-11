<template>
<div>
    <h1>This is, {{ msg }}, a Todo app!</h1>

    <TodoListInput
        v-model="todoText"
        @keyup.enter="addTodo"
    ></TodoListInput>

    <h2>Todo:</h2>
    <ul v-if="pending.length">
        <TodoListItem
            :todo="todo"
            v-bind:key="todo.id"
            v-for="todo in pending"
            @del-todo="delTodo(todo.id)"
            @check-todo="checkTodo(todo.id)"
        ></TodoListItem>
    </ul>
    <p v-else>No todos bruh</p>
    
    <br><br>
    
    <h2>Done:</h2>
    <ul v-if="done.length">
        <TodoListItem
            :todo="todo"
            v-bind:key="todo.id"
            v-for="todo in done"
            @del-todo="delTodo(todo.id)"
            @undo-todo="undoTodo(todo.id)"
        ></TodoListItem>
    </ul>
    <p v-else>complete some bruh</p>

</div>
</template>

<script>
import TodoListInput from './TodoListInput'
import TodoListItem from './TodoListItem'

// this registers the component
// also here is the place to define all data mthods
// <name> is just for easier debugging
// props defines vars used in the template
// each prop can have an option object
// options object specifies attributes of the prop
export default {
    name: 'TodoList',

    components: {
        TodoListInput, 
        TodoListItem
    },

    data() {
        return {
            todoText: '',
            msg: 'probably',
            nextTodoId: 1,
            todos: [
                {
                    id: -1,
                    text: 'test1',
                    isDone: false
                },
                {
                    id: -0,
                    text: 'test2',
                    isDone: false
                }
            ]
        }
    },
    
    methods: {
        addTodo() {
            if (this.todoText) {
                console.log(`hey here: ${this.todoText}`);
                this.todos.push({
                    id: this.nextTodoId++,
                    text: this.todoText,
                    isDone: false 
                })
                this.todoText = ''
            }
            
        },

        delTodo(id) {
            this.todos = this.todos.filter(todo => {
                return todo.id !== id
            })
        },

        checkTodo(id) {
            this.todos.filter(todo => {
                if (todo.id === id) {
                    todo.isDone = true;
                }
            })
        },

        undoTodo(id) {
            this.todos.filter(todo => {
                if (todo.id === id) {
                    todo.isDone = false;
                }
            })    
        }
    },

    computed: {
        done() {
            return this.todos.filter(todo => {
                return todo.isDone === true
            })
        },

        pending() {
            return this.todos.filter(todo => {
                return todo.isDone === false
            })
        }
    }
    
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>