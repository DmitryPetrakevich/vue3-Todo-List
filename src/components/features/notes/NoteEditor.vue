<template>
  <div class="note-editor" v-if="activeNote">
    <textarea 
    v-model="activeNote.text" 
    @input="store.updateNote(activeNote.id, activeNote.text)"
    class="no-resize">
    </textarea>
  </div>
  <div v-else class="note-editor-empty">
    Выберите заметку или создайте новую
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNoteStore } from "@/stores/note";

const store = useNoteStore();

const activeNote = computed(() =>
  store.notes.find((n) => n.id === store.activeNoteId)
);
</script>

<style scoped lang="less">
.note-editor {
  padding: 20px;
}

textarea {
  width: 830px;
  height: calc(100vh - 150px);
  padding: 12px 16px;
  font-size: 16px;
  font-family: sans-serif;
  line-height: 1.6;
  border: 1px solid #cccccc;
  border-radius: 10px;
  resize: none;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgb(205, 233, 235);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
}
.note-editor-empty {
  padding: 20px;
  color: #777;
  font-style: italic;
}
</style>
