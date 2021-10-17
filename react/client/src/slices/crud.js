import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        users: [],
        jobs: [],
        companies: [],
    }
};

export const crudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        hydrate: (state, action) => {
            state.data = action.payload;
        },
        deleteAction: (state, action) => {
            if (action.payload.entity == "companies") {
                state.data['jobs'] = state.data['jobs'].filter(job => job.companyId !== action.payload.id);
            }
            state.data[action.payload.entity] = state.data[action.payload.entity].filter((user) => user.id !== action.payload.id);
        },
        updateAction: (state, action) => {
            state.data[action.payload.entity][state.data[action.payload.entity].findIndex(user => user.id == action.payload.item.id)] = action.payload.item
        },
        createAction: (state, action) => {
            state.data[action.payload.entity].push(action.payload.data);
        }
    },
})

// Action creators are generated for each case reducer function
export const { hydrate, deleteAction, updateAction, createAction } = crudSlice.actions

export default crudSlice.reducer

