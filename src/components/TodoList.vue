!<template>
  <div class="todo-list">
    <div class="todo-list__container">
        <TodoItem 
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        />
        
        

    </div>

  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    components: {
        TodoItem,
    },

    props: [
        'todos',
    ],

    data() {
        return {

        }
    }
};
</script>

<style lang="less">
.todo-list {
    height: 100vh;
    background-color: #f5f5f5;

    &__container {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}
</style>