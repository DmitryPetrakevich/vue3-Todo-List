<template>
  <div class="notes-view">
    <NoteEditor />
    <NotesSidebar />
  </div>
</template>

<script setup>
import NoteEditor from "../features/notes/NoteEditor.vue";
import NotesSidebar from "../features/notes/NotesSidebar.vue";
</script>

<style scoped lang="less">
.notes-view {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px);
  background-color: #f9f9f9;
}
</style>
