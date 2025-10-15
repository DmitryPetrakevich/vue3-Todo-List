<template>
  <div
    class="modal-overlay"
    @click.self="$emit('close')"
  >
    <div class="modal-content">
      <h2 class="modal-title">Настройки Помодоро</h2>

      <div class="settings-container">
        <label class="settings-label">
          Период работы, мин
          <input
            type="number"
            v-model.number="focus"
            class="settings-input"
          />
        </label>

        <label class="settings-label">
          Короткий перерыв, мин
          <input
            type="number"
            v-model.number="shortBreak"
            class="settings-input"
          />
        </label>

        <label class="settings-label">
          Длинный перерыв, мин
          <input
            type="number"
            v-model.number="longBreak"
            class="settings-input"
          />
        </label>

        <label class="settings-label">
          Длинный перерыв каждые, помодоро
          <input
            type="number"
            v-model.number="sessionsBeforeLong"
            class="settings-input"
            min="1"
            max="12"
          />
        </label>

        <div class="modal-buttons">
          <button
            class="btn apply"
            @click="applySettings"
          >
            Применить
          </button>
          <button
            class="btn cancel"
            @click="$emit('close')"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { usePomodoroStore } from "@/stores/pomodoroStore";

  const store = usePomodoroStore();

  const emit = defineEmits(["close"]);

  /**
   * Период фокусировки (в минутах).
   *
   * Используется для изменения продолжительности рабочего интервала.
   */
  const focus = ref(store.focusDuration / 60);
  /**
   * Короткий перерыв (в минутах).
   */
  const shortBreak = ref(store.shortBreakDuration / 60);
  /**
   * Длинный перерыв (в минутах).
   */
  const longBreak = ref(store.longBreakDuration / 60);
  /**
   * Количество фокус-сессий перед длинным перерывом.
   *
   * Ограничено от 1 до 12.
   */
  const sessionsBeforeLong = ref(store.sessionsBeforeLongBreak);

  /**
   * Применяет новые настройки Pomodoro.
   * - Проверяет корректность значений (от 1 до 12 сессий).
   * - Обновляет данные в хранилище.
   * - Сбрасывает текущий таймер.
   * - Закрывает модальное окно.
   */
  function applySettings() {
    if (sessionsBeforeLong.value > 12) sessionsBeforeLong.value = 12;
    if (sessionsBeforeLong.value < 1) sessionsBeforeLong.value = 1;

    store.updateSettings({
      focusDuration: focus.value,
      shortBreakDuration: shortBreak.value,
      longBreakDuration: longBreak.value,
      sessionsBeforeLongBreak: sessionsBeforeLong.value,
    });
    store.reset();
    emit("close");
  }
</script>

<style scoped lang="less">
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    animation: fadeIn 0.2s ease;
  }

  .modal-content {
    background: #f9f9f9;
    padding: 25px;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    animation: scaleIn 0.25s ease;
  }

  .modal-title {
    margin-bottom: 20px;
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
  }

  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .settings-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
  }

  .settings-input {
    width: 60px;
    text-align: center;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  .modal-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;
  }

  .btn {
    flex: 1;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .btn.apply {
    background-color: #42b983;
    &:hover {
      background-color: #36996b;
    }
  }

  .btn.cancel {
    background-color: #999;
    &:hover {
      background-color: #777;
    }
  }

  /* Анимации */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
