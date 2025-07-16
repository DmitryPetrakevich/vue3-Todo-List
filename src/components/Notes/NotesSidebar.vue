!<template>
    <div class="notes-sidebar">
        <div class="notes-sidebar__container">
            <button
            class="notes-sidebar-btn"
            v-for="note in notes"
            :key="note.id"
            @click="$emit('changeNote', note.id)"
            >
            {{ note.title }}

            </button>

        </div>

    </div>
  
</template>

<script>
export default {
    props: [
        'activeNote'
    ],

    data() {
        return {
            notes: [
                { id: 1, title: 'Идеи проекта', text: 'Начать с базового UI, потом добавить API.' },
                { id: 2, title: 'Заметка о Vue', text: 'Vue 3 использует Composition API.' },
                { id: 3, title: 'Заметка о привычках', text: 'Нужно добавить трекинг по датам.' }

            ]
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
    border-top: none;
    background-color: #e2e2e2;
    

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
        margin-bottom: 10px;
        border: none;
        border-radius: 5px;
        color: white;
        background-color: #4e4e4e;
        padding: 6px 0;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #737373;
        }

        &:active {
          background-color: #181818;
        }
    }
}

</style>