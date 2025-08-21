<template>
    <div class="sidebar">
        <NewNoteButton @add-note="store.addNote" />
        <NotesSidebar />
    </div>

    <div class="editor">
        <NoteEditor />
    </div>
</template>

<script setup>
import NewNoteButton from './NewNoteButton.vue';
import NotesSidebar from './NotesSidebar.vue';
import NoteEditor from './NoteEditor.vue';





</script>

<style scoped>
</style>