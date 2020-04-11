<template>
    <li>
        {{todo.text}}
        <button 
            class="fas fa-trash"
            @click="$emit('del-todo')"></button
        >
        <button v-if="!todo.isDone"
            class="fas fa-check"
            @click="$emit('check-todo')"></button
        >
        <button v-else
            class="fas fa-undo"
            @click="$emit('undo-todo')"
        ></button>
    </li>
</template>

<script>
export default {
    name: 'TodoListItem',
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    li {
        margin: 20px;
        font-size: 25px;
    }

    button {
        color: #42b983;
        background: none;
        border: none;
    }

    button:focus {
        outline: 0px;
    }
</style>