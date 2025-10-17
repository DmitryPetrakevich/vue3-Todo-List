<template>
  <div class="pomodoro-page">
    <div class="pomodoro-page__container">
      <PomodoroTimer 
        @open-settings="showSettings = true"
        @show-reset="showResetWindow = true"
      />
    </div>

    <PomodoroSettingsModal
      v-if="showSettings"
      @close="showSettings = false"
    />

    <ResetConfirmModal 
      v-if="showResetWindow"
      @close="showResetWindow = false"
      @confirm="handleReset"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePomodoroStore } from "@/stores/pomodoroStore";
import PomodoroTimer from "../features/pomodoro/PomodoroTimer.vue";
import PomodoroSettingsModal from "../features/pomodoro/PomodoroSettingsModal.vue";
import ResetConfirmModal from "../features/pomodoro/ResetConfirmModal.vue";

const store = usePomodoroStore();

const showSettings = ref(false);
const showResetWindow = ref(false);

/**
 * Обрабатывает подтверждение сброса таймера
 */
function handleReset() {
  store.reset();
  showResetWindow.value = false;
}</script>

<style scoped lang="less">
.pomodoro-page {
  display: flex;
  position: relative;
  padding: 0 40px;
  height: calc(100vh - 60px);
  background-color: #f9f9f9;
}
</style>
