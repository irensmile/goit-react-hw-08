import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";


const setAuth = (token) =>{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
} 

const clearAuth = () => {
    axios.defaults.headers.common.Authorization = '';
} 

/* {
  "name": "Adrian Cross",
  "email": "across@mail.com",
  "password": "examplepwd12345"
} */
export const signup = createAsyncThunk(
  "auth/signup",
  async (newUserCredentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUserCredentials);
      setAuth(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


/* {
  "email": "across@mail.com",
  "password": "examplepwd12345"
} */
export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post("/users/login", credentials);
        setAuth(response.data.token);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
      try {
        const response = await axios.post("/users/logout");
        clearAuth();
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  export const refresh = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        if (token === null){
            return thunkAPI.rejectWithValue("Not authorized");
        }
        try
        {
            setAuth(token);
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
