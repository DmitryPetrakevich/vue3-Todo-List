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
    v-if="activeTab === 'todo'"
    :todos="todos"
     />
     <HabitTracker
     v-else-if="activeTab === 'habits'"
     
     />

  </div>
  
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import Sidebar from './components/Sidebar.vue';
import TodoList from './components/TodoList.vue';
import HabitTracker from './components/HabitTracker.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  components: {
    PageHeader,
    Sidebar,
    TodoList,
    HabitTracker,
    AddTodo,
  },

  data() {
    return {
      todos: [
        {id: 1, title: "Сделать проект", complete: false },
        {id: 2, title: "Почитал книгу", complete: true },
        {id: 3, title: "Почитал документацию", complete: true },
        {id: 4, title: "Почитал новоти", complete: true },
      ],

      activeTab: 'todo'
    }
  },

  methods: {
    addTodo(title) {
      this.todos.push( {
        id: Date.now(),
        title,
        complete: false
      })

    }
  }
  
}

</script>

<style lang="less">
.main {
  margin-top: 110px;
  margin-left: 295px;
}

</style>
