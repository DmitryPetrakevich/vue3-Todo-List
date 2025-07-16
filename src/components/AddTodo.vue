!<template>
  <div class="add-todo">
    <div class="add-todo__container"> 
        <input
        v-model="text" 
        class="add-todo-input" />
        <button
        type="submit" 
        class="add-todo-btn"
        @click="submitTodo"
        >
        Добавить</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    }
  },

  methods: {
    submitTodo() {
      let trimed = this.text.trim();
      if(trimed != "") {
        this.$emit('add-todo', trimed)
        this.text = "";
      }
    }
  }
};
</script>

<style lang="less">
.add-todo {
  margin-top: 40px; // отступ сверху (можно подогнать под макет)
  display: flex;
  background-color: #f5f5f5;
  // justify-content: center; // размещение по центру страницы
}

.add-todo__container {
  display: flex; // размещаем инпут и кнопку по горизонтали
  align-items: center;
  gap: 10px; // промежуток между полем и кнопкой
  max-width: 600px; // ограничение по ширине
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd; // рамка
  border-radius: 8px;
  background-color: #f9f9f9; // очень светлый фон
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.add-todo-input {
  flex: 1; // занимает всё свободное пространство
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #42b983; // цвет фокуса (в духе Vue)
    box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
  }
}

.add-todo-btn {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #36996b;
  }

  &:active {
    background-color: #2c7c57;
  }
}

</style>