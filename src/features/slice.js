import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
  note:{}
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    handleAddNote: (state, action) => {
      state.notes.push(action.payload);
      toast.success(`Created Note: ${action.payload.title}`);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    getNote:(state,action) => {
      state.note = state.notes.find((item)=> item.id === action.payload)
    },
    deleteNote: (state, action) => {
      const newNotes = state.notes.filter(
        (note) => note.id !== action.payload.id
      );

      state.notes = newNotes;

      toast.success(`deleted Note: ${action.payload.title}`);

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    editNote: (state, action) => {
      state.notes = state.notes.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      toast.success(`updated note: ${action.payload.title}`);

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const { handleAddNote, deleteNote, editNote, getNote } = noteSlice.actions;

export default noteSlice.reducer;
