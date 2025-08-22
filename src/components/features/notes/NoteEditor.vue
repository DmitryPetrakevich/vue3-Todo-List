<template>
  <div class="note-editor-wrapper">
    <SettingsNote v-if="store.notes.length > 0 && activeNote != null" />

    <div class="note-editor" v-if="activeNote">
      <div
        ref="editor"
        class="editor"
        contenteditable="true"
        @input="onInput"
      ></div>
    </div>
    <div v-else class="note-editor-empty">
      Выберите заметку или создайте новую
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { computed } from "vue";
import { useNoteStore } from "@/stores/note";
import SettingsNote from "./SettingsNote.vue";

const store = useNoteStore();
const editor = ref(null);

const activeNote = computed(() =>
  store.notes.find((n) => n.id === store.activeNoteId)
);

watch(activeNote, (note) => {
  if (editor.value && note) {
    editor.value.innerHTML = note.text || "";
  }
});

onMounted(() => {
  if (editor.value && activeNote.value) {
    editor.value.innerHTML = activeNote.value.text || "";
  }
});

function onInput(e) {
  if (activeNote.value) {
    activeNote.value.text = e.target.innerHTML;
    store.updateNote(activeNote.value.id, activeNote.value.text);
  }
}
</script>

<style scoped lang="less">
.note-editor-wrapper {
  display: flex;
  flex-direction: column;
}

.note-editor {
  flex: 1;
  padding: 20px;
}

.editor {
  width: 830px;
  height: calc(100vh - 200px);
  padding: 12px 16px;
  font-size: 16px;
  font-family: sans-serif;
  line-height: 1.6;
  border: 1px solid #cccccc;
  border-radius: 10px;
  transition: all 0.3s ease;
  outline: none;
  white-space: pre-wrap;
  overflow-y: auto;
}

.editor:focus {
  border-color: rgb(205, 233, 235);
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.note-editor-empty {
  padding: 20px;
  margin-left: 240px;
  margin-top: 60px;
  color: #ef0000;
  font-style: italic;
  font-size: 20px;
}
</style>
