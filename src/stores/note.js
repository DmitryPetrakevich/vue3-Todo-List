import { defineStore } from "pinia";

export const useNoteStore = defineStore("note", {
  state: () => ({
    notes: [], 
    activeNoteId: null, 
  }),

  actions: {
    addNote(title) {
      const newNote = {
        id: Date.now(), 
        title: title || "Новая заметка",
        text: "",
      };
      this.notes.push(newNote);
      this.activeNoteId = newNote.id; 
    },
  },
});
