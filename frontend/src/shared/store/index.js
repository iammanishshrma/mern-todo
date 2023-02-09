import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        todoList: todoSlice,
    },
});

export default store;
