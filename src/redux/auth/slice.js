import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./operations";

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
            .addCase(signup.pending, (state)=>{
                state.isLoading = true;

            })
            .addCase(signup.fulfilled, (state)=>{
                state.isLoading = false;
                state.error = "";
                state.isLoggedIn = true;
                state.token = action.payload.token;
                
            })
            .addCase(signup.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state)=>{
                state.isLoading = true;

            })
            .addCase(login.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.error = "";
                state.isLoggedIn = true;
                state.token = action.payload.token;
                
            })
            .addCase(login.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logout.pending, (state)=>{
                state.isLoading = true;

            })
            .addCase(logout.fulfilled, (state)=>{
                state.isLoading = false;
                state.error = "";
                state.isLoggedIn = false;
                state.token = null;
                
            })
            .addCase(login.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })        
            .addCase(refresh.pending, (state)=>{
                state.isLoading = true;

            })
            .addCase(refresh.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.error = "";
                state.user = action.payload.name;
                
            })
            .addCase(refresh.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })      
    }
});

export const authReducer = authSlice.reducer;