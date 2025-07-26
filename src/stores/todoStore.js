import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  }),
  actions: {
    addTodo(title) {
        const today = new Date().toISOString().slice(0, 10); // формат: '2025-07-26'

        this.todos.push({ 
            id: Date.now(), 
            title, 
            completed: false, 
            priority: 'green',
            date: today,
    })
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
        case 5: // Сортировка по дедлайну (раньше → позже)
            this.todos.sort((a, b) => {
            const aDate = a.date ? new Date(a.date) : new Date(8640000000000000); // max date если пусто
            const bDate = b.date ? new Date(b.date) : new Date(8640000000000000);
            return aDate - bDate;
        });
        break;
        case 6: // Сортировка по дедлайну (позже → раньше)
            this.todos.sort((a, b) => {
            const aDate = a.date ? new Date(a.date) : new Date(0); // min date если пусто
            const bDate = b.date ? new Date(b.date) : new Date(0);
            return bDate - aDate;
        });
        break;
      }
      this.saveToLocalStorage()
    },
    updateTodos() {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.saveToLocalStorage()
    },
    updateDate({ id, date }) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.date = date;
        }
        this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
  }
})
