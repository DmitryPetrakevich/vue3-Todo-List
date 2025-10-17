<template>
  <div class="todo-view">
    <transition-group
      name="todo-animation"
      tag="div"
      class="todo-view__list"
    >
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-completed="toggleCompleted"
        @delete-todo="deleteTodo"
        @edit-todo="editTodo"
        @update-priority="updatePriority"
        @update-date="updateDate"
      />

      <div
        v-if="todos.length === 0"
        class="todo-view__empty"
      >
        <p>Тут пока нет задач</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
  import { useTodoStore } from "@/stores/todoStore";
  import TodoItem from "../features/todos/TodoItem.vue";

  export default {
    components: {
      TodoItem,
    },

    data() {
      return {
        todoStore: useTodoStore(),
      };
    },

    computed: {
      todos() {
        return this.todoStore.todos;
      },
  },

    methods: {
    toggleCompleted(todoId) {
      this.todoStore.toggleCompleted(todoId);
    },

    deleteTodo(todoId) {
      this.todoStore.deleteTodo(todoId);
    },

    editTodo(payload) {
      this.todoStore.editTodo(payload);
    },

    updatePriority(payload) {
      this.todoStore.updatePriority(payload);
    },

    updateDate(payload) {
      this.todoStore.updateDate(payload);
    },
    },
  };
</script>

<style lang="less">
  .todo-view {
    height: calc(100vh - 60px);
    margin-left: 10px;
    margin-top: 30px;
    background-color: #f5f5f5;

  @media (max-width: 768px) {
    margin-left: 0;

    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  .todo-view__empty {
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
