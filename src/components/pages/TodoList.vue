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
        @edit-todo="handleEditTodo"
        @update-priority="handleUpdatePriority"
        /> 

        <div v-if="todos.length === 0" class="no-todos">
        <p> Тут пока нет задач </p>
        </div>

    </transition-group>

  </div>
</template>

<script>
import TodoItem from '../features/todos/TodoItem.vue';

export default {
    components: {
        TodoItem,
    },

    props: [
        'todos',
    ],

    data() {
        return { }
    },

    methods: {
        toggleCompleted(todoId) {
            this.$emit('toggle-completed', todoId); 
        },

        handleDeleteTodo(todoId) {
            this.$emit('delete-todo', todoId);
        },

        handleEditTodo(payload) {
            this.$emit('edit-todo', payload);
        },

        handleUpdatePriority({id, priority}) {
          this.$emit('update-priority', {id, priority})
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

.no-todos {
  margin-left: 240px;
  margin-top: 20px;
  color: #ef0000;
  font-style: italic;
  font-size: 20px;
}

.todo-animation-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.todo-animation-enter-active {
  transition: all 0.3s ease-out; 
}

.todo-animation-leave-to {
  opacity: 0;
  transform: translateX(50px); 
}
.todo-animation-leave-active {
  position: absolute; // Чтобы соседние элементы плавно сдвигались 
  width: 100%;
  transition: all 0.4s ease-in;
}

// Анимация ПЕРЕМЕЩЕНИЯ (на будущее) 
.todo-animation-move {
  transition: transform 0.5s ease;
}


</style>