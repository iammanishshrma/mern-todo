import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { apiInstance } from "../../utils/api";

const initialState = {
    todos: null,
};

export const getTodo = createAsyncThunk("/getTodo", (thunkAPI) => {
    return apiInstance
        .get("/todos")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return thunkAPI.rejectWithValue("Error");
        });
});

export const deleteTodo = createAsyncThunk(
    "/deleteTodo",
    async (id, { dispatch }) => {
        await apiInstance
            .delete(`/todos/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Error");
            });
        return dispatch(getTodo());
    }
);

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodo.pending, (state, action) => {});
        builder.addCase(getTodo.fulfilled, (state, action) => {
            console.log("todoSlice", action);
            state.todos = action.payload.todos;
        });
        builder.addCase(getTodo.rejected, (state, action) => {});
    },
});

export default todoSlice.reducer;
