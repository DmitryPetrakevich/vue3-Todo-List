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
  display: flex;
  padding: 0 40px;
  height: calc(100vh - 80px);
  background-color: #f9f9f9;
}
</style>