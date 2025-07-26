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
        @confirm="deleteAllTodos"
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
import AddTodo from './AddTodo.vue'
import DeleteAllTodosWindow from './DeleteAllTodosWindow.vue'
import DeleteAllTodos from './DeleteAllTodos.vue'
import TodosFilter from './TodosFilter.vue'
import UpdateTodos from './UpdateTodos.vue'
import TodoView from '@/components/pages/TodoView.vue'

export default {
  components: {
    AddTodo,
    DeleteAllTodos,
    DeleteAllTodosWindow,
    TodosFilter,
    UpdateTodos,
    TodoView
  },
  data() {
    return {
      todos: [],
      showDeleteWindow: false
    }
  },
  methods: {
    addTodo(title) {
      this.todos.push({ id: Date.now(), title, completed: false, priority: 'green' })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    deleteAllTodos() {
      this.todos = []
      this.showDeleteWindow = false
    },
    editTodo({ id, newTitle }) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.title = newTitle
    },
    toggleCompleted(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.completed = !todo.completed
    },
    updatePriority({ id, priority }) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.priority = priority
    },
    sortTodos(optionId) {
      switch (optionId) {
        case 1: // По приоритету ↑
          this.todos.sort((a, b) => a.priority.localeCompare(b.priority))
          break
        case 2: // По приоритету ↓
          this.todos.sort((a, b) => b.priority.localeCompare(a.priority))
          break
        case 3: // По алфавиту ↑
          this.todos.sort((a, b) => a.title.localeCompare(b.title))
          break
        case 4: // По алфавиту ↓
          this.todos.sort((a, b) => b.title.localeCompare(a.title))
          break
      }
    },
    updateTodos() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style scoped lang="less">

</style>