<template>
  <div class="note-editor">
    <div class="note-editor__container">
      <textarea 
      class="no-resize"
      v-model="localText"
      > 
      </textarea>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps ({
  note: {
    type: Array,
    required: true

  }
});

const localText = ref("");

onMounted(() => {
  if(props.note) {
    localText.value = props.note.text;
  }
});

watch(
  () => props.note,
  (newNote) => {
    if (newNote) {
      localText.value = newNote.text;
    }
  },
  { immediate: true } // сразу запустить при первом рендере
);

watch(localText, (newVal) => {
  if (props.note) {
    props.note.text = newVal;
  }
});
</script>

<style lang="less">
.note-editor {
  padding: 20px;
  background-color: #fdfdfd; 

  display: flex;
  align-items: flex-start; 
}

.note-editor__container {
  width: calc(100vw - 700px);
}

textarea {
  width: 100%; 
  height: calc(100vh - 150px); 
  padding: 12px 16px; 
  font-size: 16px;
  font-family: sans-serif;
  line-height: 1.6;

  border: 1px solid #ccc;
  border-radius: 10px; 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); 

  resize: vertical; 
  background-color: #fff;
  color: #333;

  transition: border-color 0.3s ease;
}

textarea:focus {
  outline: none;
  border-color: #007bff; 
}

.no-resize {
  resize: none;
}
</style>
