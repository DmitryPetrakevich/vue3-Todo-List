!
<template>
  <div class="notes-view">
    <div class="notes-view__container">
      <NoteEditor :note="activeNote" />
      <NotesSidebar
        :notes="notes"
        :active-note-id="activeNoteId"
        @changeNote="setActiveNote"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import NoteEditor from "../features/notes/NoteEditor.vue";
import NotesSidebar from "../features/notes/NotesSidebar.vue";

const notes = ref([
    { id: 1, title: "Идеи проекта", text: "Начать с базового UI, потом добавить API." },
    { id: 2, title: "Заметка о Vue", text: "Vue 3 использует Composition API." },
    { id: 3, title: "Заметка о привычках", text: "Нужно добавить трекинг по датам." },
]);

const activeNoteId = ref(1);

function setActiveNote(id) {
  activeNoteId.value = id;
};

const activeNote = computed(() =>
  notes.value.find((n) => n.id === activeNoteId.value)
);
</script>

<style scoped></style>
