!<template>
  <div class="todo-list">
    <transition-group
    name="todo-animation" 
    tag="div"
    class="todo-list__container"
    >
        <TodoItem 
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-completed="toggleCompleted"
        @delete-todo="handleDeleteTodo"
        />
        
        

    </transition-group>

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
    },

    methods: {
        toggleCompleted(todoId) {
            this.$emit('toggle-completed', todoId); // Прокидываем событие выше
        },

        handleDeleteTodo(todoId) {
            this.$emit('delete-todo', todoId);
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

/* 1. Анимация ДОБАВЛЕНИЯ элемента */
.todo-animation-enter-from {
  opacity: 0;
  transform: translateY(-20px); /* Начальное положение (выше) */
}
.todo-animation-enter-active {
  transition: all 0.3s ease-out; /* Плавное появление */
}

/* 2. Анимация УДАЛЕНИЯ элемента */
.todo-animation-leave-to {
  opacity: 0;
  transform: translateX(50px); /* Уезжает вправо */
}
.todo-animation-leave-active {
  position: absolute; /* Важно! Чтобы соседние элементы плавно сдвигались */
  width: 100%;
  transition: all 0.4s ease-in;
}

/* 3. Анимация ПЕРЕМЕЩЕНИЯ (на будущее) */
.todo-animation-move {
  transition: transform 0.5s ease;
}
}
</style>