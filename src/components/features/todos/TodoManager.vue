<template>
  <div>
    <div class="add-todo-section">
      <AddTodo @add-todo="todoStore.addTodo" />
      <DeleteAllTodos @delete-todos="showDeleteWindow = true" />
      <TodosFilter @sort="sortTodos" />
      <UpdateTodos @update-todos="updateTodos" />

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

</style>
