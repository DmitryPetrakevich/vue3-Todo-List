<template>
  <div class="pomodoro-timer">
    <!-- <PomodoroSettingsModal
      v-if="showSettings"
      @close="showSettings = false"
    /> -->

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
        width="100%"
        height="100%"
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

      <div class="focus-dots">
      <span
        v-for="(done, index) in completedFocusDots"
        :key="index"
        :class="{ dot: true, active: done }"
      >
      </span>
    </div>
    </div>

    <PomodoroControls 
      @open-settings="$emit('open-settings')"
      @show-reset-model="$emit('show-reset')"
    />
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { usePomodoroStore } from "@/stores/pomodoroStore";
  import PomodoroControls from "./PomodoroControls.vue";
  import PomodoroSettingsModal from "./PomodoroSettingsModal.vue";

  const store = usePomodoroStore();

  defineEmits(['open-settings', 'show-reset']);

  /**
 * Состояние видимости модального окна с настройками Pomodoro.
 * 
 * Управляется из компонента PomodoroControls при клике на иконку шестерёнки.
 */
  const showSettings = ref(false);
/**
 * Состояние отображения окна подтверждения сброса рабочей сессии.
 */
  const showResetWindow = ref(false);
/**
 * Радиус окружности таймера (в пикселях).
 * 
 * Используется для вычисления длины окружности SVG-круга.
 */
  const radius = 140;
  /**
 * Полная длина окружности SVG-круга таймера.
 */
  const circumference = 2 * Math.PI * radius;

  /**
 * Вычисляемое свойство для смещения штриха прогресс-бара.
 * 
 * Рассчитывает визуальное заполнение кольца в зависимости от оставшегося времени.
 */
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
  })

  /**
 * Список булевых значений для визуализации завершённых фокус-сессий.
 * Каждая точка (dot) отображает одну завершённую Pomodoro-сессию.
 *
 * @computed
 * @returns {boolean[]} Массив, где `true` — завершённая сессия, `false` — оставшаяся.
 */
  const completedFocusDots = computed(() => {
    const total = store.sessionsBeforeLongBreak; // до long break
    const count = store.focusSessionsCount % total;
    return Array.from({ length: total }, (_, i) => i < count);
  })
</script>

<style scoped lang="less">
  .pomodoro-timer-mode {
    font-size: 40px;
    margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
}

.pomodoro-timer {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  padding: 0 20px;
  
  @media (max-width: 1024px) {
    left: 50%; 
    padding: 0 15px;
  }

  @media (max-width: 350px) {
    padding: 0 10px; 
  }
}

  .circle-wrapper {
    position: relative;
    max-width: 380px;      
    height: 300px;
  }

  .progress-ring {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg); 
      display: block;
  }

.progress-ring__circle {
  transition: stroke-dashoffset 0.3s linear, stroke 0.2s ease;
}

.time-display {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  pointer-events: none; 
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.focus-dots {
  display: flex;
  flex-wrap: wrap;
  max-width: 140px;
  gap: 10px;
  position: absolute;
  top: calc(50% + 35% / 2); 
  left: 50%;
  transform: translateX(-50%);
}

.dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ccc;
  transition: background-color 0.25s;
}
.dot.active {
  background-color: #4caf50;
}
</style>
