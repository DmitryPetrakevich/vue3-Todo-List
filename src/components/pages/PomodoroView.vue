!<template>
    <div class="pomodoro-page">
        <div class="pomodoro-page__container">
            <PomodoroTimer />
            
        </div>
    </div>

  
</template>

<script setup>
import PomodoroTimer from '../features/pomodoro/PomodoroTimer.vue';

</script>

<style scoped lang="less">
.pomodoro-page {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}
</style>