<template>
  <div class="modal" @click.self="$emit('cancel')">
    <div class="modal-box">
      <h2 class="modal-title">Подтверждение</h2>
      <hr class="modal-divider" />

      <p class="modal-text">
        Вы действительно уверены, что хотите удалить все задачи?
      </p>

      <div class="modal-btns">
        <button class="btn-cancel" @click="$emit('cancel')">Отменить</button>
        <button class="btn-confirm" @click="$emit('confirm')">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.classList.add("no-scroll");
    document.addEventListener("keydown", this.handleKeyDown);
  },

  beforeUnmount() {
    document.body.classList.remove("no-scroll");
    document.removeEventListener("keydown", this.handleKeyDown);
  },

  methods: {
    handleKeyDown(e) {
      if (e.key === "Escape") this.$emit("cancel");
    },
  },
};
</script>

<style lang="less">
.modal {
  position: fixed;
  inset: 0; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 500;
}

.modal-box {
  background-color: #fff;
  border: 2px solid #42b983;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  max-width: 420px; 
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: modal-fade 0.25s ease; 
}

.modal-title {
  margin: 0 0 10px 0;
  font-size: 24px; 
  font-weight: 600;
  color: #333;
}

.modal-text {
  font-size: 16px; 
  line-height: 1.5;
  margin-bottom: 30px;
  color: #444;
}

.modal-btns {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-cancel,
.btn-confirm {
  font-size: 16px;
  font-weight: 500;
  padding: 10px 30px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.25s ease;
  min-width: 120px;
}

.btn-cancel {
  background: #fff;
  border: 1px solid #333;
  color: #333;

  &:hover {
    background: #f0f0f0;
  }
}

.btn-confirm {
  background: transparent;
  border: 1px solid transparent;
  color: #e33;

  &:hover {
    color: #ff4d4d;
  }
}

@media (max-width: 480px) {
  .modal-box {
    max-width: calc(100% - 40px);
    padding: 16px;
  }

  .modal-btns {
    flex-direction: column;
    gap: 10px;
  }

  .btn-cancel,
  .btn-confirm {
    width: 100%;
  }
}

@keyframes modal-fade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-divider {
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0 20px 0;
}

.no-scroll {
  overflow: hidden;
}
</style>
