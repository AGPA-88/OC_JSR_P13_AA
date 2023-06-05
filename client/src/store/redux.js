import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState : {
        firstName: "",
        lastName: ""
    },
    reducers: {
        renameUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            console.log(state.firstName)   
            return state;
        }
    }, 
})

export const { renameUser } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})
