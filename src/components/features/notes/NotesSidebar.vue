<template>
  <div class="notes-sidebar">
    <div class="notes-sidebar__container">
      <NewNoteButton />
      <DeleteNote v-if="store.notes.length > 0" />
      <button
        class="notes-sidebar-btn"
        v-for="note in store.notes"
        :key="note.id"
        @click="store.activeNoteId = note.id"
        :class="{ active: note.id === store.activeNoteId }"
      >
        {{ note.title }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from "@/stores/note";
import NewNoteButton from "./NewNoteButton.vue";
import DeleteNote from "./DeleteNote.vue";

const store = useNoteStore();
</script>

<style scoped lang="less">
.notes-sidebar {
  position: fixed;
  right: 0;
  top: 80px;
  width: 300px;
  height: calc(100vh - 80px);
  border: solid 1px grey;
  border-top: 1px solid black;
  border-left: 1px solid black;
  background-color: #e2e2e2;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-btn {
    display: block;
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
    border: 1px solid rgb(85, 87, 85);
    border-radius: 5px;
    color: #2d2d2d;
    background-color: #b1d1ba;
    padding: 4px 0;
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
