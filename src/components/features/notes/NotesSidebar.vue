<template>
  <div class="notes-sidebar" :class="{ 'mobile-open': isOpen }">
    <div class="sidebar-header">
      <button class="close-btn" @click="$emit('close')">×</button>
      <h3>Мои заметки</h3>
    </div>
    
    <div class="notes-sidebar__container">
      <NewNoteButton />
      <DeleteNote v-if="store.notes.length > 0" />
      <div class="notes-list">
        <button
          class="notes-sidebar-btn"
          v-for="note in store.notes"
          :key="note.id"
          @click="selectNote(note.id)"
          :class="{ active: note.id === store.activeNoteId }"
        >
          {{ note.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from "@/stores/note";
import NewNoteButton from "./NewNoteButton.vue";
import DeleteNote from "./DeleteNote.vue";

const store = useNoteStore();

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close']);

const selectNote = (noteId) => {
  store.activeNoteId = noteId;
};
</script>

<style scoped lang="less">
.notes-sidebar {
  position: fixed;
  right: 0;
  width: 300px;
  height: calc(100vh - 60px);
  border: solid 1px grey;
  border-top: none;
  box-sizing: border-box;
  background-color: #e2e2e2;
  z-index: 999;

  @media (min-width: 769px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    top: 0;
    height: 100vh;
    width: 85%; 
    max-width: 300px;
    
    &.mobile-open {
      transform: translateX(0);
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 15px 0;
  }

  .sidebar-header {
    display: none; 
    
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      border-bottom: 1px solid #ccc;
      background-color: #d5d5d5;
      
      h3 {
        margin: 0;
        font-size: 18px;
        color: #333;
      }
    }
  }

  .close-btn {
    display: none;
    
    @media (max-width: 768px) {
      display: block;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
      padding: 0;
      width: 30px;
      height: 30px;
      
      &:hover {
        color: #333;
      }
    }
  }

  .notes-list {
    flex: 1;
    overflow-y: auto;
    width: 100%;
    padding: 0 10px;
  }

  &-btn {
    display: block;
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    margin: 5px auto;
    border: 1px solid rgb(85, 87, 85);
    border-radius: 5px;
    color: #2d2d2d;
    background-color: #b1d1ba;
    padding: 8px 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background-color: #73a482;
    }

    &:hover {
      background-color: #73a482;
    }

    &:active {
      background-color: #b1cdba;
    }
  }
}
</style>