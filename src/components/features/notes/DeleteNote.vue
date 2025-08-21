<template>
    <div class="delete-note">
        <button 
        @click="deelteActiveNote"
        class="delete-note-btn"
        >
            Удалить 
        </button>
    </div>

</template>

<script setup>
import { useNoteStore } from '@/stores/note';

const store = useNoteStore()

function deelteActiveNote() {
    if(store.activeNoteId) {
        store.deleteNote(store.activeNoteId)
    }
}

</script>

<style scoped lang="less">
.delete-note-btn {
    display: block;
    width: 200px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
    border: 1px solid darkgreen;
    border-radius: 5px;
    color: black;
    background-color: #c7c7c7;
    padding: 6px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #95ceff;
    }

    &:hover {
      background-color: #7c7c7c;
    }

    &:active {
      background-color: #4f9ee2;
    }  
}
</style>