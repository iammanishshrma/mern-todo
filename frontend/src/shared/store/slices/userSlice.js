import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { apiInstance } from "../../utils/api";

const token = localStorage.getItem("token");
const initialState = {
    isLoggedIn: token ? true : false,
    token: token ? token : null,
};

export const login = createAsyncThunk("/login", async (payload, thunkAPI) => {
    return apiInstance
        .post("/user/login", payload)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return thunkAPI.rejectWithValue(error);
        });
});

const signUp = () => {};

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.token = null;
            state.isLoggedIn = false;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log("action", action.payload);
            state.isLoggedIn = action.payload.token ? true : false;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        });
        builder.addCase(login.rejected, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
