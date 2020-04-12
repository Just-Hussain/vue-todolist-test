<template>
    <div>
        <router-link
            class="db-todos"
            :to="{name: 'dbtodos'}"
        >
            SHOW DB TODOS
        </router-link>
        
        <router-link
            class="insert-todo"
            :to="{name: 'inserttodo'}"
        >
        INSERT TODOS INTO DB
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style scoped>

    .db-todos {
        position: absolute;
        left: 10px;
    }
    .insert-todo {
        position: absolute;
        right: 10px;
    }
</style>