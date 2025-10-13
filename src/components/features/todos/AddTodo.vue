<template>
  <div class="add-todo">
    <div class="add-todo__container">
      <input
        v-model="text"
        class="add-todo-input"
        placeholder="Добавить задачу..."
      />
      <button 
      type="submit" 
      class="add-todo-btn" 
      @click="submitTodo"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },

  methods: {
    submitTodo() {
      let trimed = this.text.trim();
      if (trimed != "") {
        this.$emit("add-todo", trimed);
        this.text = "";
      }
    },
  },
};
</script>

<style lang="less">
.add-todo {
  width: 600px;
  margin-left: 10px;
  display: flex;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    width: 100%;
  }


}

.add-todo__container {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 600px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);


}

.add-todo-input {
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #42b983;
    box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
  }
}

.add-todo-btn {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
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
