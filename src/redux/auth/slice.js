import { createSlice } from "@reduxjs/toolkit";
import {
    signup,
    login,
    logout,
    refreshUser
 } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        isLoggedIn: false,
        error: null,
        user: null,
        token: null,
    },
    extraReducers : (builder) => {
        builder
            .addCase(signup.fulfilled, (state, action)=>{
                state.isLoggedIn = true;
                state.token = action.payload.token;
                
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.isLoggedIn = true;
                state.token = action.payload.token;
                console.log("Token is set to", state.token)
            })
            .addCase(logout.fulfilled, (state)=>{
                state.error = "";
                state.isLoggedIn = false;
                state.token = null;
                self.user = null;
                
            })
            .addCase(refreshUser.pending, (state)=>{
                state.isLoading = true;

            })
            .addCase(refreshUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isLoggedIn = true;
                state.error = "";
                state.user = action.payload.name;
                
            })
            .addCase(refreshUser.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })      
    }
});

export const authReducer = authSlice.reducer;