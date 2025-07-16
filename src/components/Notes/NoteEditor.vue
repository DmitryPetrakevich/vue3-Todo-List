!<template>
  <div class="note-editor">
    <div class="note-editor__container">
        <textarea
        v-model="note.text"
        >
            
        </textarea>

    </div>

  </div>
</template>

<script>
export default {
  props: [
    'note',
  ],

  data() {
    return {
 
    }
  },
};
</script>

<style lang="less">
.note-editor {
  padding: 20px;
  background-color: #fdfdfd; /* Мягкий фон */

  display: flex;
  align-items: flex-start; /* Прижать к верху */
}

.note-editor__container {
  width: calc(100vw - 700px);
}

textarea {
  width: 100%; /* Растянуть на всю ширину */
  height: calc(100vh - 150px); /* Достаточная высота */
  padding: 12px 16px; /* Внутренние отступы */
  font-size: 16px;
  font-family: sans-serif;
  line-height: 1.6;

  border: 1px solid #ccc;
  border-radius: 10px; /* Скругление углов */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Мягкая тень */

  resize: vertical; /* Пользователь может менять высоту */
  background-color: #fff;
  color: #333;

  transition: border-color 0.3s ease;
}

textarea:focus {
  outline: none;
  border-color: #007bff; /* Синяя рамка при фокусе */
}
</style>