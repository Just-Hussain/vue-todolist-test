import Vue from 'vue'
import Router from 'vue-router'

import DbTodos from './../components/DbTodos'
import InsertTodo from './../components/InsertTodo'
import TodoList from './../components/TodoList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: TodoList
        },
        {
            path: '/dbtodos',
            name: 'dbtodos',
            component: DbTodos
        },
        {
            path: '/insert',
            name: 'inserttodo',
            component: InsertTodo
        },
        {
            path: '*',
            redirect: 'home'
        }
    ]
})