import axios from 'axios'

export default {
    get() {
        // return fetch('http://localhost:8082/test', {
        //     mode: 'no-cors'
        // })
        return axios.get('http://localhost:8082/todo')
    },

    post(todo) {
        return axios.post('http://localhost:8082/todo', todo);
    }
}