import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    'name': 'search', 
    'initialState': {text: ''} ,
    'reducers': {
        updateSearchText (state, action){
            state.text = action.payload;
        }
    }
})

export { SearchSlice, };