<template>
  <PageHeader />
  <Sidebar />
  <div class="main">
    <AddTodo @add-todo="addTodo"/>
    <TodoList :todos="todos" />
    



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
      ]
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
  background-color: #f5f5f5;
  margin-top: 110px;
  margin-left: 295px;
}

</style>
