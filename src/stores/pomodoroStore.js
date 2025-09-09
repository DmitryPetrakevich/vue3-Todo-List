import { defineStore } from "pinia";

import focusSound from '@/assets/sounds/focus.mp3';
import breakSound from '@/assets/sounds/break.mp3';
import longBreakSound from '@/assets/sounds/longBreak.mp3';

export const usePomodoroStore = defineStore("pomodoro", {
  state: () => ({
    mode: "focus", // focus | break | longbreak
    isRunning: false,
    secondsLeft: 25 * 60,

    // Настройки по умолчанию
    focusDuration: 25 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 15 * 60,

    focusSessionsCount: 0,
    sessionsBeforeLongBreak: 4,

    intervalId: null,
  }),

  actions: {
    start() {
      if (this.isRunning) return;
      this.isRunning = true;

      this.intervalId = setInterval(() => {
        this.tick();
      }, 1000);
    },

    pause() {
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.intervalId = null;
    },

    reset() {
      this.pause();
      this.secondsLeft = this.focusDuration;
      this.mode = "focus";
      this.focusSessionsCount = 0;
    },

    updateTimer() {
      this.pause();
      this.secondsLeft = this.focusDuration;     
    },

    tick() {
      if (this.secondsLeft > 0) {
        this.secondsLeft--;
      } else {
        this.switchModeAutomatically();
      }
    },

    switchMode(newMode) {
      this.mode = newMode;
      switch (newMode) {
        case "focus":
          this.secondsLeft = this.focusDuration;
          break;
        case "break":
          this.secondsLeft = this.shortBreakDuration;
          break;
        case "longBreak":
          this.secondsLeft = this.longBreakDuration;
          break;
      }
    },

    switchModeAutomatically() {
      this.pause();

      if (this.mode === "focus") {
        this.focusSessionsCount++;

        if (this.focusSessionsCount % this.sessionsBeforeLongBreak === 0) {
          this.switchMode("longBreak");
          this.playSound('longBreak.mp3');
        } 
        else {
          this.switchMode("break");
          this.playSound('break.mp3');
        }
      } 
      else {
        this.switchMode("focus");
        this.playSound('focus.mp3');
      }
      this.start();
    },

    updateSettings(newSettings) {
      this.focusDuration = newSettings.focusDuration * 60;
      this.shortBreakDuration = newSettings.shortBreakDuration * 60;
      this.longBreakDuration = newSettings.longBreakDuration * 60;
      this.sessionsBeforeLongBreak = newSettings.sessionsBeforeLongBreak;

      if (!this.isRunning) {
        switch (this.mode) {
          case "focus":
            this.secondsLeft = this.focusDuration;
            break;
          case "break":
            this.secondsLeft = this.shortBreakDuration;
            break;
          case "longBreak":
            this.secondsLeft = this.longBreakDuration;
            break;
        }
      }
    },

    playSound(filename) {
        let audioSrc;
        
        switch(filename) {
          case 'focus.mp3':
            audioSrc = focusSound;
            break;
          case 'break.mp3':
            audioSrc = breakSound;
            break;
          case 'longBreak.mp3':
            audioSrc = longBreakSound;
            break;
          default:
            console.error('Unknown sound file:', filename);
            return;
        }

        const audio = new Audio(audioSrc);
        audio.play()
    }  
},

  getters: {
    formattedTime: (state) => {
      const minutes = Math.floor(state.secondsLeft / 60);
      const seconds = state.secondsLeft % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    },

    circleColor: (state) => {
      switch (state.mode) {
        case "focus":
          return "#e53935";
        case "break":
        case "longBreak":
          return "#4caf50";
        default:
          return "#4caf50";
      }
    },
  },
});
