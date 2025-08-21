<template>
  <div class="new-note">
    <input
      v-model="noteTitle"
      type="text"
      placeholder="Введите название заметки"
      class="new-note-input"
    />
    <button class="new-note-btn" @click="addNewNote">
      +
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNoteStore } from "@/stores/note";

const store = useNoteStore();
const noteTitle = ref("");

function addNewNote() {
  if (noteTitle.value.trim()) {
    store.addNote(noteTitle.value.trim());
    noteTitle.value = ""; 
  }
}
</script>

<style scoped lang="less">
.new-note {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 10px auto;
}

.new-note-input {
  flex: 1;
  font-size: 14px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 8px;
}

.new-note-btn {
  font-size: 20px;
  font-weight: bold;
  padding: 6px 12px;
  border: 1px solid darkgreen;
  border-radius: 5px;
  background-color: #8dbc9a;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7cb08c;
  }

  &:active {
    background-color: #74a282;
  }
}
</style>
