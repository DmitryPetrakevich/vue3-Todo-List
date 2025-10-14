<template>
  <div class="todo-manager">
    <div class="todo-manager__container">
      <AddTodo @add-todo="todoStore.addTodo" />

      <div class="todo-manager__options">
        <DeleteAllTodos @delete-todos="showDeleteWindow = true" />
        <TodosFilter @sort="sortTodos" />
        <UpdateTodos @update-todos="updateTodos" />
      </div>

      
      <DeleteAllTodosWindow
        v-if="showDeleteWindow"
        @cancel="showDeleteWindow = false"
        @confirm="confirmDeleteAll"
      />
    </div>
    <TodoView/>
  </div>
</template>

<script>
import { useTodoStore } from "@/stores/todoStore";
import AddTodo from "./AddTodo.vue";
import DeleteAllTodosWindow from "./DeleteAllTodosWindow.vue";
import DeleteAllTodos from "./DeleteAllTodos.vue";
import TodosFilter from "./TodosFilter.vue";
import UpdateTodos from "./UpdateTodos.vue";
import TodoView from "@/components/pages/TodoView.vue";

export default {
  name: "TodoManager",

  components: {
    AddTodo,
    DeleteAllTodos,
    DeleteAllTodosWindow,
    TodosFilter,
    UpdateTodos,
    TodoView,
  },

  data() {
    return {
      showDeleteWindow: false,
    };
  },

  created() {
    this.todoStore = useTodoStore();
  },

  methods: {
    sortTodos(criteria) {
      this.todoStore.sortTodos(criteria);
    },

    updateTodos() {
      this.todoStore.updateTodos();
    },

    confirmDeleteAll() {
      this.todoStore.deleteAllTodos();
      this.showDeleteWindow = false;
    },
  },
};
</script>

<style scoped lang="less">
.todo-manager {


  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
    }
  }

  &__options {
    display: flex;
    margin-left: 10px;
    gap: 5px;

    @media (max-width: 768px) {
      gap: 10px;
    }
  }
}

</style>
