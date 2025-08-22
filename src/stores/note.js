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
  const index = this.notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    this.notes.splice(index, 1); 

    if (this.notes.length > 0) {
      if (index >= this.notes.length) {
        this.activeNoteId = this.notes[this.notes.length - 1].id;
      } else {
        this.activeNoteId = this.notes[index].id;
      }
    } else {
      this.activeNoteId = null;
    }
  }

  this.saveToLocalStorage();
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
