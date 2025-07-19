<template>
  <PageHeader />
  <Sidebar 
  :active-tab="activeTab"
  @change-tab="activeTab = $event"
  />
  
  <div class="main">
    <AddTodo 
    v-if="activeTab === 'todo'"
    @add-todo="addTodo"
    />
    <TodoList 
    @toggle-completed="toggleCompleted"
    @delete-todo="deleteTodo"
    @edit-todo="editTodo"
    @update-priority="updatePriority"
    v-if="activeTab === 'todo'"
    :todos="todos"
     />
     <HabitTracker
     v-else-if="activeTab === 'habits'"
     />
     <NotesView 
     v-else-if="activeTab === 'notes'"
     />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import Sidebar from './components/Sidebar.vue';
import TodoList from './components/TodoList.vue';
import HabitTracker from './components/HabitTracker.vue';
import AddTodo from './components/AddTodo.vue';
import NotesView from './components/Notes/NotesView.vue';

export default {
  components: {
    PageHeader,
    Sidebar,
    TodoList,
    HabitTracker,
    AddTodo,
    NotesView,
  },

  data() {
    return {
      todos: [
        //  {id: 1, title: "Сделать проект", completed: false, priority: 'green' },
        //  {id: 2, title: "Почитал книгу", completed: true, priority: 'green' },
        //  {id: 3, title: "Почитал документацию", completed: true, priority: 'green' },
        //  {id: 4, title: "Почитал новоти", completed: true, priority: 'green' },
      ],

      activeTab: 'todo'
    }
  },

  methods: {
    addTodo(title) {
      this.todos.push( {
        id: Date.now(),
        title,
        completed: false
      })
    },

    deleteTodo(todoId) {
      const index = this.todos.findIndex(t => t.id === todoId); 
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },

    editTodo({id, newTitle}) {
      const todo = this.todos.find(t => t.id === id)
      if(todo) {
        todo.title = newTitle;
      }
    },

    toggleCompleted(todoId) {
      const todo = this.todos.find(t => t.id === todoId)

      if(todo) {
        todo.completed = !todo.completed;
      }
    },

    updatePriority({id, priority}) {
      const todo = this.todos.folter(t => t.id === id);
      if(todo) {
        todo.priority = priority;
      }
    }
  }
}

</script>

<style lang="less">
.main {
  margin-top: 80px;
  margin-left: 295px;
}
</style>
