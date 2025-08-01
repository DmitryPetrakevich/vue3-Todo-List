<template>
  <div>
    <div class="add-todo-section">
      <AddTodo @add-todo="addTodo" />
      <DeleteAllTodos @delete-todos="showDeleteWindow = true" />
      <TodosFilter @sort="sortTodos" />
      <UpdateTodos @update-todos="updateTodos" />

      <DeleteAllTodosWindow
        v-if="showDeleteWindow"
        @cancel="showDeleteWindow = false"
        @confirm="confirmDeleteAll"
      />
    </div>

    <TodoView
      :todos="todos"
      @toggle-completed="toggleCompleted"
      @delete-todo="deleteTodo"
      @edit-todo="editTodo"
      @update-priority="updatePriority"
    />
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

  computed: {
    todos() {
      return this.todoStore.todos;
    },
  },

  created() {
    this.todoStore = useTodoStore();
  },

  methods: {
    addTodo(todoText) {
      this.todoStore.addTodo(todoText);
    },

    sortTodos(criteria) {
      this.todoStore.sortTodos(criteria);
    },

    updateTodos() {
      this.todoStore.updateTodos();
    },

    toggleCompleted(id) {
      this.todoStore.toggleCompleted(id);
    },

    deleteTodo(id) {
      this.todoStore.deleteTodo(id);
    },

    editTodo(payload) {
      this.todoStore.editTodo(payload);
    },

    updatePriority(payload) {
      this.todoStore.updatePriority(payload);
    },

    confirmDeleteAll() {
      this.todoStore.deleteAllTodos();
      this.showDeleteWindow = false;
    },
  },
};
</script>

<style scoped lang="less">

</style>
