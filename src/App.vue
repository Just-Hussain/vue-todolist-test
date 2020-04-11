<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TodoList></TodoList>  
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #b4c7d0;
  margin-top: 60px;
}

</style>
