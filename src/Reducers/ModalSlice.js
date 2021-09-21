import { createSlice } from "@reduxjs/toolkit";

const addTaskModalSlice = createSlice({
    name: 'addTaskModal',
    initialState: {
        modalIsOpen: false,
    },
    reducers: {
        changeVisibilityOfModal (state) {
            state.modalIsOpen = !state.modalIsOpen;
        }
    }
})

export { addTaskModalSlice, }