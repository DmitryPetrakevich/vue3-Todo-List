import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  }),
  actions: {
    addTodo(title) {
      this.todos.push({ id: Date.now(), title, completed: false, priority: 'green' })
      this.saveToLocalStorage()
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      this.saveToLocalStorage()
    },
    deleteAllTodos() {
      this.todos = []
      this.saveToLocalStorage()
    },
    toggleCompleted(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.completed = !todo.completed
      this.saveToLocalStorage()
    },
    editTodo({ id, newTitle }) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.title = newTitle
      this.saveToLocalStorage()
    },
    updatePriority({ id, priority }) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.priority = priority
      this.saveToLocalStorage()
    },
    sortTodos(optionId) {
      switch (optionId) {
        case 1:
          this.todos.sort((a, b) => a.priority.localeCompare(b.priority))
          break
        case 2:
          this.todos.sort((a, b) => b.priority.localeCompare(a.priority))
          break
        case 3:
          this.todos.sort((a, b) => a.title.localeCompare(b.title))
          break
        case 4:
          this.todos.sort((a, b) => b.title.localeCompare(a.title))
          break
      }
      this.saveToLocalStorage()
    },
    updateTodos() {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
