<template>
    <div class="pomodoro-timer">
        <h2>Текущий режим: {{ store.mode === 'focus' ? 'Фокус' : store.mode === 'break' ? 'Перерыв' : 'Длинный перерыв'  }}</h2>
        <div class="pomodoro-display"> {{ store.formattedTime }}</div>

        <div class="pomodoro-controls">
            <button @click="store.start" :disabled="store.isRunning">Старт</button>
            <button @click="store.pause" :disabled="!store.isRunning">Пауза</button>
            <button @click="store.reset">Сброс</button>
        </div>
    </div>
</template>

<script setup>
import { usePomodoroStore } from '@/stores/pomodoroStore';

const store = usePomodoroStore();

</script>

<style scoped lang="less">
.pomodoro-timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}

.time-display {
  font-size: 4rem;
  font-weight: bold;
}

.controls {
  display: flex;
  gap: 15px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}
</style>