import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        Profile: [],
    },
    reducers: {
        getProfile: (state, action) => {
            state.Profile = action.payload
        },
       

    }
})

export const {getProfile} =userSlice.actions

export default userSlice.reducer