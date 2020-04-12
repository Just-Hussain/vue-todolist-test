<template>
    <div>
        <h1>Todos from db:</h1>
        <p
            :todo="todo"
            :key="todo.id"
            v-for="todo in todos"
        >
            {{todo.text}}
        </p>
    </div>
</template>

<script>
import TodoService from './../services/TodoService'

export default {
    name: 'DbTodos',

    data() {
        return {
            todos: []
        }
    },

    async mounted() {
        this.todos = (await TodoService.get()).data
    }
}
</script>

<style>

</style>