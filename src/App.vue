<template>
  <PageHeader />
  <TodoSidebar 
    :active-tab="activeTab"
    @change-tab="activeTab = $event"
  />

  <div class="main">
    <TodoManager v-if="activeTab === 'todo'" />
    <HabitsView v-else-if="activeTab === 'habits'" />
    <NotesView v-else-if="activeTab === 'notes'" />
  </div>
</template>

<script>
import PageHeader from '@/components/layout/PageHeader.vue'
import TodoSidebar from './components/features/todos/TodoSidebar.vue'
import TodoManager from './components/features/todos/TodoManager.vue'
import HabitsView from './components/pages/HabitsView.vue'
import NotesView from './components/pages/NotesView.vue'

export default {
  components: {
    PageHeader,
    TodoSidebar,
    TodoManager,
    HabitsView,
    NotesView
  },
  data() {
    return {
      activeTab: 'todo'
    }
  }
}
</script>

<style lang="less">
.main {
  margin-top: 80px;
  margin-left: 295px;
  background-color: #f5f5f5;
}

.add-todo-section {
  display: flex;
  align-items: center;
}

.todolist {
  margin-top: 20px;
  margin-left: 10px;
}
</style>
