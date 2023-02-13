import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { apiInstance } from "../../utils/api";

const initialState = {};

export const login = createAsyncThunk("/login", async (payload, thunkAPI) => {
    return apiInstance
        .post("/user/login", payload)
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return thunkAPI.rejectWithValue(error);
        });
});

const signUp = () => {};

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log("action", action.payload);
            state = action.payload;
            return state;
        });
        builder.addCase(login.rejected, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});
export default userSlice.reducer;
