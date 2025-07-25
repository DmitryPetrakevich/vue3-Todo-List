<template>
  <PageHeader />
  <Sidebar 
  :active-tab="activeTab"
  @change-tab="activeTab = $event"
  />
  
  <div class="main">
    <div class="add-todo-section">
        <AddTodo 
        v-if="activeTab === 'todo'"
        @add-todo="addTodo"
        />
        <DeleteAllTodos 
        title="Удалить все задачи"
        v-if="activeTab === 'todo'"
        @delete-todos="showDeleteWindow = true"
        />

        <TodosFilter 
        title="Фильтр"
        v-if="activeTab === 'todo'"
        @sort="sortTodos"
        />

        <UpdateTodos 
        title="Удалить выполненные задачи"
        v-if="activeTab === 'todo'"
        @update-todos="updateTodos"
        />
          
        <DeleteAllTodosWindow 
        v-if="showDeleteWindow"
        @cancel="showDeleteWindow = false"
        @confirm="deleteTodos"
        @show-delete-window="showDeleteWindow = false"
        
        />
        

    </div>

    
    <TodoList 
    class="todolist"
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
import DeleteAllTodos from './components/DeleteAllTodos.vue';
import DeleteAllTodosWindow from './components/DeleteAllTodosWindow.vue';
import TodosFilter from './components/TodosFilter.vue';
import UpdateTodos from './components/UpdateTodos.vue';


export default {
  components: {
    PageHeader,
    Sidebar,
    TodoList,
    HabitTracker,
    AddTodo,
    NotesView,
    DeleteAllTodos,
    DeleteAllTodosWindow,
    TodosFilter,
    UpdateTodos,
  },

  data() {
    return {
      todos: [
        //  {id: 1, title: "Сделать проект", completed: false, priority: 'green' },
        //  {id: 2, title: "Почитал книгу", completed: true, priority: 'green' },
        //  {id: 3, title: "Почитал документацию", completed: true, priority: 'green' },
        //  {id: 4, title: "Почитал новоти", completed: true, priority: 'green' },
      ],

      activeTab: 'todo',
      showDeleteWindow: false,
    }
  },

  methods: {
    addTodo(title) {
      this.todos.push( {
        id: Date.now(),
        title,
        completed: false,
        priority: 'green'
      })
    },

    deleteTodo(todoId) {
      const index = this.todos.findIndex(t => t.id === todoId); 
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },

    deleteTodos() {
      this.todos = [];
      this.showDeleteWindow = false;
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
      const todo = this.todos.find(t => t.id === id);
      if(todo) {
        todo.priority = priority;
      }
    },
    
     sortTodos(optionId) {
      switch (optionId) {
        case 1: // По приоритету ↑
          this.todos.sort((a, b) => a.priority.localeCompare(b.priority, 'en'));
          break;
        case 2: // По приоритету ↓
          this.todos.sort((a, b) => b.priority.localeCompare(a.priority, 'en'));
          break;
        case 3: // По алфавиту ↑
          this.todos.sort((a, b) => a.title.localeCompare(b.title, 'en'));
          break;
        case 4: // По алфавиту ↓
          this.todos.sort((a, b) => b.title.localeCompare(a.title, 'en'));
          break;
      }
    },

    updateTodos() {
      this.todos = this.todos.filter(item => item.completed === false);
    }
  }
}

</script>

<style lang="less">
.main {
  margin-top: 80px;
  margin-left: 295px;
  background-color: #f5f5f5;}

.add-todo-section {
  display: flex;
  align-items: center;
}

.todolist {
  margin-top: 20px;
  margin-left: 10px;
}
</style>
