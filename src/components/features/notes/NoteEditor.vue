<template>
  <div class="note-editor-wrapper">
    <div class="settings">
      <SettingsNote v-if="store.notes.length > 0 && activeNote != null" />

      <svg 
        width="35px" 
        height="35px" 
        viewBox="0 0 512 512" 
        xmlns="http://www.w3.org/2000/svg"
        class="settings-list-svg"
        @click="toggleSidebar"
      >
        <rect width="264" height="32" x="208" y="80" fill="currentColor" class="ci-primary"/>
        <path fill="currentColor" d="M40,96a64,64,0,1,0,64-64A64.072,64.072,0,0,0,40,96Zm64-32A32,32,0,1,1,72,96,32.036,32.036,0,0,1,104,64Z" class="ci-primary"/>
        <rect width="264" height="32" x="208" y="240" fill="currentColor" class="ci-primary"/>
        <path fill="currentColor" d="M104,320a64,64,0,1,0-64-64A64.072,64.072,0,0,0,104,320Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,104,224Z" class="ci-primary"/>
        <rect width="264" height="32" x="208" y="400" fill="currentColor" class="ci-primary"/>
        <path fill="currentColor" d="M104,480a64,64,0,1,0-64-64A64.072,64.072,0,0,0,104,480Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,104,384Z" class="ci-primary"/>
      </svg>
    </div>

    <div 
      v-if="isSidebarOpen" 
      class="sidebar-overlay"
      @click="closeSidebar"
    ></div>

    <NotesSideBar 
      :is-open="isSidebarOpen"
      @close="closeSidebar"
    />

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
import NotesSideBar from "./NotesSidebar.vue";

const store = useNoteStore();
const editor = ref(null);
const isSidebarOpen = ref(false);

const activeNote = computed(() =>
  store.notes.find((n) => n.id === store.activeNoteId)
);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isSidebarOpen.value) {
      closeSidebar();
    }
  };
  
  window.addEventListener('keydown', handleEscape);
});

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
  flex: 1;
  height: 100%;
  width: calc(100% - 300px);
  position: relative; 
}

.note-editor {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex: 1;
  padding: 20px;
  width: 100%;
}

.editor {
  width: 100%;
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
  box-sizing: border-box;
}

.settings {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-right: 20px;
}

.settings-list-svg {
  display: block;
  cursor: pointer;
  color: #666; 
  transition: all 0.3s ease;

  @media (min-width: 769px) {
    display: none; 
  }
  
  &:hover {
    color: #42b983; 
    transform: scale(1.1); 
  }
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.editor:focus {
  border-color: rgb(205, 233, 235);
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.note-editor-empty {
  padding: 20px;
  margin-top: 60px;
  color: #ef0000;
  font-style: italic;
  font-size: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .note-editor-wrapper {
    width: 100%; 
  }
}
</style>