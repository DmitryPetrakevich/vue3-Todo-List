<template>
  <div class="pomodoro-timer">
    <PomodoroSettings />
    <h2 class="pomodoro-timer-mode">
      {{
        store.mode === "focus"
          ? "Фокус"
          : store.mode === "break"
            ? "Перерыв"
            : "Длинный перерыв"
      }}
    </h2>

    <div class="circle-wrapper">
      <svg
        width="300"
        height="300"
        class="progress-ring"
      >
        <circle
          class="progress-ring__background"
          r="140"
          cx="150"
          cy="150"
          stroke="#e6e6e6"
          stroke-width="20"
          fill="transparent"
        />
        <circle
          class="progress-ring__circle"
          r="140"
          cx="150"
          cy="150"
          :stroke="store.circleColor"
          stroke-width="20"
          fill="transparent"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progressOffset"
        />
      </svg>
      <div class="time-display">{{ store.formattedTime }}</div>
    </div>

    <div class="focus-dots">
      <span
        v-for="(done, index) in store.completedFocusDots"
        :key="index"
        :class="{ dot: true, active: done }"
      >
      </span>
    </div>

    <PomodoroControls />
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { usePomodoroStore } from "@/stores/pomodoroStore";
  import PomodoroControls from "./PomodoroControls.vue";
  import PomodoroSettings from "./PomodoroSettings.vue";

  const store = usePomodoroStore();

  const radius = 140;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = computed(() => {
    let duration = 0;
    switch (store.mode) {
      case "focus":
        duration = store.focusDuration;
        break;
      case "break":
        duration = store.shortBreakDuration;
        break;
      case "longBreak":
        duration = store.longBreakDuration;
        break;
    }

    const progress = store.secondsLeft / duration;
    return circumference * (1 - progress);
  });
</script>

<style scoped lang="less">
  .pomodoro-timer-mode {
    font-size: 40px;
  }

  .pomodoro-timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: absolute;
    left: 40%;
  }

  .circle-wrapper {
    position: relative;
    width: 300px;
    height: 300px;
  }

  .progress-ring {
    transform: rotate(-90deg); // чтобы начать с вершины круга
  }

  .time-display {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight: bold;
  }

  .focus-dots {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ccc;
    transition: background-color 0.3s;
  }

  .dot.active {
    background-color: #4caf50;
  }
</style>
