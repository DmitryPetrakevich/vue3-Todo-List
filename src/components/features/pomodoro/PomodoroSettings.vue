<template>
    <div class="pomodoro-settings">
        <div class="pomodoro-settings__container">
            <label> 
                Период работы, мин
                <input type="number" v-model.number="focus" /> 
            </label>
            <label> 
                Короткий перерыв, мин
                <input type="number" v-model.number="shortBreak" /> 
            </label>
            <label> 
                Длинный перерыв, мин
                <input type="number" v-model.number="longBreak" /> 
            </label>
            <label> 
                Длинный перерыв каждые, помодоро
                <input type="number" v-model.number="sessionsBeforeLong" /> 
            </label>

            <button @click="applySettings"> Применить</button>
            


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

}

</script>

<style scoped lang="less">
.pomodoro-settings__container {
    display: flex;
    flex-direction: column;
    gap: 15px;

}

</style>