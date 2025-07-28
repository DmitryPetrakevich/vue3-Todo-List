import { defineStore } from "pinia";

export const usePomodoroStore = defineStore('pomodoro', {
    state: () => ({
        mode: 'focus', // focus | break | longbreak
        isRunning: false,
        secondsLeft: 25 * 60,

        // Настройки по умолчанию
        focusDuration: 25 * 60,
        shortBreakDuration: 5 * 60,
        longBreakDuration: 15 * 60,

        focusSessionsCount: 0, // для логики longBreak
    }),

    actions: {
        start() {
            this.isRunning = true;
        },

        pause() {
            this.isRunning = false;
        },

        reset() {
            this.isRunning = false;
            this.secondsLeft = this.focusDuration;
            this.mode = 'focus';
        },

        switchMode(newMode) {
            this.mode = newMode;
            switch(newMode) {
                case 'focus':
                    this.secondsLeft = this.focusDuration;
                    break;
                case 'break':
                    this.secondsLeft = this.shortBreakDuration;
                    break;
                case 'longBreak':
                    this.secondsLeft = this.longBreakDuration;
                    break;
            }
        }
    },

    getters: {
        formattedTime: (state) => {
            const minutes = Math.floor(state.secondsLeft / 60);
            const seconds = state.secondsLeft % 60;
            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        }
    }
})


