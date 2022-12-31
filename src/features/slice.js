import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
    totalNote:0
}

export const noteSlice = createSlice({
    name:"note",
    initialState,
    reducers:{
        handleAddNote:(state,action)=>{
            state.notes.push(action.payload)
            toast.success(`Created Note: ${action.payload.title}`)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        deleteNote:(state,action) =>{
           const newNotes = state.notes.filter((note)=> note.id !== action.payload.id)

           state.notes = newNotes

           
           toast.success(`deleted Note: ${action.payload.title}`)

           localStorage.setItem('notes', JSON.stringify(state.notes))
        }
    }
})

export const {handleAddNote, deleteNote} = noteSlice.actions

export default noteSlice.reducer