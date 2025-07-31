<template>
  <div>
    <div class="add-todo-section">
      <AddTodo @add-todo="todoStore.addTodo" />
      <DeleteAllTodos @delete-todos="showDeleteWindow = true" />
      <TodosFilter @sort="todoStore.sortTodos" />
      <UpdateTodos @update-todos="todoStore.updateTodos" />

      <DeleteAllTodosWindow
        v-if="showDeleteWindow"
        @cancel="showDeleteWindow = false"
        @confirm="
          () => {
            todoStore.deleteAllTodos();
            showDeleteWindow = false;
          }
        "
      />
    </div>

    <TodoView
      :todos="todos"
      @toggle-completed="(id) => todoStore.toggleCompleted(id)"
      @delete-todo="(id) => todoStore.deleteTodo(id)"
      @edit-todo="(payload) => todoStore.editTodo(payload)"
      @update-priority="(payload) => todoStore.updatePriority(payload)"
    />
  </div>
</template>

<script>
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

import AddTodo from "./AddTodo.vue";
import DeleteAllTodosWindow from "./DeleteAllTodosWindow.vue";
import DeleteAllTodos from "./DeleteAllTodos.vue";
import TodosFilter from "./TodosFilter.vue";
import UpdateTodos from "./UpdateTodos.vue";
import TodoView from "@/components/pages/TodoView.vue";

export default {
  components: {
    AddTodo,
    DeleteAllTodos,
    DeleteAllTodosWindow,
    TodosFilter,
    UpdateTodos,
    TodoView,
  },
  setup() {
    const todoStore = useTodoStore();
    const { todos } = storeToRefs(todoStore);

    return {
      todos,
      todoStore,
      showDeleteWindow: ref(false),
    };
  },
};
</script>

<style scoped lang="less"></style>
