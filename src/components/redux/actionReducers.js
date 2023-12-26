import { createSlice, nanoid } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name:pageSlice,
    initialState:{
    dataArr: []
    },
    reducers:{
    }
})

export const {addDataToPage}= pageSlice.actions;
export default pageSlice.reducer;
