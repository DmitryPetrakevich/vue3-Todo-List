import { defineStore } from "pinia";

export const useNoteStore = defineStore("note", {
  state: () => ({
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    activeNoteId: null, 
  }),

  actions: {
    saveToLocalStorage() {
      localStorage.setItem('notes', JSON.stringify(this.notes))
    },

    addNote(title) {
      const newNote = {
        id: Date.now(), 
        title: title || "Новая заметка",
        text: "",
      };
      this.notes.push(newNote);
      this.activeNoteId = newNote.id; 
      this.saveToLocalStorage();
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id != id )
      this.saveToLocalStorage()
    },

    updateNote(id, newText) {
    const note = this.notes.find(note => note.id === id);
    if (note) {
      note.text = newText;
      this.saveToLocalStorage();
    }
  }

  },
  
});
