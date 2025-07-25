!<template>
    <div class="notes-view">
        <div class="notes-view__container">
            
            <NoteEditor
            :note="activeNote"

            />
            <NotesSidebar 
            :notes="notes"
            :active-note-id="activeNoteId"
            @changeNote="setActiveNote"

            />
            
        </div>

    </div>
  
</template>

<script>
import NoteEditor from '../features/notes/NoteEditor.vue';
import NotesSidebar from '../features/notes/NotesSidebar.vue';

export default {
    components: {
        NoteEditor,
        NotesSidebar
    },

    data() {
        return {
            notes: [
                { id: 1, title: 'Идеи проекта', text: 'Начать с базового UI, потом добавить API.' },
                { id: 2, title: 'Заметка о Vue', text: 'Vue 3 использует Composition API.' },
                { id: 3, title: 'Заметка о привычках', text: 'Нужно добавить трекинг по датам.' },
            ],

            activeNoteId: 1,
        }
    },

    methods: {
        setActiveNote(id) {
            this.activeNoteId = id;

        }
    },

    computed: {
        activeNote() {
            return this.notes.find(n => n.id === this.activeNoteId)
        }
        
    }

    
};
</script>

<style scoped>
</style>