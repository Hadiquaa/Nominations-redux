import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
}

export const NominationSlice = createSlice({
    name: 'nominations',
    initialState,
    reducers: {
        addNomination: (state, action) => {
            state.list.push(action.payload);
        },
        removeNomination: (state, action) => {
            state.list =  state.list.filter(nomination => nomination.imdbID !== action.payload);
        }
    }
})

export const { addNomination, removeNomination } = NominationSlice.actions;

export default NominationSlice;