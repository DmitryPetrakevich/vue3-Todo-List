!<template>
    <div class="notes-sidebar">
        <div class="notes-sidebar__container">
            <button
            class="notes-sidebar-btn"
            v-for="note in notes"
            :key="note.id"
            @click="$emit('changeNote', note.id)"
            :class="{active : note.id === activeNoteId}"
            >
            {{ note.title }}

            </button>

        </div>

    </div>
  
</template>

<script>
export default {
    props: [
        'notes',
        'activeNoteId',
    ],

    data() {
        return {

        }
    }
};
</script>

<style lang="less">
.notes-sidebar {
    position: fixed;
    right: 0;
    top: 80px;
    width: 300px;
    height: calc(100vh - 80px);    
    border: solid 1px grey;
    border-top: 3px solid black;
    border-left: 3px solid black;
    background-color: #f6faff;
    

    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    &-btn {
        display: block;
        box-sizing: border-box;
        width: 80%;
        font-size: 16px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 5px;
        border: 1px solid darkgreen;
        border-radius: 5px;
        color: black;
        background-color: #ebf3ff;
        padding: 6px 0;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &.active {
            background-color: #95ceff; // Активная заметка — синяя
    }

        &:hover {
          background-color: #95ceff;
        }

        &:active {
          background-color: #181818;
        }
    }
}

</style>