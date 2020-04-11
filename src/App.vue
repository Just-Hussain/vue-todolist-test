<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TodoList></TodoList>
    <footer>
      <a 
        class="fab fa-twitter" 
        :href="`https://twitter.com/${twitter}`"
        target="_blank"
      >
        {{twitter}}
      </a>
    </footer>  
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',

  components: {
    TodoList
  },

  data: function() {
    return {
      twitter: 'Just_Hussain0'
    }
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

footer {
  position: absolute;
  bottom: 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}

</style>
