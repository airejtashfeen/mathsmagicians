import { configureStore } from "@reduxjs/toolkit"
import pageReducer from "./components/state/pageSlice"

export const store = configureStore({
    reducer: pageReducer,
})