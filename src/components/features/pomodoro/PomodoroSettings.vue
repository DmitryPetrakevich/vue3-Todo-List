<template>
    <div class="pomodoro-settings">
        <div class="pomodoro-settings__container">
            <label
            class="pomodoro-settings-label"
            > 
                Период работы, мин
                <input 
                class="pomodoro-settings-input"
                type="number" 
                v-model.number="focus" /> 
            </label>
            <label
            class="pomodoro-settings-label"
            > 
                Короткий перерыв, мин
                <input
                class="pomodoro-settings-input"
                type="number" 
                v-model.number="shortBreak" 
                /> 
            </label>
            <label
            class="pomodoro-settings-label"
            > 
                Длинный перерыв, мин
                <input
                class="pomodoro-settings-input" 
                type="number" 
                v-model.number="longBreak" 
                /> 
            </label>
            <label
            class="pomodoro-settings-label"
            > 
                Длинный перерыв каждые, помодоро
                <input 
                class="pomodoro-settings-input"
                type="number" 
                v-model.number="sessionsBeforeLong" /> 
            </label>

            <button
            class="pomodoro-settings-btn" 
            @click="applySettings"
            > 
            Применить
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePomodoroStore } from '@/stores/pomodoroStore';


const store = usePomodoroStore();

const focus = ref(store.focusDuration / 60)
const shortBreak = ref(store.shortBreakDuration / 60)
const longBreak = ref(store.longBreakDuration / 60)
const sessionsBeforeLong = ref(store.sessionsBeforeLongBreak)

function applySettings() {
    store.updateSettings({
        focusDuration: focus.value,
        shortBreakDuration: shortBreak.value,
        longBreakDuration: longBreak.value,
        sessionsBeforeLongBreak: sessionsBeforeLong 
    })
    store.reset();
}

</script>

<style scoped lang="less">
.pomodoro-settings {
    position: fixed;
    right: 0;
    top: 80px;
    height: calc(100vh - 80px);
    border: 1px solid grey;
    background-color: #e2e2e2;
    z-index: 100;
    width: 350px;
}

.pomodoro-settings__container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
}

.pomodoro-settings-label {
    display: grid;
    grid-template-columns: 1fr auto; 
    align-items: center; 
    gap: 10px; 
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f0f0f0; 
    }
}

.pomodoro-settings-input {
    width: 50px; 
    padding: 5px;
    text-align: center; 
    border: 1px solid #ccc;
    border-radius: 4px;
}

.pomodoro-settings-btn {
    display: block;
    width: 100%;
    background-color: #42b983;
    border: none;
    color: white;
    padding: 10px 0;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #36996b;
    }

    &:active {
        background-color: #2c7c57;
    }
}
    
</style>