<template>
  <PageHeader @toggle-sidebar="toggleMenu" />
  <TodoSidebar 
  :active-tab="activeTab" 
  @change-tab="activeTab = $event" 
  />

  <MobileMenu
      :is-open="isMobileMenuOpen"
      @change-tab="handleTabChange"
      @close="isMobileMenuOpen = false"
    />

  <div
    class="overlay"
    v-if="isMobileMenuOpen"
    @click="isMobileMenuOpen = false"
  ></div>

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
import MobileMenu from "./components/layout/MobileMenu.vue";

export default {
  components: {
    PageHeader,
    TodoSidebar,
    TodoManager,
    PomodoroView,
    NotesView,
    MobileMenu,
  },
  data() {
    return {
      activeTab: "todo",
      isMobileMenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleTabChange(tabId) {
      this.activeTab = tabId;
      this.isMobileMenuOpen = false;
    },
  },
};
</script>

<style lang="less">
.main {
  margin-top: 60px;
  margin-left: 295px;
  padding: 10px;
  padding-top: 0;
  background-color: #f5f5f5;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
}

.add-todo-section {
  display: flex;
  align-items: center;
}

.todolist {
  margin-top: 20px;
  margin-left: 10px;
}

.overlay {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background: rgba(0, 0, 0, 0.4);
  z-index: 150;
}
</style>
