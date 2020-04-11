<template>
    <input 
        type="text"
        :value="value"
        placeholder="Enter a Todo..."
        v-on="listeners"
    >
</template>

<script>
// !! for more info check out docs for <v-model>
// simply, v-model with forms connects the value to a var
// by that, both say consistent
// for components, it needs a bit of modifications to workd
// which is to bind the value to a value prop
// and emits a custom event with the value on input

// And, i dunno what`s the computed listener is doing
// but without it, parent component cannot aplly event handlers
export default {
    name: 'TodoListInput',
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        listeners() {            
            return {
                ...this.$listeners, 
                input: event => this.$emit('input', event.target.value)
            }
        }
    }

}
</script>

<style scoped>
    input {
        border: 0ch;
        border-radius: 50px;
        background: whitesmoke;
        padding: 15px;
    }

    input:focus {
        outline: 0px;
    }

</style>