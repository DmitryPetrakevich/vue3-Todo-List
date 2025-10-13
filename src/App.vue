<template>
  <PageHeader />
  <TodoSidebar :active-tab="activeTab" @change-tab="activeTab = $event" />

  <div class="main">
    <TodoManager v-if="activeTab === 'todo'" />
    <PomodoroView v-else-if="activeTab === 'pomodoro'" />
    <NotesView v-else-if="activeTab === 'notes'" />
  </div>
</template>

<script>
import PageHeader from "@/components/layout/PageHeader.vue";
import TodoSidebar from "./components/features/todos/TodoSidebar.vue";
import TodoManager from "./components/features/todos/TodoManager.vue";
import PomodoroView from "./components/pages/PomodoroView.vue";
import NotesView from "./components/pages/NotesView.vue";

export default {
  components: {
    PageHeader,
    TodoSidebar,
    TodoManager,
    PomodoroView,
    NotesView,
  },
  data() {
    return {
      activeTab: "todo",
    };
  },
};
</script>

<style lang="less">
.main {
  margin-top: 60px;
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
