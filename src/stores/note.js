import { defineStore } from "pinia";

export const useNoteStore =  defineStore("note", {
    state: () => ({
        notes: [],
        



    }),

    actions: {
        addNote(title) {
            this.notes.push({
                title,
            })
        }
    }

})