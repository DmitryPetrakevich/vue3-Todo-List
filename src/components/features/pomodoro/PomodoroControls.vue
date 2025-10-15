<template>
    <div class="pomodoro-controls">
        <span class="pomodoro-controls-reset-timer" @click="store.updateTimer">
            ◉ Обновить таймер
        </span>

        <div class="pomodoro-controls__container">
            <svg fill="currentColor" width="60px" height="60px" viewBox="0 0 36 36" version="1.1"
                class="pomodoro-controls-btn" @click="emit('open-settings')"
                preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>settings-solid</title>
                <path class="clr-i-solid clr-i-solid-path-1"
                    d="M32.57,15.72l-3.35-1a11.65,11.65,0,0,0-.95-2.33l1.64-3.07a.61.61,0,0,0-.11-.72L27.41,6.2a.61.61,0,0,0-.72-.11L23.64,7.72a11.62,11.62,0,0,0-2.36-1l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z">
                </path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
            </svg>

            <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                class="pomodoro-controls-btn" @click="store.pause" :class="{ disabled: !store.isRunning }"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60px" viewBox="0 0 512 512"
                enable-background="new 0 0 512 512" xml:space="preserve">
                <g>
                    <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
		        c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z" />
                    <g>
                        <polygon points="271.5,336.5 335.5,336.5 335.5,211.5 335.5,176.5 271.5,176.5 		" />
                        <rect x="175.5" y="176.5" width="64" height="160" />
                    </g>
                </g>
            </svg>

            <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                class="pomodoro-controls-btn" @click="store.start" :class="{ disabled: store.isRunning }"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60px" viewBox="0 0 46 46"
                xml:space="preserve">
                <g>
                    <g>
                        <path d="M20.913,34.756c-0.625,0.627-1.565,0.816-2.383,0.479c-0.818-0.336-1.352-1.135-1.352-2.02V12.784
                c0-0.885,0.534-1.683,1.352-2.021c0.818-0.338,1.759-0.149,2.383,0.479l9.657,9.706c1.129,1.134,1.129,2.967,0,4.102
                L20.913,34.756z" />
                        <path d="M23,6c9.374,0,17,7.626,17,17s-7.626,17-17,17S6,32.374,6,23S13.626,6,23,6 M23,0C10.298,0,0,10.297,0,23s10.298,23,23,23
                s23-10.297,23-23S35.702,0,23,0L23,0z" />
                    </g>
                </g>
            </svg>

            <svg fill="currentColor" width="60px" height="60px" viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg" class="pomodoro-controls-btn" @click="$emit('show-reset-model')">
                <path
                    d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
                    fill-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { usePomodoroStore } from "@/stores/pomodoroStore";
import { defineEmits } from "vue";

const store = usePomodoroStore();

const emit = defineEmits(['open-settings'])
</script>

<style scoped lang="less">
.pomodoro-controls {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.pomodoro-controls__container {
    display: flex;
    gap: 30px;
}

.pomodoro-controls-reset-timer {
    text-align: center;
    font-size: 15px;
    color: grey;
    transition: all 0.3s ease;

    &:hover {
        color: red;
    }
}

.pomodoro-controls-btn {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(.disabled) {
        color: rgb(127, 3, 3);
        transform: scale(1.1);
    }

    &.disabled {
        opacity: 0.5;
        color: gray !important;
        cursor: not-allowed;
        pointer-events: none;
    }
}
</style>
