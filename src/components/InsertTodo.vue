<template>
    <div>
        <h1>Insert Todo Into DB</h1>
        <TodoListInput
            v-model="newTodo"
            @keyup.enter="insertTodo"
        >

        </TodoListInput>
    </div>
</template>

<script>
import TodoList from './TodoList'
import TodoListInput from './TodoListInput'
import TodoService from './../services/TodoService'

export default {
    name: 'InsertTodo',
    components: {
        TodoListInput
    },
    data() {
        return {
            todos: TodoList.data().todos,
            newTodo: '',
            newTodoId: 101
        }
    },

    methods: {
        async insertTodo() {
            console.log('insertin...');
            
            //TodoList.methods.addTodo();
            await TodoService.post({
                id: this.newTodoId++, text: this.newTodo, isDone: false
            })
            this.newTodo = ''
        }
    }

}
</script>

<style>

</style>