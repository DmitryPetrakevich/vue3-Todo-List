!<template>
    <div class="notes-view">
        <div class="notes-view__container">
            <NoteEditor
            :active-note="activeNote"
            />
            <NotesSidebar />
            
        </div>

    </div>
  
</template>

<script>
import NoteEditor from './NoteEditor.vue';
import NotesSidebar from './NotesSidebar.vue';

export default {
    components: {
        NoteEditor,
        NotesSidebar
    },

    data() {
        return {
            activeNote: 'Note1',
        }
    }
    
};
</script>

<style scoped>
</style>